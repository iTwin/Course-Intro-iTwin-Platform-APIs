import { BrowserAuthorizationClient } from '@itwin/browser-authorization';
import { AccessToken } from '@itwin/core-bentley';
import { Authorization, EntityListIterator, IModelsClient, MinimalIModel } from '@itwin/imodels-client-management';
import { ProjectsAccessClient, Project } from '@itwin/projects-client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {
  const [accessToken, setAccessToken] = useState<AccessToken>();
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [imodelData, setImodelData] = useState<MinimalIModel[]>([]);

  const authClient = useMemo(
    () =>
      new BrowserAuthorizationClient({
        scope: process.env.IMJS_AUTH_CLIENT_SCOPES ?? "",
        clientId: process.env.IMJS_AUTH_CLIENT_CLIENT_ID ?? "",
        redirectUri: process.env.IMJS_AUTH_CLIENT_REDIRECT_URI ?? "",
        postSignoutRedirectUri: process.env.IMJS_AUTH_CLIENT_LOGOUT_URI,
        responseType: "code",
        authority: process.env.IMJS_AUTH_AUTHORITY,
      }),
    []
  );

  const getProjects = useCallback(async () => {
    if (accessToken) {
      const projectsAccessClient: ProjectsAccessClient = new ProjectsAccessClient();
      const projectList: Project[] = await projectsAccessClient.getAll(accessToken);
      setProjectData(projectList);
    };
  }, [accessToken]);

  /** Function that returns valid authorization information. */
  async function getAuthorization(): Promise<Authorization> {
    return { scheme: "", token: accessToken! };
  }

  const showImodelInfo = async (projectId: string) => {
    if (accessToken) {
      const iModelsClient: IModelsClient = new IModelsClient();
      const iModelIterator: EntityListIterator<MinimalIModel> = iModelsClient.iModels.getMinimalList({
        authorization: getAuthorization,
        urlParams: {
          projectId
        }
      });

      const iModelList: MinimalIModel[] = [];
      for await (const iModel of iModelIterator)
        iModelList.push(iModel);

      setImodelData(iModelList);
    }
  };

  useEffect(() => {
    void getProjects();
  }, [accessToken, getProjects]);

  const login = useCallback(async () => {
    try {
      await authClient.signInSilent();
    } catch {
      await authClient.signIn();
    }

    const at = await authClient.getAccessToken();
    setAccessToken(at);
  }, [authClient]);

  useEffect(() => {
    void login();
  }, [login]);

  return (
    <div className="App-header">
      {!accessToken && (
        <p>
          hello world, you're not signed in
        </p>
      )}
      <p>you're signed in</p>
      <div className='container'>
        <table className='data-table project-table'>
          <tbody>
            <tr>
              {projectData.length > 0 &&
                <>
                  <th>{"ID"}</th><th>{"Name"}</th><th>{"Code"}</th>
                </>
              }
            </tr>
            {projectData.length > 0 &&
              Object.keys(projectData).map((k: any) => {
                return (<tr key={k} onClick={() => { showImodelInfo(projectData[k].id); }}>{
                  <>
                    <td> {projectData[k].id}</td>
                    <td> {projectData[k].name}</td>
                    <td> {projectData[k].code}</td>
                  </>
                }
                </tr>)
              })
            }
          </tbody>
        </table>
        <table className='data-table imodels-table'>
          <tbody>
            {imodelData.length > 0 &&
              <tr>
                <th>{"Name"}</th>
                <th>{"ID"}</th>
              </tr>
            }
            {imodelData.length > 0 &&
              imodelData.map((k) => {
                return (<tr>
                  <td>{k.displayName}</td>
                  <td>{k.id}</td>
                </tr>)

              })
            }
          </tbody>
        </table>
      </div>
    </div >
  );
}

export default App;

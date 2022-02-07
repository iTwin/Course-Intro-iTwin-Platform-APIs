import { BrowserAuthorizationClient } from '@itwin/browser-authorization';
import { AccessToken } from '@itwin/core-bentley';
import { Authorization, EntityListIterator, IModelsClient, MinimalIModel } from '@itwin/imodels-client-management';
import { ProjectsAccessClient, Project } from '@itwin/projects-client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {
  const [accessToken, setAccessToken] = useState<AccessToken>();
  const [projectData, setProjectData] = useState<any[]>([]);

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

      for await (const iModel of iModelIterator)
        console.log(JSON.stringify(iModel));
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
      <div>
        <table className='project-table'>
          <tbody>

            <tr>
              {projectData.length > 0 &&
                Object.keys(projectData[0]).map((k: any) => {
                  return (
                    <th>
                      {k}
                    </th>
                  )
                })
              }
            </tr>
            {projectData.length > 0 &&
              Object.keys(projectData).map((k: any) => {
                return (<tr key={k} onClick={() => { showImodelInfo(projectData[k]['id']); }}>{
                  Object.keys(projectData[k]).map((k2: any) => {
                    return (<td>{projectData[k][k2]}</td>)
                  })}
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

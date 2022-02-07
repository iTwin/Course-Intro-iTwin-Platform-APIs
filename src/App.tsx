import { BrowserAuthorizationClient } from '@itwin/browser-authorization';
import { AccessToken } from '@itwin/core-bentley';
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
      const response = await fetch('https://api.bentley.com/projects/',
        {
          method: 'GET',
          headers: {
            Authorization: accessToken,
          }
        });
      if (response.ok) {
        const responseBody = await response.json();
        setProjectData(responseBody.projects);
      }
    };
  }, [accessToken]);

  const showImodelInfo = async (projectId: string) => {
    if (accessToken) {
      const response = await fetch(`https://api.bentley.com/imodels/?projectId=${projectId}`,
        {
          method: 'GET',
          headers: {
            Authorization: accessToken,
          }
        });
      if (response.ok) {
        const respBody = await response.json();
        console.log(respBody);
      }
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

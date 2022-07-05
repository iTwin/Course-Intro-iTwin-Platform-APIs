/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *
 * This code is for demonstration purposes and should not be considered production ready.
 *--------------------------------------------------------------------------------------------*/

import { BrowserAuthorizationClient } from '@itwin/browser-authorization';
import { AccessToken } from '@itwin/core-bentley';
import { IModelFull, IModelGrid } from '@itwin/imodel-browser-react';
import { Authorization, EntityListIterator, IModelsClient, MinimalIModel } from '@itwin/imodels-client-management';
import { ProjectsSource } from '@itwin/projects-client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import { ProjectTable } from './ProjectTable';

export const App = () => {
  const [accessToken, setAccessToken] = useState<AccessToken>();
  const [selectedProjectId, setSelectedProjectId] = useState<string>();

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

      setSelectedProjectId(projectId);
    }
  };

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
      {accessToken && (
        <>
          <p>You're signed in</p><div className='container'>
            <h1>Favorites</h1>
            <ProjectTable accessToken={accessToken} args={{ source: ProjectsSource.Favorites }} showImodelInfo={showImodelInfo} />
            <h1>All Projects</h1>
            <ProjectTable accessToken={accessToken} args={{}} showImodelInfo={showImodelInfo} />
            <h1 className='imodels-header'>iModels</h1>
            <div className={"data-table imodels-table"}>
              <IModelGrid
                accessToken={accessToken}
                projectId={selectedProjectId}
                onThumbnailClick={(clickedIModel: IModelFull) => { alert(`You have clicked ${clickedIModel.name}. You can launch a viewer with the id ${clickedIModel.id}.`) }} />
            </div>
          </div>
        </>
      )
      }
    </div >
  );
}

export default App;

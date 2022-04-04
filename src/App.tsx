/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *
 * This code is for demonstration purposes and should not be considered production ready.
 *--------------------------------------------------------------------------------------------*/


import { BrowserAuthorizationClient } from '@itwin/browser-authorization';
import { AccessToken } from '@itwin/core-bentley';
import { Authorization, EntityListIterator, IModelsClient, MinimalIModel } from '@itwin/imodels-client-management';
import { ProjectsSource } from '@itwin/projects-client';
import { ProgressRadial } from '@itwin/itwinui-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import { IModelsTable } from './IModelsTable';
import { ProjectTable } from './ProjectTable';

export const App = () => {
  /** State */
  const [accessToken, setAccessToken] = useState<AccessToken>();
  const [iModelData, setImodelData] = useState<MinimalIModel[]>([]);
  const [isLoadingIModels, setIsLoadingIModels] = useState(false);

  /** AuthClient for login. Instantiated with useMemo */
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

  /** Called when a project is clicked. */
  const showImodelInfo = async (projectId: string) => {
    setIsLoadingIModels(true);
    if (accessToken) {
      /** Create a IModelsClient and call getMinimal. Pass auth function */
      const iModelsClient: IModelsClient = new IModelsClient();
      const iModelIterator: EntityListIterator<MinimalIModel> = iModelsClient.iModels.getMinimalList({
        authorization: getAuthorization,
        urlParams: {
          projectId
        }
      });

      // Loop through iterator and create array
      const iModelList: MinimalIModel[] = [];
      for await (const iModel of iModelIterator)
        iModelList.push(iModel);

      setImodelData(iModelList);
      setIsLoadingIModels(false);
    }
  };

  /** Callback for login */
  const login = useCallback(async () => {
    try {
      await authClient.signInSilent();
    } catch {
      await authClient.signIn();
    }

    const at = await authClient.getAccessToken();
    setAccessToken(at); // Set state var
  }, [authClient]);

  /** Called when component is first rendered. */
  useEffect(() => {
    void login();
  }, [login]);

  return (
    <div className="App-header">
      {accessToken && (
        <>
          <p>You're signed in</p>
          <div className='container'>
            <h1>Favorites</h1>
            <ProjectTable accessToken={accessToken} args={{ source: ProjectsSource.Favorites }} showImodelInfo={showImodelInfo} />
            <h1>All Projects</h1>
            <ProjectTable accessToken={accessToken} args={{}} showImodelInfo={showImodelInfo} />
            <h1 className='imodels-header'>iModels</h1>
            {isLoadingIModels ?
              <ProgressRadial className={"imodels-table"} indeterminate={true} />
              : <IModelsTable accessToken={accessToken} iModelData={iModelData} />
            }
          </div>
        </>
      )
      }
    </div >
  );
}

export default App;

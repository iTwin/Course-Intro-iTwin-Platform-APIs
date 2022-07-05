/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *
 * This code is for demonstration purposes and should not be considered production ready.
 *--------------------------------------------------------------------------------------------*/

import { AccessToken } from "@itwin/core-bentley";
import { MinimalIModel } from "@itwin/imodels-client-management";
import { useState, useCallback, useEffect } from "react";
import { myImodelsApi } from "./clients/iModelsApi";

export interface IModelThumbnailProps {
  accessToken?: AccessToken;
  iModel: MinimalIModel;
}

/** Convert buffer response to URL format: data:image/png;base64 */
function convertArrayBufferToUrlBase64PNG(buffer: ArrayBuffer) {
  const byteArray = new Uint8Array(buffer);
  if (!byteArray || byteArray.length === 0) {
    throw new Error("Expected an image to be returned from the query");
  }

  const base64Data = btoa(
    byteArray.reduce((acc, byte) => acc + String.fromCharCode(byte), "")
  );
  return `data:image/png;base64,${base64Data}`;
}

/** Component for displaying an iModel thubmnail */
export const IModelThumbnail = ({ accessToken, iModel }: IModelThumbnailProps) => {
  const [thumbnail, setThumbnail] = useState<string>();

  // Use generated myImodelsApi client. The securityWorker and setting the security data provide the Authorization header
  // to iTwin Platoform iModels API.
  const iModelsApi = new myImodelsApi<string>({
    securityWorker: accessToken => accessToken ? { headers: { Authorization: accessToken } } : {},
  });
  iModelsApi.setSecurityData(accessToken!);

  /** Use myIModelsApi.getIModelThumbnail. Then pass response to helper method to get a PNG. */
  const getThumbnail = useCallback(async () => {
    if (accessToken) {
      const resp = await iModelsApi.id.getImodelThumbnail(iModel.id);
      if (resp.status === 200) {
        const img = await resp.data.arrayBuffer().then(convertArrayBufferToUrlBase64PNG);
        setThumbnail(img);
      }
    }
  }, [accessToken, iModel.id, iModelsApi.id]);

  /** Called when component is first rendered to get the image. */
  useEffect(() => {
    void getThumbnail();
  }, [accessToken, getThumbnail]);

  /** Render the image */
  return (
    <>
      <td>
        <img className="imodel-thumbnail" src={thumbnail ?? ""} alt={iModel.displayName} id={`${iModel.id}-thumbnail`} />
        <p>{iModel.displayName}</p>
      </td>
    </>
  )

}

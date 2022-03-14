import { AccessToken } from "@itwin/core-bentley";
import { MinimalIModel } from "@itwin/imodels-client-management";
import { useState, useCallback, useEffect } from "react";

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

export const IModelThumbnail = ({ accessToken, iModel }: IModelThumbnailProps) => {
  const [thumbnail, setThumbnail] = useState<string>();

  const getThumbnail = useCallback(async () => {
    if (accessToken) {
      const resp = await fetch(
        `https://api.bentley.com/imodels/${iModel.id}/thumbnail`,
        {
          method: "GET",
          headers: {
            Authorization: accessToken
          }
        }
      );

      if (resp.ok) {
        const imageFromResp = await resp.arrayBuffer().then(convertArrayBufferToUrlBase64PNG);
        setThumbnail(imageFromResp);
      }
    }
  }, [accessToken, iModel]);

  useEffect(() => {
    void getThumbnail();
  }, [accessToken, getThumbnail]);

  return (
    <>
      <td>
        <img className="imodel-thumbnail" src={thumbnail ?? ""} alt={iModel.displayName} id={`${iModel.id}-thumbnail`} />
        <p>{iModel.displayName}</p>
      </td>
    </>
  )

}

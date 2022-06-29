import { AccessToken } from "@itwin/core-bentley";
import { MinimalIModel } from "@itwin/imodels-client-management";
// import { IModelThumbnail } from "./IModelThumbnail";
import { IModelThumbnail } from "@itwin/imodel-browser-react";

export interface IModelsTableProps {
  accessToken?: AccessToken;
  iModelData: MinimalIModel[];
}
export const IModelsTable = ({ accessToken, iModelData }: IModelsTableProps) => {
  return (<table className='data-table imodels-table'>
    <tbody>
      {iModelData.length > 0 &&
        <tr>
          <th>{""}</th>
        </tr>
      }
      {iModelData.length > 0 &&
        iModelData.map((k) => {
          return (<tr>
            <IModelThumbnail accessToken={accessToken} iModelId={k.id} />
          </tr>)
        })
      }
    </tbody>
  </table>);
}
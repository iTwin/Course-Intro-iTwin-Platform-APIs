/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *
 * This code is for demonstration purposes and should not be considered production ready.
 *--------------------------------------------------------------------------------------------*/

import { AccessToken } from "@itwin/core-bentley";
import { MinimalIModel } from "@itwin/imodels-client-management";
import { IModelThumbnail } from "@itwin/imodel-browser-react";

/** Props for this component.
 * AccessToken to get the thumbnail and a list of iModels to display.
 */
export interface IModelsTableProps {
  accessToken?: AccessToken;
  iModelData: MinimalIModel[];
}

/** Component to display a list of iModels in a table. */
export const IModelsTable = ({ accessToken, iModelData }: IModelsTableProps) => {
  /** Render the table. */
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

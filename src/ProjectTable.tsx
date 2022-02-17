import { AccessToken } from "@itwin/core-bentley";
import { SvgStarHollow, SvgStar } from "@itwin/itwinui-icons-react";
import { Project, ProjectsAccessClient, ProjectsQueryArg, ProjectsQueryResult, ProjectsSource } from "@itwin/projects-client";
import { useCallback, useEffect, useState } from "react";

export interface ProjectTableProps {
  accessToken?: AccessToken;
  showImodelInfo(id: string): void;
  args?: ProjectsQueryArg;
}

export const ProjectTable = ({ accessToken, args, showImodelInfo }: ProjectTableProps) => {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [favProjects, setFavProjects] = useState<Project[]>([]);

  const getProjects = useCallback(async () => {
    if (accessToken) {
      const projectsAccessClient: ProjectsAccessClient = new ProjectsAccessClient();
      const projectList: ProjectsQueryResult = await projectsAccessClient.getByQuery(accessToken, args);
      setProjectData(projectList.projects);

      const favProjectList: ProjectsQueryResult = await projectsAccessClient.getByQuery(accessToken, { source: ProjectsSource.Favorites });
      setFavProjects(favProjectList.projects);
    }
  }, [accessToken, args]);

  useEffect(() => {
    void getProjects();
  }, [accessToken, getProjects]);

  const toggleFavorite = (async (projectId: string) => {
    if (accessToken) {
      const isFavorite = favProjects.find(x => x.id === projectId);
      const method = isFavorite ? "DELETE" : "POST";
      const resp = await fetch(`https://api.bentley.com/projects/favorites/${projectId}`,
        {
          method,
          headers: {
            Authorization: accessToken
          }
        });
      if (resp.ok) {
        getProjects();
      }
    }
  });

  return projectData.length > 0 ? (
    <table className='data-table project-table'>
      <tbody>
        <tr>
          {projectData.length > 0 &&
            <>
              <th></th><th>{"ID"}</th><th>{"Name"}</th><th>{"Code"}</th>
            </>
          }
        </tr>
        {projectData.length > 0 &&
          Object.keys(projectData).map((k: any) => {
            return (<tr key={k} onClick={() => { showImodelInfo(projectData[k].id); }}>{
              <>
                <td className="favorite-column" onClick={() => { toggleFavorite(projectData[k].id) }}> {favProjects.find(x => x.id === projectData[k].id) ? <SvgStar fill="blue" /> : <SvgStarHollow fill="blue" />}</td>
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
  ) : (
    <></>
  );
};

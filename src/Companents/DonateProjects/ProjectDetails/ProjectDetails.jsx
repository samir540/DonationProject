import React from "react";
import { servicesApi } from "../../../Service/apiService";
import { useParams } from "react-router-dom";
import Footer from '../../../Companents/Footer/Footer'
function ProjectDetails() {
  let { id } = useParams();
  const {
    data: project,
    error,
    isLoading,
  } = servicesApi.useGetProjectQuery(id);
  console.log(project);
  return (
    <section>
      {project && (
          <div className="project-details">
        <div className="container">
          <div className="project-details-heading">
        <h1>{project.name} {project.title}</h1>
        <h3>Həyat Fondu ilə</h3>
          </div>
        <div className="project-details-items">
          <div className="project-details-item">
          <div className="project-details-image">
          <img src={project.image} alt="" />
          </div>
          <div className="project-details-content">
            <h1>{project.content}</h1>
            <p>{project.text}</p>
          </div>
          </div>
          <div className="project-details-donate">
          <div className="project-details-amount">
         <div className="project-details-amount-overlay"></div>
          <div className="project-details-count">
              <div className="project-details-count-goal">
                <h3>Məqsəd: {project.amount} $ </h3>
              </div>
            <div className="project-details-count-percent">
            <h3>{project.percent} %</h3>

           <div className="project-details-count-percent-overlay">
           </div>
               </div>
            </div>
          </div>
          <div className="project-details-donate-button">
            <button onClick={()=>window.location=`/projectdetailsdonate/${project.id}`}>İndi İanə Et</button>
          </div>
          </div>
        </div>
        </div>
        </div>
      )}
      <Footer/>
    </section>
  );
}

export default ProjectDetails;

import React, { useState } from "react";
import Title from "../Title/Title";
import Image from "../../common/Image/Image";
import ProjectDetailsDropdown from "../ProjectDetailsDropdown/ProjectDetailsDropdown";
import './ProjectDetails.scss'
function ProjectDetails({projectDetails}) {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false)

    const clickHandler = () => {
        setIsAccordionOpen(!isAccordionOpen)
    }
    console.log(isAccordionOpen)
  return (
    <div className="project-details-container">
      <div className="project-details">
        <Title title={projectDetails.projectName} />
        <button onClick={clickHandler}>{isAccordionOpen ? '-' : '+'}</button>
      </div>
      {isAccordionOpen && <ProjectDetailsDropdown details={projectDetails}/>}
    </div>
  );
}

export default ProjectDetails;

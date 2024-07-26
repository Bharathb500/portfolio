import './ProjectDetailsDropdown.scss'
function ProjectDetailsDropdown({ details }) {
  return (
    <div className="project-details-dropdown">
      {details.responsibilities.length > 0 &&
        details.responsibilities.map((responsibility) => (
          <li>{responsibility.responsibility}</li>
        ))}
    </div>
  );
}

export default ProjectDetailsDropdown;

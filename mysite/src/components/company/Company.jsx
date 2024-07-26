import Image from "../../common/Image/Image"
import ProjectDetails from "../ProjectDetails/ProjectDetails"
import './Company.scss'
function Company({company}) {
  return (
    <section className="company">
        <Image imgSrc={company.companyLogo}/>
        {company.clientProjects.length > 0 && company.clientProjects.map(project => <ProjectDetails projectDetails={project}/>)}
    </section>
  )
}

export default Company
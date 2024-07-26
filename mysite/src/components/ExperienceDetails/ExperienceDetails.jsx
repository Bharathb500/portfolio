import { companies } from "../../mockData/company"
import Companies from "../Companies/Companies"
import Title from "../Title/Title"
import './ExperienceDetails.scss'
function ExperienceDetails() {
  return (
    <div className='experience-details'>
        <Title title="Experience"/>
        <Companies companies={companies}/>
    </div>
  )
}

export default ExperienceDetails
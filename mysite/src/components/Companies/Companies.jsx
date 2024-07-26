import Company from "../company/Company";
import './Companies.scss'
function Companies({ companies }) {
  return (
    <div className="companies">
      {companies.length > 0 &&
        companies.map((company) => <Company company={company} />)}
    </div>
  );
}

export default Companies;

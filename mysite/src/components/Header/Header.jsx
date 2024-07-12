import TopHeader from './TopHeader';
import './Header.scss';
import { topheaderdata } from '../../mockData/TopHeader';

const Header = () => {
  return (
    <header className="header">
      <TopHeader topHeader={topheaderdata} />
      {/* Additional header content goes here */}
    </header>
  );
};

export default Header;

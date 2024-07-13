import TopHeader from './TopHeader';
import './Header.scss';
import { topheaderdata } from '../../mockData/TopHeader';

const Header = ({clickHandler}) => {
  return (
    <header className="header">
      <TopHeader clickHandler={clickHandler} topHeader={topheaderdata} />
      {/* Additional header content goes here */}
    </header>
  );
};

export default Header;

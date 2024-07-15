import TopHeader from './TopHeader';
import './Header.scss';
import { topheaderdata } from '../../mockData/TopHeader';

const Header = ({clickHandler, isModalOpen}) => {
  return (
    <header className="header">
      <TopHeader isModalOpen={isModalOpen} clickHandler={clickHandler} topHeader={topheaderdata} />
      {/* Additional header content goes here */}
    </header>
  );
};

export default Header;

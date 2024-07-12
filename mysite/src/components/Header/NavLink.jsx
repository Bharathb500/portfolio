const NavLink = ({ navLink, text }) => {
  return (
    <a className="nav-link" href={navLink}>
      {text}
    </a>
  );
};

export default NavLink;

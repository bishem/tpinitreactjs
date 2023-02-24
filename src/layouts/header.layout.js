const HeaderLayout = ({ children }) => {
  return (
    <div
      id="header-layout"
      className="parent-width flex center"
    >
      <header className="parent-width flex items-center content-between">
        {children}
      </header>
    </div>
  );
};

export default HeaderLayout;

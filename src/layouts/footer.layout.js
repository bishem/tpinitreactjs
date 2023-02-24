const FooterLayout = ({ children }) => {
  return (
    <div
      id="footer-layout"
      className="parent-width flex center"
    >
      <footer className="parent-width flex items-center">{children}</footer>
    </div>
  );
};

export default FooterLayout;

/**
 * Amin MOHAMED
 * Version 1.0
 */
import '../styles/HeaderLayout.css';

/**
 * header layout of the application
 *
 * @param {{children: JSX.Element}} props
 * @returns
 */
const HeaderLayout = ({ children }) => {
  return (
    <header
      id="header-layout"
      className="parent-width"
    >
      {children}
    </header>
  );
};

export default HeaderLayout;

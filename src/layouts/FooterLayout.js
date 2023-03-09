/**
 * Amin MOHAMED
 * Version 1.0
 */
import '../styles/FooterLayout.css';

/**
 * footer layout of the application
 *
 * @param {{children: JSX.Element}} props
 * @returns
 */
const FooterLayout = ({ children }) => {
  return (
    <footer
      id="footer-layout"
      className="parent-width"
    >
      {children}
    </footer>
  );
};

export default FooterLayout;

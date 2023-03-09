/**
 * Amin MOHAMED
 * Version 1.0
 */
import { Informations, Navigation } from '../components';

/**
 * main layout of the application
 *
 * @param {{children: JSX.Element}} props
 * @returns
 */
const MainLayout = ({ children }) => {
  return (
    <div
      id="main-layout"
      className="fill-parent flex column"
    >
      <Navigation />
      <main className="main-content parent-width grow">{children}</main>
      <Informations />
    </div>
  );
};

export default MainLayout;

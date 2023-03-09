/**
 * Amin MOHAMED
 * Version 1.0
 */
import { Link } from 'react-router-dom';
import { HeaderLayout } from '../layouts';
import Logo from './Logo';

/**
 * navigation component of the application
 *
 * @returns
 */
const Navigation = () => {
  return (
    <HeaderLayout>
      <div className="navigation flex fill-parent items-center content-between">
        <Logo />
        <nav className="navigation-links flex center">
          <button>
            <Link to="/">Acceuil</Link>
          </button>
        </nav>
      </div>
    </HeaderLayout>
  );
};

export default Navigation;

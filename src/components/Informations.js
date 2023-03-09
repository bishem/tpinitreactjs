/**
 * Amin MOHAMED
 * Version 1.0
 */
import { FooterLayout } from '../layouts';
import Clock from './Clock';

/**
 * component concentrating all useful informations about the application and more
 * @returns
 */
const Informations = () => {
  return (
    <FooterLayout>
      <div className="informations flex fill-parent items-center">
        <Clock />
      </div>
    </FooterLayout>
  );
};

export default Informations;

import { HeaderLayout } from '@/layouts';
import { Logo } from '.';

const Navigation = () => {
  return (
    <HeaderLayout>
      <Logo />
      <nav>
        <button>Acceuil</button>
      </nav>
    </HeaderLayout>
  );
};

export default Navigation;

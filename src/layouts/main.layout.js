import Navigation from '@/components/Navigation';

const MainLayout = ({ children }) => {
  return (
    <div
      id="main-layout"
      className="fill-parent flex column center"
    >
      <Navigation />
      <main className="parent-width grow flex center">{children}</main>
    </div>
  );
};

export default MainLayout;

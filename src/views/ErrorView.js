/**
 * Amin MOHAMED
 * Version 1.0
 */
import { useRouteError } from 'react-router-dom';
import { MainLayout } from '../layouts';

/**
 * error page
 * <p>
 * catch all errors bubbling up from the router
 * and display them here
 *
 * @returns
 */
const ErrorView = () => {
  const error = useRouteError();

  return (
    <MainLayout>
      <div className="error-view flex fill-parent items-center">
        <div className="">Oops! Something went wrong</div>
        <div className="">{error.message}</div>
      </div>
    </MainLayout>
  );
};

export default ErrorView;

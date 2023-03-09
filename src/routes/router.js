/**
 * Amin MOHAMED
 * Version 1.0
 */
import { createBrowserRouter } from 'react-router-dom';
import {
  ErrorView,
  PersonCreateView,
  PersonListView,
  PersonUpdateView,
} from '../views';
import RouterOutlet from './RouterOutlet';

/**
 * routes of the application
 */
const ROUTES = [
  {
    path: '/',
    element: <RouterOutlet />,
    errorElement: <ErrorView />,
    children: [
      {
        index: true,
        element: <PersonListView />,
        loader: PersonListView.loader,
      },
      {
        path: 'person/update/:id',
        element: <PersonUpdateView />,
        loader: PersonUpdateView.loader,
        action: PersonUpdateView.action,
      },
      {
        path: 'person/create',
        element: <PersonCreateView />,
        action: PersonCreateView.action,
      },
    ],
  },
];

/**
 * router of the application
 * @type {BrowserRouter}
 */
const router = createBrowserRouter(ROUTES);

export default router;

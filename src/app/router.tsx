import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from './layouts/base-layout';
import { ProductsPage } from '@/pages/products';
import { PricePlansPage } from '@/pages/price-plans';
import { PagesPage } from '@/pages/pages';

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      { path: '/', element: <ProductsPage /> },
      { path: '/price-plans', element: <PricePlansPage /> },
      { path: '/pages', element: <PagesPage /> },
    ],
  },
]);

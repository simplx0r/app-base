import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const withRouter = (component: () => React.ReactNode) => () => (
  <BrowserRouter>
    <Suspense fallback={<div>loading...</div>}>
      {component()}
    </Suspense>
  </BrowserRouter>
);
export { withRouter };

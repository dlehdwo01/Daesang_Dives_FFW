import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UILayout } from './components/UI/organisms/UILayout';
import { UIHeader } from './components/UI/organisms/UIHeader';

const pageRoutes = import.meta.glob<{ default: React.ComponentType<any> }>(
  './pages/**/[a-z[]*.tsx',
);

export const AppRoutes = () => {
  return (
    <>
      <UILayout.Page>
        <UIHeader />
        <Routes>
          {Object.keys(pageRoutes).map((filePath) => {
            const routePath = filePath
              .replace('./pages', '') // ./pages 제거
              .replace(/\.tsx$/, '') // .tsx 확장자 제거
              .replace(/\/index$/, ''); // index.tsx는 루트로 처리
            console.log(routePath);
            // 페이지 컴포넌트를 동적으로 import하고 Route로 변환
            const PageComponent = React.lazy(() => pageRoutes[filePath]());
            return (
              <Route
                key={filePath}
                path={routePath}
                element={
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <PageComponent />
                  </React.Suspense>
                }
              />
            );
          })}
        </Routes>
        {/* <UIFooter /> */}
      </UILayout.Page>
    </>
  );
};

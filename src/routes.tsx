import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { UIHeader } from './components/organisms/UIHeader';
import { UIFooter } from './components/organisms/UIFooter';

const pageRoutes = import.meta.glob<{ default: React.ComponentType<any> }>(
  './pages/**/[a-z[]*.tsx',
);

export const AppRoutes = () => {
  return (
    <>
      <div className="min-w-[1025px] contain-content">
        <UIHeader />
        <Routes>
          {Object.keys(pageRoutes).map((filePath) => {
            const routePath = filePath
              .replace('./pages', '') // ./pages 제거
              .replace(/\.tsx$/, '') // .tsx 확장자 제거
              .replace(/\/index$/, ''); // index.tsx는 루트로 처리
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
        <UIFooter />
      </div>
    </>
  );
};

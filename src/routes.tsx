import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Security from './components/Security';
import { UILoading } from './components/UI/organisms/UILoading';

const pageRoutes = import.meta.glob<{ default: React.ComponentType<any> }>(
  './pages/**/[a-z[]*.tsx',
);

export const AppRoutes = () => {
  return (
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
              <React.Suspense fallback={<UILoading isOpen={true} />}>
                <Security>
                  <PageComponent />
                </Security>
              </React.Suspense>
            }
          />
        );
      })}
    </Routes>
  );
};

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page from './components/Page';
import { UILoading } from './components/UI/organisms/UILoading';
import Login from './pages';
import { UILayout } from './components/UI/organisms/UILayout';

const pageRoutes = import.meta.glob<{ default: React.ComponentType<any> }>(
  './pages/**/[a-z[]*.tsx',
);

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <React.Suspense fallback={<UILoading isOpen={true} />}>
            {/* <Page> */}
            <UILayout.Page>
              <Login />
            </UILayout.Page>
            {/* </Page> */}
          </React.Suspense>
        }
      />
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
                <Page>
                  <PageComponent />
                </Page>
              </React.Suspense>
            }
          />
        );
      })}
    </Routes>
  );
};

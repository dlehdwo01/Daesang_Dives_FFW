import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { UILayout } from './components/UI/organisms/UILayout';
import { UIHeader } from './components/UI/organisms/UIHeader';
import Security from './components/Security';
import { UILoading } from './components/UI/organisms/UILoading';

const pageRoutes = import.meta.glob<{ default: React.ComponentType<any> }>(
  './pages/**/[a-z[]*.tsx',
);

export const AppRoutes = () => {
  return (
    <>
      <UILayout.Page>
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
        {/* <UIFooter /> */}
      </UILayout.Page>
    </>
  );
};

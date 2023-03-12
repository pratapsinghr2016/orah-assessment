import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { store } from "shared/store"
import { GlobalStyle } from "shared/styles/global-style"
import StaffApp from "staff-app/app"
import ErrorBoundary from "staff-app/components/error-boundries/error-boundries.components"
import LandingPage from "staff-app/landing"
import React, { Suspense } from "react"
import PageNotFound from "staff-app/not-found/not-found"

type ComponentWithChildProps = React.PropsWithChildren<{ val?: string }>

const SC = ({ children }: ComponentWithChildProps) => <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<LandingPage />} />
            <Route
              path="staff/*"
              element={
                <SC>
                  <StaffApp />
                </SC>
              }
            />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

import React from "react"
import { Routes, Route } from "react-router-dom"
import "shared/helpers/load-icons"
import { Header } from "staff-app/components/header/header.component"
import { Footer } from "staff-app/components/footer/footer.component"
import { HomeBoardPage } from "staff-app/daily-care/home-board.page"
import { ActivityPage } from "staff-app/platform/activity.page"
import styled from "styled-components"

const BodyContainer = styled.div`
  min-height: 100vh;
`

function App() {
  return (
    <>
      <Header />
      <BodyContainer>
        <Routes>
          <Route path="daily-care" element={<HomeBoardPage />} />
          <Route path="activity" element={<ActivityPage />} />
          <Route path="*" element={<div>No Match</div>} />
        </Routes>
      </BodyContainer>
      <Footer />
    </>
  )
}

export default App

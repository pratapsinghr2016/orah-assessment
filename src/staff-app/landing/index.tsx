import React, { Fragment } from "react"
import "shared/helpers/load-icons"
import { Header } from "staff-app/components/header/header.component"
import styled from "styled-components"
import Content from "./content"
import { Footer } from "staff-app/components/footer/footer.component"

const BodyContainer = styled.div`
  min-height: 100vh;
`

const LandingPage = () => {
  return (
    <Fragment>
      <Header />
      <BodyContainer>
        <Content />
      </BodyContainer>
      <Footer />
    </Fragment>
  )
}

export default LandingPage

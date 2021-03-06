

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import styled from "styled-components"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const MainStyle = styled.div`
  margin: 0 auto;
  max-width: 1920px;
 
  
  
  `

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <MainStyle>
        <main>{children}</main>
      </MainStyle>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}




export default Layout

import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./layout.css"
import styled from "styled-components"


const StyleWrapper = styled.div`
min-height: 100px;

`


const Header = ({ siteTitle }) => (
  
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >

 <StyleWrapper className="container">
  <div className="row d-flex flex-wrap justify-content-center ">
  <div className="col-12 col-md-6 ">
  <h1 className="logo1"  style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
  </div>
  <div className="col-12 col-md-6">

  <ul className="nav nav-pills justify-content-space-evenly ">
      <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link">About</a></li>
      <li className="nav-item">
      </li>
    </ul>

  </div>
  </div>
</StyleWrapper>



</header>


)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

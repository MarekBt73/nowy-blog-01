

import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"






const Footer = ({ siteTitle }) => (
    <footer
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
        color:"white"
      }}
    >

<div className="container">
  <div className="py-3 my-4 footer1">
    <ul className="nav justify-content-center pb-3 mb-3 footer1">
    <li className="nav-item mb-2"><Link to="/" className="nav-link p-1 " >Strona Główna</Link></li>
    <li className="nav-item mb-2"><Link to="/page-2" className="nav-link p-1 " >Strona 2</Link></li>
    <li className="nav-item mb-2"><Link to="/page-3" className="nav-link p-1 " >strona 3</Link></li>
    <li className="nav-item mb-2"><Link to="/o-mnie" className="nav-link p-1 " >O mne</Link></li>
    </ul>
    <p className="text-center text-muted">© 2021 Company, Inc</p>
  </div>
</div>



</footer>


)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

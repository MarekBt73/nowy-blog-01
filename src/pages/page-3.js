

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/layout.css"
import "bootstrap/dist/css/bootstrap.min.css"




const PageThre = () => (
  <Layout>
    <Seo title="Page 3" />

  <div className="container">
    <div className="row mb-3">
  <div className="col-sm-6 col-lg-8 themed-grid-col">.col-sm-6 .col-lg-8</div>
  <div className="col-6 col-lg-4 themed-grid-col">.col-6 .col-lg-4</div>
</div>

<div className="row mb-3">
  <div className="col-sm-6 col-lg-8 themed-grid-col">.col-sm-6 .col-lg-8</div>
  <div className="col-6 col-lg-4 themed-grid-col">.col-6 .col-lg-4</div>
</div>

<div className="row mb-3 __web-inspector-hide-shortcut__">
  <div className="col-sm-6 col-lg-8 themed-grid-col">.col-sm-6 .col-lg-8</div>
  <div className="col-6 col-lg-4 themed-grid-col">.col-6 .col-lg-4</div>
</div>

</div>



  </Layout>
)

export default PageThre
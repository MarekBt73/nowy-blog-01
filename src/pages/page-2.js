import * as React from "react"
import { Link } from "gatsby"
import "../components/layout.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

import "bootstrap/dist/css/bootstrap.min.css"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>




    
  </Layout>
)

export default SecondPage

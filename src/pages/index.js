import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/layout.css"
import styled from 'styled-components'


const H1 = styled.h1`
font-size: 53px;
text-align: center;
`
const StyleWrapper = styled.div`
max-width: 1190px;
margin: 10px auto;
background-color: grey;
`



const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StyleWrapper>
    <H1>Witaj świecie</H1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/o-mnie/">O mnie</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
    </StyleWrapper>
  </Layout>
)

export default IndexPage

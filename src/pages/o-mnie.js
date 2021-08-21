import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/layout.css"
import styled from "styled-components"

const H1 = styled.h1`
font-size: 36px;
text-align: center;
`

const H2 = styled.h2`

font-size: 20px;
text-align: center;
`

const P =styled.p`
font-size: 16px;
line-height: 20px;
letter-spacing: 0.5px
`



const oMnie = () => (
  <Layout>
    <Seo title="O mnie" />
    <H1>O mnie</H1>
    <div className="container">
  <div className="row">
    <div className="col">
    <H2>PORADA NR 1</H2>
    <P>Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum. </P>
    </div>
    <div className="col">
    <H2>PORADA NR 1</H2>
    <P>Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum. </P>
    </div>
    <div className="col">
    <H2>PORADA NR 1</H2>
    <P>Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum. </P>
    </div>
  </div>
</div>

  </Layout>
)

export default oMnie
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"


import "../../src/components/layout.css"
const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <HeroSection home = {false} ></HeroSection>
  </Layout>
)

export default Contact

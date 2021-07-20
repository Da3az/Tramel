import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
import Images from '../components/images'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection home={true}></HeroSection>
    <Images album = {false}></Images>
  </Layout>
)

export default IndexPage

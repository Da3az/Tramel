import * as React from "react"
import Images from "../components/images"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Album = () => (
  <Layout>
    <Seo title="Images" />
    <Images album = {true}></Images>
  </Layout>
)

export default Album

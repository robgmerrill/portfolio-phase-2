import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="">
      <h1 className="text-4xl font-bold leading-normal md:text-center">
        I help businesses grow by creating software experiences that are simple
        and delightful.
      </h1>
    </div>
  </Layout>
)

export default IndexPage

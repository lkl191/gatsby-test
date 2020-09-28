import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const IndexPage = () => (
    <Layout>
        <h1>My First Component</h1>
        <Link to ="/">Back to home</Link>
    </Layout>
)
export default IndexPage
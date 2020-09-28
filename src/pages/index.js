import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <h1>ホーム</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <Link to="/page-2/">Go to page-2</Link>
    </Layout>
  );
}
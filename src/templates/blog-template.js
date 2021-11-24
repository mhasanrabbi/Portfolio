import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

import ReactMarkdown from "react-markdown"

const ComponentName = ({ data }) => {
  const { content, title, description } = data.blog
  return (
    <Layout>
      <Seo title={title} description={description} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown children={content} />
          </article>
          <Link to="/blog" className="btn center-btn">
            articles
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      description
    }
  }
`

export default ComponentName

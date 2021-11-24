import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/SEO"
import Img from "gatsby-image"
const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { info, stack, title, image } = nodes[0]
  return (
    <Layout>
      <Seo title="About" description="about Mahmud Hasan Rabbi" />
      <section className="about-page">
        <div className="section-center about-center">
          <Img
            fluid={image.localFile.childImageSharp.fluid}
            className="about-img"
          />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        id
        stack {
          id
          title
        }
        title
        info
        image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default About

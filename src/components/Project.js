import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa"
const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <article className="project">
      {image && (
        <Img
          fluid={image.localFile.childImageSharp.fluid}
          className="project-img"
        />
      )}

      <div className="project-info">
        <h3>{title || "Title"}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="projects-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaExternalLinkAlt className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project

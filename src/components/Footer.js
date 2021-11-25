import React from "react"
import SocialLinks from "../constants/socialLinks"
import { GrGatsbyjs } from "react-icons/gr"
import { Icon } from "@iconify/react"
import netlifyIcon from "@iconify/icons-simple-icons/netlify"
import { FaReact } from "react-icons/fa"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h4>
          &copy;{new Date().getFullYear()},<span>Mahmud Hasan Rabbi</span>{" "}
          running with github actions
        </h4>
      </div>
    </footer>
  )
}

export default Footer

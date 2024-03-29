import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <Seo title="Contact" description="Contact with Mahmud Hasan Rabbi" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form
            action="https://formsubmit.co/mhmdhasanrabbi@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                required
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              />
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact

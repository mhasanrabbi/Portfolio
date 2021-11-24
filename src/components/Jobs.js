// import React, { useState } from "react"
// import Title from "./Title"
// import { FaAngleDoubleRight } from "react-icons/fa"
// import { graphql, useStaticQuery } from "gatsby"
// import { Link } from "gatsby"

// const query = graphql`
//   {
//     allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
//       nodes {
//         id
//         company
//         date
//         position
//       }
//     }
//   }
// `

// const Jobs = () => {
//   const data = useStaticQuery(query)
//   const {
//     allStrapiJobs: { nodes: jobs },
//   } = data
//   const [value, setValue] = useState(0)
//   const { company, position, date } = jobs[0]
//   return (
//     <section className="section jobs">
//       <Title title="expierence" />
//       <div className="jobs-center"></div>
//     </section>
//   )
// }

// export default Jobs

import * as React from "react"
import { graphql, PageProps } from "gatsby"

export default function BlogPost({ data }: PageProps<Queries.BlogPostQuery>) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark ?? {}

  return (
    <div>
      <div>
        <h1>{frontmatter?.title}</h1>
        <h2>{frontmatter?.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html ?? "" }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date(formatString: "DD MMM YYYY")
        slug
        title
      }
      html
    }
  }
`

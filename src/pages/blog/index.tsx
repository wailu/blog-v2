import * as React from "react"
import { graphql, PageProps } from "gatsby"

export default function BlogDirectory({
  data,
}: PageProps<Queries.BlogDirectoryQuery>) {
  const {
    allMarkdownRemark: { nodes },
  } = data

  return (
    <div>
      <ol>
        {nodes.map(({ frontmatter }) => (
          <li>{frontmatter?.slug}</li>
        ))}
      </ol>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogDirectory {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          slug
        }
      }
    }
  }
`

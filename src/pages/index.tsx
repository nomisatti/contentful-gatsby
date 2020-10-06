import React from 'react'
import {graphql, Link} from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

export default ({data}) => {
  console.log(data);
  const posts = data.allContentfulBlogSite.edges.map((post , index) =>
    <li key={index}><Link to={post.node.slug}>{post.node.title}</Link></li>
  );
  return (
      <ul>
          {posts}
      </ul>
  );
}

export const query = graphql`

    query {
        allContentfulBlogSite {
            edges {
              node {
                title
                slug
                content {
                  json
                }
                publishDate
              }
            }
          }
    }
`
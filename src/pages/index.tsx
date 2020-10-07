import React, { useEffect, useState } from 'react'
import { graphql, Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default ({ data }) => {

  const [netlifyData , setNetlifyData] = useState(Object);

  useEffect(() =>{
    fetch(`/.netlify/functions/hello`)
    .then(response => response.json())
    .then(data => setNetlifyData(data));
}, []);
  console.log(data);
  const posts = data.allContentfulBlogSite.edges.map((post, index) =>
    <li key={index}><Link to={post.node.slug}>{post.node.title}</Link></li>
  );
  return (
    <div>
      <ul>
        {posts}
      </ul>

      <hr/>
      <div>
        {netlifyData.message}
      </div>

    </div>

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
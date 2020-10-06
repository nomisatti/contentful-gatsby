exports.createPages = async function ({graphql , actions}) {

    const query = await graphql(`
     query {
        allContentfulBlogSite {
            edges {
              node {
                title
                publishDate
                slug
                content {
                  json
                }
              }
            }
          }
     }
    
    `);
    console.log(JSON.stringify(query));

    const posts = query.data.allContentfulBlogSite.edges;

    posts.map((post) => {
        actions.createPage({
            path:post.node.slug,
            component: require.resolve(`./src/templates/blog-post.tsx`),
            context: post.node
        })
    })
}
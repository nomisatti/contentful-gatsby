import React, { useEffect, useState } from 'react'
import { graphql, Link, navigate } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import "./main.css"


export default ({ data }) => {


  console.log(data);
  const posts = data.allContentfulBlogSite.edges.map((post, index) =>
    <li key={index}><Link to={post.node.slug}>{post.node.title}</Link></li>
  );
  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          <Col xs={12} md={3}> <Sidebar data={data} /></Col>
          <Col xs={12} md={8}>
            <Container>
            {data.allContentfulBlogSite.edges.map((post, index) =>
              <Row key={index}> 

                <Col><Card className="text-center">
                  <Card.Header><Card.Img variant="top" src={post.node.image.file.url} alt={post.node.image.title} /></Card.Header>
                  <Card.Body>
                    <Card.Title>{post.node.title}</Card.Title>
                    <div className="card-text">
                   
                    {documentToReactComponents(post.node.content.json)}
                    </div>
                    <br/>
                    <Link to={post.node.slug} className='btn btn-primary'>Read More</Link>
                  </Card.Body>
                  <Card.Footer className="text-muted"> Published : {new Date(post.node.publishDate).toDateString()}</Card.Footer>
                </Card>

                </Col>
              </Row>
            )}
          </Container></Col>

        </Row>

      </Container>

    </div >

  );
}

export const query = graphql`

    query {
        allContentfulBlogSite {
            edges {
              node {
                title
                slug
                image {
                  title
                  file {
                    url
                  }
                }
                content {
                  json
                }
                publishDate
              }
            }
          }
    }
`
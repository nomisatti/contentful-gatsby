import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Card, Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
export default ({ pageContext }) => {
    return (
        <div>
            <Header />
            <Container fluid>
                <Row>
                    <Col xs={12} md={3}><Sidebar data={pageContext}/></Col>
                    <Col xs={12} md={8}>
                        <div className='content'>
                        <h1>{pageContext.title}</h1>
                        <span className="meta">Posted on {new Date(pageContext.publishDate).toDateString()}</span>
                        <div className="featured-Image"><img src={pageContext.image.file.url} /></div>
                        <hr/>
                        <div>{documentToReactComponents(pageContext.content.json)}</div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
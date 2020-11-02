import React from 'react'
import { Link } from 'gatsby'
import NomiSatti from '../images/NomiSatti.jpg'

const Sidebar = ({ data }) => {


    console.log("SideBar : ", data)
    return (
        <>

            <div className="w3-card w3-margin w3-margin-top">
                <img src={NomiSatti} />
                <div className="w3-container w3-white">
                    <h4><b>M Nouman Atiq</b></h4>
                    <p>Software Developer</p>
                    <a href="https://www.facebook.com/noumasatti39/" className="fa fa-facebook"></a>   
                    <a href="https://github.com/nomisatti" className="fa fa-github"></a>                
                    <a href="https://www.linkedin.com/in/noumanatiq/" className="fa fa-linkedin"></a>
                   
                </div>
            </div><hr />
            {data.allContentfulBlogSite ? 
             (
                <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Recent Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {data.allContentfulBlogSite.edges.map((post, index) =>
                        <li key={index} className="w3-padding-16">
                            <img src={post.node.image.file.url} alt={post.node.image.title} className="w3-left w3-margin-right" />
                            <span className="w3-large"><Link to={post.node.slug}>{post.node.title}</Link></span><br />
                            
                        </li>
                    )}
                   
                </ul>
            </div>

             ) : null
            }
           
        </>
    )
}



export default Sidebar
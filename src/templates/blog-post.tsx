import React from 'react'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

export default({pageContext}) => {
    console.log("pageContext : " ,  JSON.stringify(pageContext))
    return(
        <div>
              <div>{pageContext.title}</div>
            <div>{documentToReactComponents(pageContext.content.json)}</div>
        </div>
    )
}
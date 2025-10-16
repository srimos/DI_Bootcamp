import React from 'react'

class BlogArticle extends React.Component {
    render() {     
        return (
            <article style={
                {
                    backgroundColor:"aqua"
                }
            } className="box">
                <h2>{this.props.title}</h2>
                <p>blah blah</p>
                <p>Author: {this.props.author}</p>
            </article>
        )    
    }
}

export default BlogArticle
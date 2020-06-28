import React from "react"
import {Link} from "gatsby"

class AuthorListOfArticles extends React.Component {
    render() {
        const {articles, tutorials} = this.props;
        return (
            <div style={{margin: "20px 0 "}}>
                <h3 style={{margin: "10px 0"}}>Contributions</h3>
                <p style={{margin:"10px 0"}}>Articles</p>
                <ul>
                    {articles.map((a, index) => {
                        return <li key={`contributions-${a.title}-${index}`}>
                           <Link to={`/blog/${a.slug}`}> {a.title} </Link>
                        </li>
                    })}
                </ul>
                <p style={{margin: "10px 0"}}>Tutorials</p>
                <ul>
                    {tutorials.map((t, index) => {
                        return <li key={`contributions-${t.title}-${index}`}>{t.title}</li>
                    })}
                </ul>
            </div>

        )
    }
}


export default AuthorListOfArticles
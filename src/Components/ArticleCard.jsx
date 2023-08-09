/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";






function ArticleCard({article}){

    return (
      <div className="card">
        <img src={article.article_img_url}/>
        <h2>{article.title}</h2>
        <h3>{article.topic}</h3>
        <p>Author: {article.author}</p>
        <p>Created: {article.created_at.slice(0,10)} {article.created_at.slice(11,19)}</p>
        <Link to={`/articles/${article.article_id}`}>Read Me</Link>

      </div>


  
    );


}

export default ArticleCard;

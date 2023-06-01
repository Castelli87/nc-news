import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticle } from "../Api/api";


function ArticleMainCard() {
  const { article_id } = useParams();

  const [currentArticle, setCurrentArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticle(article_id).then((resp) => {
      setCurrentArticle(resp);
      setIsLoading(false)
    });
  }, []);

  if (isLoading) {
    return (
      <div className="wrapperLoading">
        <h2 className="loading">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="mainCard">
      <img src={currentArticle.article_img_url}></img>
      <h1>{currentArticle.title}</h1>
      <p>
        Topic: {currentArticle.topic} Author: {currentArticle.author}
      </p>

      <p>{currentArticle.body}</p>
      <p>
        <button>👍</button> {currentArticle.votes}
      </p>
      <p>{currentArticle.created_at}</p>
     
    </div>
  );
}

export default ArticleMainCard;

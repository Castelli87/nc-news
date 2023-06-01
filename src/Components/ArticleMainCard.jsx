import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { fetchArticle, increaseVotes } from "../Api/api";
import CommentsList from "./CommentsList";



function ArticleMainCard() {
  const { article_id } = useParams();

  const [currentArticle, setCurrentArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error,setError]=useState(false)
  

  useEffect(() => {
    fetchArticle(article_id).then((resp) => {
      setCurrentArticle(resp);

      setIsLoading(false);

    });
  }, []);

  const handleClick = () => {
    // updating just that votes and spred the rest of the obj 
   setCurrentArticle((article)=>{
    return {...article, votes:article.votes + 1}});
    setError(false)


   // patch request after optimistic render with a catch block for error 
    increaseVotes(article_id)
    .catch(()=>{
      setCurrentArticle((article)=>{
        return {...article, votes:article.votes - 1}});
        setError(true)
    })
  };

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
        <button onClick={handleClick}>👍</button> {currentArticle.votes}
      </p>
      {error ? ( <p>Refresh the page</p>):null}
      <p>{currentArticle.created_at}</p>
      <form>
        <label>
          Comment here:
          <input type="text"></input>
        </label>
        <button>Submit</button>
      </form>
      <CommentsList article_id={article_id}></CommentsList>
    </div>
  );
}

export default ArticleMainCard;

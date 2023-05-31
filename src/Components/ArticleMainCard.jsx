
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticle } from "../Api/api";
import CommentsList from "./CommentsList";

function ArticleMainCard() {
  const { article_id } = useParams();
  console.log(article_id,'<<<use params')

  const [currentArticle, setCurrentArticle] = useState({});

  useEffect(() => {
    fetchArticle(article_id).then((resp) => {
      setCurrentArticle(resp);
    });
  }, []);

  return (
    <div className="mainCard">

        <img src={currentArticle.article_img_url}></img>
        <h1>{currentArticle.title}</h1>
        <p>Topic: {currentArticle.topic} Author: {currentArticle.author}</p>

        <p>{currentArticle.body}</p>
        <p><button>👍</button> {currentArticle.votes}</p>
        <p>{currentArticle.created_at}</p>
        <form>
            <label>
                Comment here:
                <input type="text">
                </input>
            </label>
            <button>Submit</button>
        </form>
        <CommentsList></CommentsList>

    </div>)
  

}

export default ArticleMainCard;

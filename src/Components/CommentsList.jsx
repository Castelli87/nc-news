import { useState, useEffect } from "react";
import { fetchArticleCommentsById } from "../Api/api";

// eslint-disable-next-line react/prop-types
function CommentsList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticleCommentsById(article_id).then((res) => {
      setComments(res);
      setIsLoading(false);
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
    <>
      {comments.map((comment) => {
        return (
          <section className="wrapperComment" key={comment.comment_id}>
            <p>
              <strong>{comment.body}</strong>
            </p>
            <p>
              {comment.author} | {comment.created_at}
            </p>
            <p>
              <button>👍</button> {comment.votes}
            </p>
          </section>
        );
      })}
    </>
  );
}

export default CommentsList;

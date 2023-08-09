/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
function CommentsList({comments,isCommentsLoading}) {


  if (isCommentsLoading) {
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
              {comment.author} | {comment.created_at.slice(0,10) } {comment.created_at.slice(11,19)}
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

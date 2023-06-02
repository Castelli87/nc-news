import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { fetchArticle, fetchArticleCommentsById, increaseVotes, postComment } from "../Api/api";
import CommentsList from "./CommentsList";
import { UserContext } from "./contexts/userContext";

function ArticleMainCard() {
  const { article_id } = useParams();

  const [currentArticle, setCurrentArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error,setError]=useState(false)
  const [newComment,setNewComment]=useState('')
  const user = useContext(UserContext)

  const [comments, setComments] = useState([]);
  const [ isCommentsLoading,setIsCommentsLoading]=useState(true)

  const [postError,setPostError]=useState(false)

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

////////////////UPLIFTING FROM THE CHILD COMPONENT/////////////////////////////////
  useEffect(() => {
    fetchArticleCommentsById(article_id).then((res) => {
      setComments(res);
      setIsCommentsLoading(false)

    });
  }, []);


  const handleSubmit=(e)=>{
    e.preventDefault()
    if (newComment.length === 0){
      return e.preventDefault()
    }

    
    /// create an obj with username and body 
    // add the obj to currentComments spreding in 
    // so call the api and attach .catch to remove the first comment 
    // do like in the upvotes stuff 

    

    postComment(article_id,newComment,user.username).then((res)=>{
      setPostError(false)
      setNewComment('')
      setComments((currentComments)=>{ 
        return [res,...currentComments ]
    })
 
    }).catch(()=>{
      setComments((currentComments)=>{
        setPostError(true)
        return currentComments
      })
    })
  }

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
      {error ? ( <p>Somenthing Went Wrong!!!Refresh the page and try again</p>):null}
      <p>{currentArticle.created_at}</p>

      <form className="form" onSubmit={handleSubmit} >
        <label htmlFor="newComment">Comment here:</label>
        <textarea
        id="newComment"
        // eslint-disable-next-line react/no-unknown-property
        multiline='true'
        value={newComment}
        onChange={(e)=>setNewComment(e.target.value)} 
        >   
        </textarea>
        <button >Submit</button>
        {postError ? ( <p>Somenthing Went Wrong!!!Refresh the page and try again</p>):null}
      </form>

      <CommentsList comments={comments} isCommentsLoading={isCommentsLoading}></CommentsList>
    </div>
  );
}

export default ArticleMainCard;

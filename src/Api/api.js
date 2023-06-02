import axios from 'axios'

const ncNews = axios.create({
    baseURL: `https://nc-news-iila.onrender.com/api`,
})


export const fetchArticles = ()=>{
return ncNews
.get(`/articles`)
.then(({data})=> data)}

 export const fetchArticle = (article_id)=>{

    return ncNews
    .get(`/articles/${article_id}`)
    .then((resp)=>resp.data.article)

} 
export const fetchArticleCommentsById = (article_id)=>{
    return ncNews
    .get(`/articles/${article_id}/comments`)
    .then((resp)=>resp.data.commentsByArticleId)
    
} 

export const increaseVotes=(article_id)=>{
    return ncNews.patch(`/articles/${article_id}`,{inc_votes:1})
}

export const postComment = (article_id,newCommentText,user)=>{
    const postBody = {'username':user,'body':newCommentText}
    return ncNews
    .post(`/articles/${article_id}/comments`,postBody)
    .then(({data})=>{
        return data.comment
  
    })
}
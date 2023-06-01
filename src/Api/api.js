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
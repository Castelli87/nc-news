import axios from 'axios'

const ncNews = axios.create({
    baseURL: `https://nc-news-iila.onrender.com/api`,
})


export const fetchArticles = ()=>{
return ncNews
.get(`/articles`)
.then(({data})=> data)}


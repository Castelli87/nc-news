import { useState, useEffect } from "react";
import { fetchArticles } from "../Api/api";
import ArticleCard from "./ArticleCard";


function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading,setIsLoading]= useState(true)

  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false)
    });
  }, []);

  return (
    <>
    {isLoading? (
        <div className="wrapperLoading">

            <h2 className="loading">Loading...</h2>
        </div>
    ):(

        <main>
          <section className="wrapperList">
            <ul className="articleList">
          <h1>Articles List</h1>
                {articles.map((article)=>{
                    return <ArticleCard key={article.article_id} article={article}/>
                })}
    
            </ul>
    
          </section>
        </main>
    )
        
    }
    </>
  );
}

export default ArticlesList;

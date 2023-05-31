import { useState, useEffect } from "react";
/* import ItemCard from "./ItemCard"; */
/* import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card"; */
import { fetchArticles } from "../Api/api";
import ArticleCard from "./ArticleCard";


function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);

  return (
    <main>
      <section className="wrapperList">
        <ul className="articleList">
      <h1>Articles List</h1>
            {articles.map((article)=>{
                console.log(article)
                return <ArticleCard key={article.article_id} article={article}/>
            })}

        </ul>

      </section>
    </main>
  );
}

export default ArticlesList;

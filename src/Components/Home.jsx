import image from "../../Plan/blogs-and-article.svg";

function Home() {
  return (
    <section className="homeSection">
      <div className="homeDescription">
        <h1>Welcome</h1>

        <h4>To NC News</h4>
        <p>Discover a world of captivating articles, insightful stories, and thought-provoking discussions on our blog. Explore diverse topics, from technology to travel, personal growth to societal issues. Join our community, engage in conversations, and let knowledge empower you. Welcome to our blog, where ideas come to life!</p>
      </div>

      <img className="homeImage" src={image} alt="laptop image " />
    </section>
  );
}

export default Home;

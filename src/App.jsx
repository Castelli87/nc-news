import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import ArticlesList from "./Components/ArticlesList";
import ArticleMainCard from "./Components/ArticleMainCard";
import '../src/App.css'
import { UserContext } from "./Components/contexts/userContext";
import { useState } from "react";


function App() {
  const [user,setUser]=useState({
    username :"tickle122"
  })


  return (
    <BrowserRouter>
    <UserContext.Provider value = {user}>
      <>
        <NavigationBar />
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/articles' element={<ArticlesList />}></Route>
          <Route path="/articles/:article_id" element={<ArticleMainCard />}></Route>
        </Routes>
      </>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import ArticlesList from "./Components/ArticlesList";
import ArticleMainCard from "./Components/ArticleMainCard";
import '../src/App.css'


function App() {


  return (
    <BrowserRouter>
      <>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/articles' element={<ArticlesList />}></Route>
          <Route path="/Article" element={<ArticleMainCard />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App

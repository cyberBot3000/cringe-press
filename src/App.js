import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import './App.css';
import PostService from "./API/PostsService";

function App() {
	const postsService = new PostService('http://213.183.51.109:8080')
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage postsService={postsService}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

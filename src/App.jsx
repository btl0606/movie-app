import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import MoviePage from './pages/MoviePage';
import MovieDetailPage from './pages/MovieDetailPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>     
          <Route path="/" element={<MoviePage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />    
      </Routes>
  </BrowserRouter>
  )

}

export default App;

import { Route , Routes } from "react-router-dom";
import Mainpage from "./Components/Home/Main_page/Mainpage";
import Signup from "./Components/Signup/Signup";
import MovieMain from "./Components/Movie/MovieMain";
import Choose from './Components/Plan/Choose_Plan/Choose';
import Movie from './Components/Plan/Movie_watch/Movie';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Mainpage />} /> 
      <Route path='/signup' element={<Signup />} />   
      <Route path='/signup/plan' element={<Choose />} />
      <Route path='/signup/plan/netflix-movie' element={<MovieMain />} />
      <Route path='/signup/plan/netflix-movie/movie' element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;

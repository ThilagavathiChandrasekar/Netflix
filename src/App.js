import { Route , Routes } from "react-router-dom";
import Mainpage from "./Components/Home/Main_page/Mainpage";
import Signup from "./Components/Signup/Signup";
import MovieMain from "./Components/Movie/MovieMain";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Mainpage />} /> 
      <Route path='/signup' element={<Signup />} />   
      <Route path='/signup/netflix-movie' element={<MovieMain />} />
      </Routes>
    </div>
  );
}

export default App;

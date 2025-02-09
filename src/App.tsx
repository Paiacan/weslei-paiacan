import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';;
import Home from './Home/Home';
import Details from './details/Details';

const App: React.FC = () => {

  return (
    <div className="w-screen h-screen">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:productId" element={<Details/>}/>
      </Routes>
    </Router>
    </div>
      
  );
}

export default App;

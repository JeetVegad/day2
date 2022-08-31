import './App.css';
import Area from './Components/Reactangle'
import Login from './Components/Login';
import Signup from './Components/Signup';
function App() {
  return (
    <div className="App container">
     <Area />
     <hr></hr>
     <Login />
     <hr></hr>
     <Signup />
    </div>
  );
}

export default App;

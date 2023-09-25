import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import YProgressbar from './components/YProgressbar/YProgressbar';
import Cards from './components/Cards/Cards';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header/>
     <Main/>
     <Cards/>
   
     <YProgressbar/>
     <Register/>
    </div>
  );
}

export default App;

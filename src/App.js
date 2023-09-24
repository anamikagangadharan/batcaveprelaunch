import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import YProgressbar from './components/YProgressbar/YProgressbar';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <Header/>
     <Main/>
     <Cards/>
     <Main/>
     <Main/>
     <YProgressbar/>
    </div>
  );
}

export default App;

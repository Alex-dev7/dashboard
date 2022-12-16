import logo from './logo.svg';
import './App.css';
import './styles.css'
import Sidebar from './components/Sidebar'
import Reviews from './components/Reviews'
import Avarage from './components/Avarage'
import Sentiment  from './components/Sentiment'
import Visitors from './components/Visitors'




function App() {
  return (
    <div className="App">
       <div className="container">
        <Sidebar/>
        <Reviews/>
        <Avarage/>
        <Sentiment/>
        <Visitors/>
       </div>  
    </div>
  );
}

export default App;

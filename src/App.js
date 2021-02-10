import logo from './logo.svg';
import './App.css';
import AllShows from './components/allShows';
import {HashRouter, Route,Link} from 'react-router-dom'

function App() {
  return (
    <>
      <HashRouter>
        <>
          <Link to="/"></Link>
        </>
        <>
        <Route path="/" component={AllShows} />
        </>
      </HashRouter>
      
    </>
  );
}

export default App;

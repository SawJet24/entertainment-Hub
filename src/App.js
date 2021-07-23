import Header from "./components/Header/Header";
import './App.css';
import SimpleBottomNavigation from "./components/mainNav";
import { BrowserRouter, Route, Switch }  from "react-router-dom";
import { Container } from "@material-ui/core";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="App">

      <Container>
          <Switch>
            <Route path='/' component={Trending} exact/>
            <Route path='/movies' component={Movies} exact/>
            <Route path='/series' component={Series} exact/>
            <Route path='/search' component={Search} exact/>
          </Switch>
      </Container>
    
    </div>
    <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;

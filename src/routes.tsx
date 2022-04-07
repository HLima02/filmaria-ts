import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Favorite from './pages/Favoritos';

export default function Routes(){
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Movie} />
        <Route exact path="/favoritos" component={Favorite} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}
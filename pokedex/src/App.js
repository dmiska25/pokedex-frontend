import ListPokemon from "./components/ListPokemon";
import PokemonDetails from "./components/PokemonDetails"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { LastLocationProvider } from 'react-router-last-location';
import './App.css';

export const base = "/pokemon";

function App() {
  return (
    <Router>
      <LastLocationProvider>
        <Switch>
          <Route exact path="/">
            <Redirect to={base}/>
          </Route>
          <Route exact path={base} component={ListPokemon}/>
          <Route path={`${base}/:id`} component={PokemonDetails}/>
          <Route path="/">
            <Redirect to={base}/>
          </Route>
        </Switch>
      </LastLocationProvider>
    </Router>
  )
}

export default App;

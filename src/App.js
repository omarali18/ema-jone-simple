import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReciew from './components/OrderReciew/OrderReciew';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Header></Header>
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Header></Header>
            <OrderReciew></OrderReciew>
          </Route>
          <Route path="/inventory">
            <Header></Header>
            <Inventory></Inventory>
          </Route>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

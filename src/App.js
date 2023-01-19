import './App.css';
import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Checkout} from "./pages/Checkout";
import {Payments} from "./pages/Payments";
import {CheckoutSuccess} from "./pages/CheckoutSuccess";
import {CheckoutFailed} from "./pages/CheckoutFailed";

function App() {
  return (
   <Router>
     <div>
       <nav>
         <ul className="navbar-nav">
           <li className="nav-item">
             <Link to="/"></Link>
           </li>
           <li className="nav-item">
             <Link to="/checkout">Checkout</Link>
           </li>
           <li className="nav-item">
             <Link to="/payments">Payments</Link>
           </li>
         </ul>
       </nav>
       <main>
         <Routes>
           <Route path={"/checkout"} element={<Checkout />}></Route>
           <Route path={"/payments"} element={<Payments />}></Route>
           <Route path={"/success"} element={<CheckoutSuccess />}></Route>
           <Route path={"/failed"} element={<CheckoutFailed />}></Route>

         </Routes>
       </main>
     </div>

   </Router>

  );
}

export default App;

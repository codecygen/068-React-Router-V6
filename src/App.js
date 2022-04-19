// React-Router-DOM
// React-Router-DOM-Dynamic-Link
// React-Router-Only-Load-Single-Link-Location-Switch-Component
// By default, /products/p1 will both load Products and ProductDetail components
// In order to prevent that, import switch component and use it to wrap elements.
// With that component, only a single component will be loaded that exactly matches
// with the exact link.
// React-Router-Link-Redirect
import { Route, Switch, Redirect } from "react-router-dom";

// React-Router-DOM
import Welcome from "./pages/Welcome";

// React-Router-DOM
import Products from "./pages/Products";

import MainHeader from "./components/MainHeader";

// React-Router-NotFound-Page
import NotFound from "./pages/NotFound";

// React-Router-DOM-Dynamic-Link
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <div>
      <MainHeader />

      <main>
        {/* React-Router-Only-Load-Single-Link-Location-Switch-Component */}
        <Switch>

          {/* React-Router-Link-Redirect */}
          {/* When you redirect link, link will appear as */}
          {/* localhost:3000/welcome even if you click on localhost:3000/ */}
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>

          {/* React-Router-DOM */}
          <Route path="/welcome">
            <Welcome />
          </Route>

          {/* React-Router-DOM */}
          {/* React-Router-Only-Load-Single-Link-Location-Switch-Component */}
          {/* exact tells Switch component that, the link should only lead to this one 
          if it exactly matches this path */}
          <Route path="/products" exact>
            <Products />
          </Route>

          {/* React-Router-DOM-Dynamic-Link */}
          {/* By default, /products/p1 will both load Products and ProductDetail components
          In order to prevent that, import switch component and use it to wrap elements.
          With that component, only a single component will be loaded that exactly matches
          with the exact link. */}
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>

          {/* React-Router-NotFound-Page */}
          <Route path="*">
            <NotFound />
          </Route>
          
        </Switch>
      </main>
    </div>
  );
};

export default App;

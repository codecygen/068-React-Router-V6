// React-Router-DOM
// React-Router-DOM-Dynamic-Link
// React-Router-Only-Load-Single-Link-Location-Switch-Component
// By default, /products/p1 will both load Products and ProductDetail components
// In order to prevent that, import switch component and use it to wrap elements.
// With that component, only a single component will be loaded that exactly matches
// with the exact link.
// React-Router-Link-Redirect
import { Route, Routes, Navigate } from "react-router-dom";

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
        <Routes>

          {/* React-Router-Link-Redirect */}
          {/* When you redirect link, link will appear as */}
          {/* localhost:3000/welcome even if you click on localhost:3000/ */}
          {/* you can have replace prop here for Navigate component to replace it, */}
          {/* only using to prop pushes to the new page. */}
          {/* <Route path="/" element={<Navigate replace to="/welcome" />} /> */}
          <Route path="/" element={<Navigate to="/welcome" />} />

          {/* React-Router-DOM */}
          {/* With React Router 6, the path is only shown when exactly matches */}
          {/* We put /* because we also have nested routing and we would like to show them */}
          {/* whenever they are needed to be loaded */}
          <Route path="/welcome/*" element={<Welcome />}>
            {/* React-Router-Nested-Route */}
            {/* Check out Welcome.js file to see where this element will be inserted */}
            <Route path="new-user" element={<p>Welcome, new user!</p>} />
          </Route>

          {/* React-Router-DOM */}
          {/* React-Router-Only-Load-Single-Link-Location-Switch-Component */}
          <Route path="/products" element={<Products />} />

          {/* React-Router-DOM-Dynamic-Link */}
          <Route path="/products/:productId" element={<ProductDetail />} />

          {/* React-Router-NotFound-Page */}
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </main>
    </div>
  );
};

export default App;

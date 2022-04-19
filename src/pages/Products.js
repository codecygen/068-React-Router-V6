import React from 'react';

// React-Router-DOM-Link-Click-Prevent-HTTP-Request-To-Server
// React-Router-NoHighlight-Link
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <Link></Link>
      <h1>Products Page</h1>
      <p>Here is products page</p>

      <ul>
        <li><Link to="/products/p1">Book</Link></li>
        <li><Link to="/products/p2">Carpet</Link></li>
        <li><Link to="/products/p3">Online Course</Link></li>
      </ul>
    </section>
  );
};

export default Products;
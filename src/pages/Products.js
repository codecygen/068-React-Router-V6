import React from 'react';

// React-Router-DOM-Link-Click-Prevent-HTTP-Request-To-Server
// React-Router-NoHighlight-Link
import { Link } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';

const Products = () => {

  // React-Router-Link-Redirect-After-Form-Submission
  // Methods to programmatically redirect links after form submission.
  // const navigate = useNavigate();
  // navigate('/welcome', {replace: true});
  // This refreshes the current page
  // navigate(0);
  // This goes one page before
  // navigate(-1);
  // This goes two pages before
  // navigate(-2);
  // This goes one page front
  // navigate(1);
  // This goes two pages front
  // navigate(2);

  return (
    <section>
      <h1>Products Page</h1>
      <p>Here is products page</p>

      <ul>
        {/* React-Router-NoHighlight-Link */}
        <li><Link to="/products/p1">Book</Link></li>
        <li><Link to="/products/p2">Carpet</Link></li>
        <li><Link to="/products/p3">Online Course</Link></li>
      </ul>
    </section>
  );
};

export default Products;
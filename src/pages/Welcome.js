import React from 'react';

// React-Router-Nested-Route
import { Link, Outlet } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>Welcome Page</h1>

      <Link to="new-user">New User</Link>

      {/* React-Router-Nested-Route */}
      {/* In the App.js file, there is a nested route */}
      {/* Outlet component is a placeholder for that nested component */}
      {/* React router understands the nested component should be injected here. */}
      {/* Instead of using Outlet, you can also define Route component here in this file. */}
      {/* If you do so, You have to wrap it with Routes component. Even if it has a single */}
      {/* Route component, you have to wrap it with Routes component. */}
      <Outlet />
    </section>
  );
};

export default Welcome;
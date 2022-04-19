This section is about building a multi-page SPA by using React Router.

For Version 5 - NPM Package for React Router:
- npm i react-router-dom@5

For Latest Version - NPM Package for React Router:
- npm i react-router-dom
or
- npm i react-router-dom@latest

Changes:
- Instead of Switch, Routes component is available.
- Instead of Redirect, Navigate component is available.
- Even a single Route component needs Routes component as a wrapper.
- Route component props changed.
- Relative navigation links brought for nested routing.
- Routes work more different than Switch component, it exactly tries to match link. exact prop removed.
- Instead of useHistory, useNavigate is the new custom hook.
- Prompt component is not in version 6 yet, It will come at some point. You have to use other means if you are planning to use this.
- Instead of activeClassName prop of NavLink, className prop used. This prop can take a function.

Keywords React Router DOM V6:
- React-Router-DOM
- React-Router-DOM-Link-Click-Prevent-HTTP-Request-To-Server
- React-Router-DOM-Dynamic-Link
- React-Router-Highlight-Link
- React-Router-NoHighlight-Link
- React-Router-Nested-Route
- React-Router-Link-Redirect
- React-Router-Link-Redirect-After-Form-Submission
- React-Router-NotFound-Page

All Components Where Routing Used:
index.js
App.js
MainHeader.js
Products.js
Welcome.js
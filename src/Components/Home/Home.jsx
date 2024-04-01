import React from 'react';
import './Home';
import Login from '../Login/Login';

const Home = () => {
   return (
      
    <Login> </Login>
   );
};

export default Home;
import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
 } from "react-router-dom";
 
 const router = createBrowserRouter(
   createRoutesFromElements(
     <Route path="/" element={<Root />}>
       <Route path="dashboard" element={<Dashboard />} />
       {/* ... etc. */}
     </Route>
   )
 );
 
 ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
     <RouterProvider router={router} />
   </React.StrictMode>
 );
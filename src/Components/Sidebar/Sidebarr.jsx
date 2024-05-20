import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const Sidebarr = () => {
   return (
<Sidebar>
  <Menu>
    <MenuItem routerLink={<Link to="/pharmacy" />}> Pharmacy_Sales</MenuItem>
    <MenuItem routerLink={<Link to="/pharmacy" />}> Non_Pharmacy_Sales</MenuItem>
    <MenuItem routerLink={<Link to="/cash" />}>Cash-Closing</MenuItem>
    <MenuItem routerLink={<Link to="/sales" />}>Sales-Returns</MenuItem>
    <MenuItem routerLink={<Link to="/sales" />}>Point-Of-Sales</MenuItem>
    <MenuItem routerLink={<Link to="/service" />}> Service-Counter</MenuItem>
  </Menu>
</Sidebar>
   );
};

export default Sidebarr;

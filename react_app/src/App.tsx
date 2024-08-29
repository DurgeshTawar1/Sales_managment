// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';
import './styles/Sidebar.css';
import './styles/Navbar.css';
import AddCustomerForm from './component/AddCustomer';
import AllCustomer from './component/AllCustomer';
import AddProduct from './component/AddProduct';
import AllProduct from './component/AllProduct';
import AddCategory from './component/AddCategory';
import AllcategoryTable from './component/AllCategory';
import AddPurchase from './component/AddPurchase';
import PurchaseTable from './component/AllPurchase';
import AddSale from './component/AddSale';
import SalesTable from './component/AllSale';
import AddExpense from './component/AddExpense';
import AddIncome from './component/AddIncome';
import AddSupplier from './component/AddSupplier';
import SupplierTable from './component/AllSupplier';
import DashBoard from './component/DashBoard';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router basename='/react'>
      <div>
        <Navbar onToggleSidebar={toggleSidebar} isSidebarOpen={sidebarOpen} />
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/dashboard" element={<DashBoard />} />
          {/* <Route path="/" element={<h1>Home Page</h1>} /> */}
          <Route path="/add-customer" element={<AddCustomerForm />} />
          <Route path="/all-customer" element={<AllCustomer />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/all-product" element={<AllProduct />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/all-category" element={<AllcategoryTable />} />
          <Route path="/add-purchase" element={<AddPurchase />} />
          <Route path="/all-purchase" element={<PurchaseTable />} />
          <Route path="/add-sale" element={<AddSale />} />
          <Route path="/all-sale" element={<SalesTable />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/add-income" element={<AddIncome />} />
          <Route path="/add-supplier" element={<AddSupplier />} />
          <Route path="/all-supplier" element={<SupplierTable />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
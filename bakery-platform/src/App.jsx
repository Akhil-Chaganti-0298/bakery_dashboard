import { useState } from "react";
import Layout from "./components/Layout";
import Customers from "./pages/Customers";
import Costs from "./pages/Costs";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import ReceiptUpload from "./pages/ReceiptUpload";
import Sales from "./pages/Sales";

const pages = {
  dashboard: Dashboard,
  inventory: Inventory,
  receipt: ReceiptUpload,
  sales: Sales,
  customers: Customers,
  costs: Costs,
};

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const ActivePage = pages[activePage];

  return (
    <Layout activePage={activePage} onNavigate={setActivePage}>
      <ActivePage onNavigate={setActivePage} />
    </Layout>
  );
}

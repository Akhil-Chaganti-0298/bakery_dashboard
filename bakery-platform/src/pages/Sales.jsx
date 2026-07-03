import { useState } from "react";
import DataTable from "../components/DataTable";
import SummaryCard from "../components/SummaryCard";
import { monthlySales, productSales } from "../data/mockData";

const productColumns = [
  { key: "product", label: "Product" },
  { key: "units", label: "Units sold" },
  { key: "revenue", label: "Revenue" },
];

const highestSale = Math.max(...monthlySales.map((item) => item.amount));

export default function Sales() {
  const [view, setView] = useState("monthly");

  return (
    <>
      <header className="page-header">
        <div>
          <p className="eyebrow">Performance</p>
          <h1>Sales dashboard</h1>
          <p>Review simple mock sales figures for the bakery.</p>
        </div>
        <div className="segmented-control" aria-label="Sales view">
          <button className={view === "weekly" ? "active" : ""} onClick={() => setView("weekly")} type="button">Weekly</button>
          <button className={view === "monthly" ? "active" : ""} onClick={() => setView("monthly")} type="button">Monthly</button>
        </div>
      </header>

      <section className="date-filters" aria-label="Date range">
        <label>From<input defaultValue="2026-06-01" type="date" /></label>
        <label>To<input defaultValue="2026-06-30" type="date" /></label>
      </section>

      <section className="summary-grid">
        <SummaryCard label="Revenue" value="$12,480" detail="Mock June total" />
        <SummaryCard label="Orders" value="526" detail="Average 18 per day" tone="green" />
        <SummaryCard label="Average sale" value="$23.73" detail="Across all orders" tone="blue" />
      </section>

      <div className="two-column sales-layout">
        <section className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{view} view</p>
              <h2>Revenue by month</h2>
            </div>
          </div>
          <div className="bar-chart" aria-label="Monthly sales bar chart">
            {monthlySales.map((item) => (
              <div className="bar-item" key={item.id}>
                <span>${Math.round(item.amount / 1000)}k</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ height: `${(item.amount / highestSale) * 100}%` }} />
                </div>
                <strong>{item.month}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Top products</p>
              <h2>Product sales</h2>
            </div>
          </div>
          <DataTable columns={productColumns} rows={productSales} />
        </section>
      </div>
    </>
  );
}

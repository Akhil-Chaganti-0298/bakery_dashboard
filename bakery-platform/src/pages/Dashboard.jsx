import DataTable from "../components/DataTable";
import SummaryCard from "../components/SummaryCard";
import { lowStockItems, recentSales } from "../data/mockData";

const salesColumns = [
  { key: "product", label: "Product" },
  { key: "quantity", label: "Items sold" },
  { key: "total", label: "Total" },
];

export default function Dashboard({ onNavigate }) {
  return (
    <>
      <header className="page-header">
        <div>
          <p className="eyebrow">Overview</p>
          <h1>Good morning</h1>
          <p>Here is a simple look at how the bakery is doing.</p>
        </div>
        <button
          className="primary-button"
          onClick={() => onNavigate("receipt")}
          type="button"
        >
          Upload receipt
        </button>
      </header>

      <section className="summary-grid" aria-label="Bakery summary">
        <SummaryCard label="Sales this month" value="$12,480" detail="8% higher than last month" />
        <SummaryCard label="Orders today" value="46" detail="12 are ready for pickup" tone="green" />
        <SummaryCard label="Low-stock items" value={String(lowStockItems.length)} detail="Review before the next bake" tone="red" />
        <SummaryCard label="Regular customers" value="38" detail="6 visited this week" tone="blue" />
      </section>

      <div className="two-column">
        <section className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Today</p>
              <h2>Recent sales</h2>
            </div>
            <button className="text-button" onClick={() => onNavigate("sales")} type="button">
              View sales
            </button>
          </div>
          <DataTable columns={salesColumns} rows={recentSales} />
        </section>

        <aside className="panel buy-list">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Stock check</p>
              <h2>What to buy</h2>
            </div>
          </div>
          <ul className="simple-list">
            {lowStockItems.map((item) => (
              <li key={item.id}>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.quantity} {item.unit} left</span>
                </div>
                <span className="status low">Low</span>
              </li>
            ))}
          </ul>
          <button className="secondary-button full-width" onClick={() => onNavigate("inventory")} type="button">
            Open inventory
          </button>
        </aside>
      </div>
    </>
  );
}

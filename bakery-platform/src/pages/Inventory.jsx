import DataTable from "../components/DataTable";
import SummaryCard from "../components/SummaryCard";
import { inventory, lowStockItems } from "../data/mockData";

const inventoryColumns = [
  { key: "name", label: "Item" },
  { key: "quantity", label: "Quantity" },
  { key: "unit", label: "Unit" },
  { key: "minimum", label: "Minimum stock" },
  {
    key: "status",
    label: "Status",
    render: (row) => {
      const isLow = row.quantity < row.minimum;
      return <span className={isLow ? "status low" : "status good"}>{isLow ? "Low stock" : "In stock"}</span>;
    },
  },
];

export default function Inventory() {
  return (
    <>
      <header className="page-header">
        <div>
          <p className="eyebrow">Supplies</p>
          <h1>Inventory</h1>
          <p>Check what is available and what needs to be reordered.</p>
        </div>
      </header>

      <section className="summary-grid compact">
        <SummaryCard label="Tracked items" value={String(inventory.length)} detail="Mock supply list" tone="blue" />
        <SummaryCard label="Need to buy" value={String(lowStockItems.length)} detail="Below minimum stock" tone="red" />
      </section>

      <div className="two-column inventory-layout">
        <section className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Current levels</p>
              <h2>Bakery supplies</h2>
            </div>
          </div>
          <DataTable columns={inventoryColumns} rows={inventory} />
        </section>

        <aside className="panel buy-list">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Shopping list</p>
              <h2>What to buy</h2>
            </div>
          </div>
          <ul className="simple-list">
            {lowStockItems.map((item) => (
              <li key={item.id}>
                <div>
                  <strong>{item.name}</strong>
                  <span>Buy at least {item.minimum - item.quantity} {item.unit}</span>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}

import DataTable from "../components/DataTable";
import SummaryCard from "../components/SummaryCard";
import { customers, purchaseHistory } from "../data/mockData";

const customerColumns = [
  { key: "name", label: "Customer" },
  { key: "visits", label: "Visits" },
  { key: "favourite", label: "Favourite item" },
  { key: "spent", label: "Total spent" },
  { key: "lastVisit", label: "Last visit" },
];

const historyColumns = [
  { key: "date", label: "Date" },
  { key: "customer", label: "Customer" },
  { key: "order", label: "Purchase" },
  { key: "total", label: "Total" },
];

export default function Customers() {
  return (
    <>
      <header className="page-header">
        <div>
          <p className="eyebrow">Community</p>
          <h1>Customer dashboard</h1>
          <p>See mock regular customers and their recent purchases.</p>
        </div>
      </header>

      <section className="summary-grid compact">
        <SummaryCard label="Regular customers" value="38" detail="Visited more than twice" tone="blue" />
        <SummaryCard label="Returning this month" value="24" detail="63% return rate" tone="green" />
        <SummaryCard label="Customer spend" value="$1,210" detail="From regulars this month" />
      </section>

      <section className="panel">
        <div className="section-heading"><div><p className="eyebrow">Regulars</p><h2>Customer list</h2></div></div>
        <DataTable columns={customerColumns} rows={customers} />
      </section>

      <section className="panel">
        <div className="section-heading"><div><p className="eyebrow">Recent</p><h2>Purchase history</h2></div></div>
        <DataTable columns={historyColumns} rows={purchaseHistory} />
      </section>
    </>
  );
}

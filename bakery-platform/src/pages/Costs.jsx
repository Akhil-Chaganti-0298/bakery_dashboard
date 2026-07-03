import DataTable from "../components/DataTable";
import SummaryCard from "../components/SummaryCard";
import { materialCosts } from "../data/mockData";

const costColumns = [
  { key: "material", label: "Material" },
  { key: "supplier", label: "Supplier" },
  { key: "unitCost", label: "Unit cost" },
  { key: "monthlyCost", label: "Monthly cost" },
];

export default function Costs() {
  return (
    <>
      <header className="page-header">
        <div>
          <p className="eyebrow">Spending</p>
          <h1>Costs & materials</h1>
          <p>Keep an eye on mock ingredient and supply costs.</p>
        </div>
      </header>

      <section className="summary-grid compact">
        <SummaryCard label="Material costs" value="$2,272" detail="Estimated this month" tone="red" />
        <SummaryCard label="Cost of sales" value="18.2%" detail="Of monthly revenue" />
        <SummaryCard label="Largest cost" value="$708" detail="Unsalted butter" tone="blue" />
      </section>

      <section className="panel">
        <div className="section-heading"><div><p className="eyebrow">June estimate</p><h2>Material costs</h2></div></div>
        <DataTable columns={costColumns} rows={materialCosts} />
      </section>
    </>
  );
}

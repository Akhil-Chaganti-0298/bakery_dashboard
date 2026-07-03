import { useState } from "react";
import DataTable from "../components/DataTable";
import { extractedItems } from "../data/mockData";

const receiptColumns = [
  { key: "item", label: "Item" },
  { key: "quantity", label: "Quantity" },
  { key: "unitPrice", label: "Unit price" },
  { key: "total", label: "Total" },
];

export default function ReceiptUpload() {
  const [fileName, setFileName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [message, setMessage] = useState("");

  function chooseFile(file) {
    if (!file) return;
    setFileName(file.name);
    setMessage("");
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    chooseFile(event.dataTransfer.files[0]);
  }

  return (
    <>
      <header className="page-header">
        <div>
          <p className="eyebrow">Purchases</p>
          <h1>Receipt upload</h1>
          <p>Select a receipt to preview sample extracted items.</p>
        </div>
      </header>

      <section className="panel upload-panel">
        <label
          className={isDragging ? "drop-zone dragging" : "drop-zone"}
          onDragEnter={() => setIsDragging(true)}
          onDragLeave={() => setIsDragging(false)}
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleDrop}
        >
          <input accept=".pdf,image/*" onChange={(event) => chooseFile(event.target.files[0])} type="file" />
          <span className="upload-symbol" aria-hidden="true">+</span>
          <strong>Choose or drag a receipt here</strong>
          <span>PDF, JPG or PNG</span>
        </label>

        {fileName ? (
          <div className="selected-file" role="status">
            <div>
              <span>Selected file</span>
              <strong>{fileName}</strong>
            </div>
            <span className="status good">Ready</span>
          </div>
        ) : (
          <p className="empty-note">No receipt selected yet.</p>
        )}
      </section>

      {fileName && (
        <section className="panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Mock preview</p>
              <h2>Extracted items</h2>
            </div>
            <strong className="receipt-total">$117.20</strong>
          </div>
          <DataTable columns={receiptColumns} rows={extractedItems} />
          <div className="panel-actions">
            {message && <p className="success-message" role="status">{message}</p>}
            <button className="primary-button" onClick={() => setMessage("Mock items added to inventory.")} type="button">
              Add to Inventory
            </button>
          </div>
        </section>
      )}
    </>
  );
}

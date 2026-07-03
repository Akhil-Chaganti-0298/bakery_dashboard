const navigation = [
  { id: "dashboard", label: "Home Dashboard" },
  { id: "inventory", label: "Inventory" },
  { id: "receipt", label: "Receipt Upload" },
  { id: "sales", label: "Sales Dashboard" },
  { id: "customers", label: "Customer Dashboard" },
  { id: "costs", label: "Costs & Materials" },
];

export default function Layout({ activePage, onNavigate, children }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            DC
          </span>
          <div>
            <strong>Daily Crumb</strong>
            <span>Bakery manager</span>
          </div>
        </div>

        <nav className="navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <button
              className={activePage === item.id ? "nav-item active" : "nav-item"}
              key={item.id}
              onClick={() => onNavigate(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-note">
          <span>Today</span>
          <strong>
            {new Intl.DateTimeFormat("en-AU", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(new Date())}
          </strong>
        </div>
      </aside>

      <main className="main-content">{children}</main>
    </div>
  );
}

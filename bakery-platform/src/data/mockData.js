export const inventory = [
  { id: 1, name: "Bakers flour", quantity: 24, unit: "kg", minimum: 15 },
  { id: 2, name: "Unsalted butter", quantity: 8, unit: "kg", minimum: 10 },
  { id: 3, name: "Caster sugar", quantity: 12, unit: "kg", minimum: 8 },
  { id: 4, name: "Free-range eggs", quantity: 36, unit: "each", minimum: 48 },
  { id: 5, name: "Dark chocolate", quantity: 5, unit: "kg", minimum: 4 },
  { id: 6, name: "Almond meal", quantity: 3, unit: "kg", minimum: 5 },
];

export const lowStockItems = inventory.filter(
  (item) => item.quantity < item.minimum,
);

export const recentSales = [
  { id: 1, product: "Sourdough loaf", quantity: 8, total: "$72.00" },
  { id: 2, product: "Almond croissant", quantity: 12, total: "$78.00" },
  { id: 3, product: "Chocolate cake", quantity: 2, total: "$96.00" },
  { id: 4, product: "Cinnamon scroll", quantity: 10, total: "$55.00" },
];

export const monthlySales = [
  { id: 1, month: "Jan", amount: 8200 },
  { id: 2, month: "Feb", amount: 9100 },
  { id: 3, month: "Mar", amount: 8750 },
  { id: 4, month: "Apr", amount: 10400 },
  { id: 5, month: "May", amount: 11250 },
  { id: 6, month: "Jun", amount: 12480 },
];

export const productSales = [
  { id: 1, product: "Sourdough loaf", units: 186, revenue: "$1,674" },
  { id: 2, product: "Almond croissant", units: 154, revenue: "$1,001" },
  { id: 3, product: "Cinnamon scroll", units: 132, revenue: "$726" },
  { id: 4, product: "Chocolate cake", units: 28, revenue: "$1,344" },
];

export const customers = [
  { id: 1, name: "Amelia Green", visits: 14, favourite: "Almond croissant", spent: "$342", lastVisit: "27 Jun 2026" },
  { id: 2, name: "Noah Williams", visits: 11, favourite: "Sourdough loaf", spent: "$286", lastVisit: "25 Jun 2026" },
  { id: 3, name: "Mia Chen", visits: 9, favourite: "Chocolate cake", spent: "$418", lastVisit: "21 Jun 2026" },
  { id: 4, name: "Oliver Smith", visits: 7, favourite: "Cinnamon scroll", spent: "$164", lastVisit: "18 Jun 2026" },
];

export const purchaseHistory = [
  { id: 1, date: "27 Jun", customer: "Amelia Green", order: "4 pastries", total: "$26.00" },
  { id: 2, date: "25 Jun", customer: "Noah Williams", order: "2 loaves", total: "$18.00" },
  { id: 3, date: "21 Jun", customer: "Mia Chen", order: "1 celebration cake", total: "$74.00" },
];

export const materialCosts = [
  { id: 1, material: "Bakers flour", supplier: "Mill House", unitCost: "$2.10 / kg", monthlyCost: "$504" },
  { id: 2, material: "Unsalted butter", supplier: "Valley Dairy", unitCost: "$11.80 / kg", monthlyCost: "$708" },
  { id: 3, material: "Free-range eggs", supplier: "Happy Hens", unitCost: "$0.62 each", monthlyCost: "$446" },
  { id: 4, material: "Dark chocolate", supplier: "Cocoa Supply", unitCost: "$16.50 / kg", monthlyCost: "$330" },
  { id: 5, material: "Almond meal", supplier: "Nut & Co.", unitCost: "$14.20 / kg", monthlyCost: "$284" },
];

export const extractedItems = [
  { id: 1, item: "Unsalted butter", quantity: "5 kg", unitPrice: "$11.80", total: "$59.00" },
  { id: 2, item: "Free-range eggs", quantity: "60 each", unitPrice: "$0.62", total: "$37.20" },
  { id: 3, item: "Bakers flour", quantity: "10 kg", unitPrice: "$2.10", total: "$21.00" },
];

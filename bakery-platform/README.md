# Daily Crumb Bakery Manager

A beginner-friendly bakery management MVP built with React and Vite. It uses
mock data only, so there is no database, backend, authentication, receipt
processing, or external API.

## Included

- Home dashboard
- Inventory and low-stock shopping list
- Fake receipt upload and mock extracted items
- Monthly sales dashboard
- Customer dashboard and purchase history
- Material cost dashboard

## Run locally

You need a current version of Node.js installed.

```bash
cd bakery-platform
npm install
npm run dev
```

Open the local URL shown in the terminal, normally
`http://localhost:5173`.

Stop the development server with `Ctrl+C`.

## Useful commands

```bash
npm run dev      # Start the development server
npm run lint     # Check the source code
npm run build    # Create a production build
npm run preview  # Preview the production build
```

## Project structure

```text
src/
  components/  Shared layout, cards, and table
  data/        Mock bakery data
  pages/       The six app views
  App.jsx      Simple view navigation
  main.jsx     React entry point
  index.css    App styling
```

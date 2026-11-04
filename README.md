# HomeScout

Responsive real-estate discovery experience with location, property type and bedroom filters, keyword search, saved homes, grid/map views and an interactive property detail flow.

## Tech stack

- React 19
- TypeScript
- Vite
- Lucide Icons

## Run locally

```bash
npm install
npm run dev
```

All listings, prices, agencies and viewing requests are fictional demo content.

## Architecture

The project follows a feature-driven structure:

- `src/app` — application composition and global styles
- `src/features/property-search` — property data, filters and map/grid results
- `src/features/property-details` — property modal and viewing flow
- `src/features/saved-properties` — favourites state
- `src/shared` — reusable site-level components

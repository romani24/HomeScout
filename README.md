<div align="center">

# 🏡 HomeScout

**A modern real-estate discovery experience for curated properties.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open-18312d?style=for-the-badge)](https://home-scout-demo.russetmole8193.chatgpt.site)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

</div>

## Features

- Location, property type and bedroom filters
- Keyword search and saved properties
- Grid and interactive map views
- Property details and mortgage estimate
- Simulated viewing request flow

## Architecture

```text
src/
├── app/                         # Application composition and styles
├── features/
│   ├── property-search/         # Data, filters and results
│   ├── property-details/        # Details and viewing flow
│   └── saved-properties/        # Favourites state
└── shared/                      # Reusable site components
```

## Run locally

```bash
npm install
npm run dev
```

All listings, prices and viewing requests are fictional demo content.

# Movie Browser

A React-based web application for discovering and managing movies. Browse popular movies, search for specific titles, and save your favorites to a personalized collection.

## Features

- **Browse Popular Movies** – View a curated list of currently popular movies on the home page
- **Search Movies** – Search for any movie by title using the TMDB API
- **Save Favorites** – Add and remove movies from your favorites list
- **Persistent Storage** – Favorites are saved to your browser's local storage and persist across sessions
- **Responsive Design** – Clean, modern UI that works on desktop and mobile devices

## Tech Stack

- **Frontend:** React 19 + Vite
- **Routing:** React Router DOM
- **API:** The Movie Database (TMDB) API
- **Styling:** CSS with responsive design
- **Build Tool:** Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory with your TMDB API key:
   ```env
   VITE_TMDB_API_KEY=your_api_key_here
   ```

   Get your free API key from [The Movie Database (TMDB)](https://www.themoviedb.org/settings/api)

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/       # Reusable React components
│   │   ├── MovieCard.jsx
│   │   └── Navbar.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   └── Favourites.jsx
│   ├── services/        # API calls
│   │   └── api.js
│   ├── contexts/        # React contexts
│   │   └── MovieContext.jsx
│   ├── css/             # Stylesheets
│   ├── App.jsx
│   └── main.jsx
├── public/              # Static assets
├── vite.config.js
├── package.json
└── README.md
```

## API Integration

This project uses the free tier of The Movie Database (TMDB) API. 

- **Popular Movies Endpoint:** `/movie/popular`
- **Search Movies Endpoint:** `/search/movie`

Ensure your API key is properly configured in the `.env` file with the `VITE_TMDB_API_KEY` prefix for Vite to expose it to the frontend.

## Available Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run preview` – Preview the production build
- `npm run lint` – Run ESLint

## License

This project is open source and available under the MIT License.

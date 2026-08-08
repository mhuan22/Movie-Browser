import './App.css'
import MovieCard from "./components/MovieCard"

function App() {
  return (
    <div>
      <MovieCard movie={{ title: "Inception", release_date: "2010-07-16", url: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" }} />
    </div>
  )
}

export default App

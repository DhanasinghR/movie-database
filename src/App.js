import { Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

function App() {
    return (
        <main>
            <Routes>
                <Route path={'/'} element={<Movies />} />
                <Route path={'/:id'} element={<Movie />} />
                <Route path={'*'} element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default App;
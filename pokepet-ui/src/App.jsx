import MainPage from "./pages";
import MyPokemon from "./pages/my-pokemon";
import PokemonDetail from "./pages/detail";
import Header from "@/components/Molecules/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main className="px-4 pb-4 pt-20">
          <Routes>
            {/* <Route path="/list" element={<PokemonList />} />
          <Route path="/my-pokemon" element={<MyPokemon />} /> */}
            <Route path="/" element={<MainPage />} />
            <Route path="/my-pokemon" element={<MyPokemon />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

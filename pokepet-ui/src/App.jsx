import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import MainPage from "./pages";
import MyPokemon from "./pages/my-pokemon";
import PokemonDetail from "./pages/detail";
import Header from "@/components/Molecules/Header.jsx";
import Alert from "@/components/Atoms/Alert";

function App() {
  const { show, message, type } = useSelector((state) => state.alert);
  return (
    <div>
      {show && <Alert message={message} type={type} />}
      <Router>
        <div>
          <Header />
          <main className="px-4 pb-4 pt-20">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/my-pokemon" element={<MyPokemon />} />
              <Route path="/pokemon/:id" element={<PokemonDetail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;

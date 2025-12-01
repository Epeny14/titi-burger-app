import { BrowserRouter, Route, Routes } from "react-router-dom"
import Accueil from "./pages/Accueil";
import ClickCollect from "./pages/ClickCollect";
import Burgers from "./pages/Burgers";
import Support from "./pages/Support";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Accueil />} />
        <Route path="/clickcollect" element={< ClickCollect />} />
        <Route path="/burgers" element={<Burgers />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

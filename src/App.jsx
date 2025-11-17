import { BrowserRouter, Route, Routes } from "react-router-dom"
import Accueil from "./pages/Accueil";
import ClickCollect from "./pages/ClickCollect";
import Burgers from "./pages/Burgers";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Accueil />} />
        <Route path="/clickcollect" element={< ClickCollect />} />
        <Route path="/burgers" element={<Burgers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

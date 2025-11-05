import { BrowserRouter, Route, Routes } from "react-router-dom"
import Accueil from "./pages/Accueil";
import ClickCollect from "./pages/ClickCollect";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Accueil />} />
        <Route path="/clickcollect" element={< ClickCollect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

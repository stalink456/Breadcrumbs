import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { MainPage } from "./pages/MainPage";
import { SecondPage } from "./pages/SecondPage";
import { ThirdPage } from "./pages/ThirdPage";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/secondPage/:second" element={<SecondPage />} />
          <Route
            path="/secondPage/:userId/thirdPage/:groupId"
            element={<ThirdPage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

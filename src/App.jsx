import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout.jsx";
import { Home } from "./Home.jsx";
import { Privacy } from "./Privacy.jsx";
import { Terms } from "./Terms.jsx";

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Layout>
  );
}

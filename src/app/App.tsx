import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from "./components/ui/sonner";
import { HomePage } from "./pages/HomePage";
import { CatalogPage } from "./pages/CatalogPage";
import { DealerPage } from "./pages/DealerPage";
import { AdminLoginPage } from "./pages/AdminLoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/colecao" element={<CatalogPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/painel" element={<DealerPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Toaster position="bottom-right" />
    </BrowserRouter>
  );
}

import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  );
}

export default App;
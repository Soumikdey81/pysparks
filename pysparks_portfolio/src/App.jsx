import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AboutUs from "./pages/AboutUs";
import WebApplicationDevelopment from "./pages/WebApps";
import ServicesLayout from "./layouts/ServicesLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<AboutUs />} />

        {/* Services Section with Layout */}
        <Route path="/services-offered" element={<ServicesLayout />}>
          <Route
            path="business-consulting"
            element={<WebApplicationDevelopment />}
          />
          <Route path="web-apps" element={<WebApplicationDevelopment />} />
          <Route
            path="app-development"
            element={<WebApplicationDevelopment />}
          />
          <Route path="analytics" element={<WebApplicationDevelopment />} />
          <Route path="ai-automation" element={<WebApplicationDevelopment />} />
          <Route
            path="digital-marketing"
            element={<WebApplicationDevelopment />}
          />
          <Route path="finance" element={<WebApplicationDevelopment />} />
          <Route
            path="cyber-investigation"
            element={<WebApplicationDevelopment />}
          />
          <Route
            path="cyber-security"
            element={<WebApplicationDevelopment />}
          />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

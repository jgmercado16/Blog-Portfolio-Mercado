import React from "react";
import "./App.css";
import HeroBanner from "./components/HeroBanner";
import BodyContent from "./components/BodyContent";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

// Make sure the above component files exist at src/components/ and are named correctly (e.g., HeroBanner.jsx)

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <BodyContent />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;

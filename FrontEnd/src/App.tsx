import React, { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.tsx";
import Banner from "./Components/Banner.tsx"
import Quemsomos from "./Components/Quemsomos.tsx";
import Ondenosencontrar from "./Components/Ondenosencontrar.tsx";
import Timeline from "./Components/Timeline.tsx";
import Footer from "./Components/Footer.tsx";
import MunhozJunior from "./Pages/MunhozJunior.tsx";
import Recanto from "./Pages/Recanto.tsx";
import Centro from "./Pages/Centro.tsx";
import Casper from "./Pages/Casper.tsx";
import Doe from "./Pages/Doe.tsx";
import "./Styles/Navbar.css";
import "./Styles/Banner.css";
import "./Styles/Quemsomos.css";
import "./Styles/Ondenosencontrar.css";
import "./Styles/Timeline.css";
import "./Styles/Footer.css";
import "./Styles/pagemunhoz.css";
import "./Styles/pageDoe.css";
import AOS from "aos";



function App() {
  return (
      <Router>
          <div className="App">
              <header>
                  <Navbar />
              </header>
              <main>
                  <Routes>
                      {/* Página Inicial */}
                      <Route
                          path="/"
                          element={
                              <>
                                  <Banner />
                                  <Quemsomos />
                                  <Ondenosencontrar />
                                  <Timeline />
                              </>
                          }
                      />

                      <Route path="/atividades-munhoz-junior" element={<MunhozJunior />} />

                      <Route path="/atividades-recanto" element={<Recanto />} />

                      <Route path="/atividades-centro" element={<Centro />} />

                      <Route path="/atividades-casper" element={<Casper />} />

                      <Route path="/Doe" element={<Doe />} />

                  </Routes>
              </main>
              <footer>
                  <Footer />
              </footer>
          </div>
      </Router>
  );
}

export default App;
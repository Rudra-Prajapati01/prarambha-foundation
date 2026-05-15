import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Events from "./pages/Events"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"

import Login from "./admin/pages/Login"
import Dashboard from "./admin/pages/Dashboard"
import Pages from "./admin/pages/Pages"

import ProtectedRoute from "./admin/components/ProtectedRoute"

function App() {

  return (

    <div className="overflow-x-hidden w-full">

      <BrowserRouter>

        <Routes>

          {/* =====================================
              PUBLIC WEBSITE ROUTES
          ===================================== */}

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* SERVICES */}
          <Route
            path="/services"
            element={<Services />}
          />

          {/* EVENTS */}
          <Route
            path="/events"
            element={<Events />}
          />

          {/* GALLERY */}
          <Route
            path="/gallery"
            element={<Gallery />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* =====================================
              ADMIN ROUTES
          ===================================== */}

          {/* LOGIN */}
          <Route
            path="/admin"
            element={<Login />}
          />

          {/* DASHBOARD */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>

                <Dashboard />

              </ProtectedRoute>
            }
          />

          {/* CMS PAGES */}
          <Route
            path="/admin/pages"
            element={
              <ProtectedRoute>

                <Pages />

              </ProtectedRoute>
            }
          />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
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

import GalleryAdmin from "./admin/pages/GalleryAdmin"

import StoryDetails from "./pages/StoryDetails"

import Stories from "./components/common/stories/Stories"

import StoriesAdmin from "./admin/pages/StoriesAdmin"

import Chairperson from "./pages/Chairperson"


import EarlyIntervention from "./pages/programs/EarlyIntervention"
import TherapySupport from "./pages/programs/TherapySupport"
import InclusiveEducation from "./pages/programs/InclusiveEducation"
import CommunitySupport from "./pages/programs/CommunitySupport"

/* =========================
   ADD THIS IMPORT
========================= */

import Messages from "./admin/pages/Messages"

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


          <Route
            path="/programs/early-intervention"
            element={<EarlyIntervention />}
          />

          <Route
            path="/programs/therapy-support"
            element={<TherapySupport />}
          />

          <Route
            path="/programs/inclusive-education"
            element={<InclusiveEducation />}
          />

          <Route
            path="/programs/community-support"
            element={<CommunitySupport />}
          />

          {/* =====================================
              STORIES ROUTES
          ===================================== */}

          {/* ALL STORIES */}
          <Route
            path="/stories"
            element={<Stories />}
          />

          {/* SINGLE STORY */}
          <Route
            path="/stories/:id"
            element={<StoryDetails />}
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

          {/* GALLERY ADMIN */}
          <Route
            path="/admin/gallery"
            element={
              <ProtectedRoute>

                <GalleryAdmin />

              </ProtectedRoute>
            }
          />

          {/* STORIES ADMIN */}
          <Route
            path="/admin/stories"
            element={
              <ProtectedRoute>

                <StoriesAdmin />

              </ProtectedRoute>
            }
          />

          {/* =====================================
              MESSAGES ADMIN
          ===================================== */}

          <Route
            path="/admin/messages"
            element={
              <ProtectedRoute>

                <Messages />

              </ProtectedRoute>
            }
          />


          <Route
            path="/chairperson"
            element={<Chairperson />}
          />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
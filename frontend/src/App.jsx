import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"

import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"

import Login from "./admin/pages/Login"
import Dashboard from "./admin/pages/Dashboard"
import Pages from "./admin/pages/Pages"

import ProtectedRoute from "./admin/components/ProtectedRoute"

import GalleryAdmin from "./admin/pages/GalleryAdmin"

import StoryDetails from "./pages/StoryDetails"

import Stories from "./components/common/stories/Stories"

import DonateNow from "./pages/DonateNow"

import StoriesAdmin from "./admin/pages/StoriesAdmin"

import Messages from "./admin/pages/Messages"

/* =====================================
   CHAIRPERSON
===================================== */

import Chairperson from "./pages/Chairperson"

/* =====================================
   PROGRAM PAGES
===================================== */

import EarlyIntervention from "./pages/programs/EarlyIntervention"

import TherapySupport from "./pages/programs/TherapySupport"

import InclusiveEducation from "./pages/programs/InclusiveEducation"

import CommunitySupport from "./pages/programs/CommunitySupport"

function App() {

  return (

    <div className="overflow-x-hidden w-full">

      <BrowserRouter>

        <Routes>

          {/* =====================================
              PUBLIC WEBSITE ROUTES
          ===================================== */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/gallery"
            element={<Gallery />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/donate"
            element={<DonateNow />}
          />

          {/* =====================================
              CHAIRPERSON PAGE
          ===================================== */}

          <Route
            path="/chairperson"
            element={<Chairperson />}
          />

          {/* =====================================
              PROGRAM PAGES
          ===================================== */}

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

          <Route
            path="/stories"
            element={<Stories />}
          />

          <Route
            path="/stories/:id"
            element={<StoryDetails />}
          />

          {/* =====================================
              ADMIN LOGIN
          ===================================== */}

          <Route
            path="/admin"
            element={<Login />}
          />

          {/* =====================================
              ADMIN DASHBOARD
          ===================================== */}

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>

                <Dashboard />

              </ProtectedRoute>
            }
          />

          {/* =====================================
              ADMIN PAGES
          ===================================== */}

          <Route
            path="/admin/pages"
            element={
              <ProtectedRoute>

                <Pages />

              </ProtectedRoute>
            }
          />

          {/* =====================================
              ADMIN GALLERY
          ===================================== */}

          <Route
            path="/admin/gallery"
            element={
              <ProtectedRoute>

                <GalleryAdmin />

              </ProtectedRoute>
            }
          />

          {/* =====================================
              ADMIN STORIES
          ===================================== */}

          <Route
            path="/admin/stories"
            element={
              <ProtectedRoute>

                <StoriesAdmin />

              </ProtectedRoute>
            }
          />

          {/* =====================================
              ADMIN MESSAGES
          ===================================== */}

          <Route
            path="/admin/messages"
            element={
              <ProtectedRoute>

                <Messages />

              </ProtectedRoute>
            }
          />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"

import { useEffect, useState, useCallback } from "react"
import axios from "axios"

import { usePageData }
  from "../context/PageContext"



function Gallery() {

  const { pageData } =
  usePageData()

  const [gallery, setGallery] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [loading, setLoading] = useState(true)
  const [imgLoaded, setImgLoaded] = useState(false)

  /* ─────────────────────────────
      FETCH
  ───────────────────────────── */
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const { data } = await axios.get(
          "https://prarambha-backend.onrender.com/api/gallery"
        )
        setGallery(data)
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    }
    fetchGallery()
  }, [])

  /* ─────────────────────────────
      CATEGORIES
  ───────────────────────────── */
  const categories = [
    "All",
    "Therapy Sessions",
    "Inclusive Learning",
    "Parent Support",
    "Community Events",
    "Creative Activities",
    "Growth Moments",
  ]

  const filteredGallery =
    selectedCategory === "All"
      ? gallery
      : gallery.filter(i => i.category === selectedCategory)

  /* ─────────────────────────────
      LIGHTBOX HELPERS
  ───────────────────────────── */
  const openLightbox = (item) => {
    const idx = filteredGallery.findIndex(i => i._id === item._id)
    setLightboxIndex(idx)
    setSelectedImage(item)
    setImgLoaded(false)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setLightboxIndex(null)
    document.body.style.overflow = ""
  }

  const goPrev = useCallback((e) => {
    if (e && e.stopPropagation) e.stopPropagation()
    const idx = (lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length
    setLightboxIndex(idx)
    setSelectedImage(filteredGallery[idx])
    setImgLoaded(false)
  }, [lightboxIndex, filteredGallery])

  const goNext = useCallback((e) => {
    if (e && e.stopPropagation) e.stopPropagation()
    const idx = (lightboxIndex + 1) % filteredGallery.length
    setLightboxIndex(idx)
    setSelectedImage(filteredGallery[idx])
    setImgLoaded(false)
  }, [lightboxIndex, filteredGallery])

  /* keyboard nav */
  useEffect(() => {
    if (!selectedImage) return
    const handler = (e) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goPrev(null)
      if (e.key === "ArrowRight") goNext(null)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [selectedImage, goPrev, goNext])

  const IMG = (path) => {

    /* =====================================
        NO IMAGE
    ===================================== */

    if (!path) {

      return "https://via.placeholder.com/1200x700?text=Gallery+Image"
    }

    /* =====================================
        CLOUDINARY IMAGE
    ===================================== */

    if (
      typeof path === "string"
      && path.startsWith("http")
    ) {

      return path
    }

    /* =====================================
        OLD BACKEND UPLOAD IMAGE
    ===================================== */

    return `https://prarambha-backend.onrender.com${path}`
  }

  const skeletonHeights = [280, 360, 300, 340, 260, 320]

  /* ─────────────────────────────
      RENDER
  ───────────────────────────── */
  return (
    <>
      <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');

          :root {
            --red:    #E63946;
            --yellow: #F4A020;
            --blue:   #2A9BD4;
            --ink:    #111827;
            --muted:  #6B7280;
            --pale:   #FFFDFB;
            --border: #F0EDE8;
            --r:      28px;
          }

          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

          .gp { font-family: 'DM Sans', sans-serif; background: var(--pale); min-height: 100vh; overflow-x: hidden; color: var(--ink); }

          /* ── HERO ── */
          .gp-hero {
            position: relative;
            background: linear-gradient(150deg, #FFF5F0 0%, #FFFDFB 55%, #EEF8FF 100%);
            padding: 96px 40px 0;
            overflow: hidden;
          }

          .gp-noise {
            position: absolute; inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
            pointer-events: none;
          }

          .gp-blob { position: absolute; border-radius: 50%; filter: blur(72px); pointer-events: none; }
          .gp-b1 { width:420px;height:420px;background:#FFE3E6;opacity:.45;top:-100px;left:-80px; }
          .gp-b2 { width:360px;height:360px;background:#FFF3CC;opacity:.5;bottom:-60px;right:-80px; }
          .gp-b3 { width:240px;height:240px;background:#D6EFFF;opacity:.4;top:45%;left:58%; }

          .gp-hero-inner {
            position: relative; z-index: 2;
            max-width: 960px; margin: 0 auto; text-align: center;
          }

          .gp-badge {
            display: inline-flex; align-items: center; gap: 10px;
            background: rgba(255,255,255,.88); backdrop-filter: blur(10px);
            border: 1px solid rgba(230,57,70,.14);
            padding: 10px 22px; border-radius: 50px; margin-bottom: 28px;
            font-weight: 600; font-size: 13px; color: var(--ink);
            box-shadow: 0 4px 18px rgba(0,0,0,.07);
          }

          .gp-pulse {
            width: 8px; height: 8px; border-radius: 50%;
            background: var(--red);
            animation: pulse 1.6s ease-in-out infinite;
          }

          @keyframes pulse {
            0%,100%{transform:scale(1);opacity:1}
            50%{transform:scale(1.55);opacity:.55}
          }

          .gp-title {
            font-family: 'Fraunces', serif;
            font-size: clamp(36px, 7vw, 68px);
            font-weight: 900;
            line-height: 1.08;
            color: var(--ink);
            margin-bottom: 22px;
            letter-spacing: -1.5px;
          }

          .gp-title em { font-style: italic; color: var(--red); }

          .gp-desc {
            font-size: clamp(14px, 1.7vw, 17px);
            color: var(--muted);
            line-height: 1.9;
            max-width: 680px;
            margin: 0 auto 44px;
          }

          .gp-stats {
            display: inline-flex;
            background: #fff;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0,0,0,.09);
            border: 1px solid var(--border);
            overflow: hidden;
            margin-bottom: 64px;
          }

          .gp-stat {
            padding: 22px 36px;
            text-align: center;
            border-right: 1px solid var(--border);
          }

          .gp-stat:last-child { border-right: none; }

          .gp-stat-n {
            display: block;
            font-family: 'Fraunces', serif;
            font-size: 30px; font-weight: 900;
            line-height: 1; margin-bottom: 5px;
          }

          .gp-stat-l {
            font-size: 11px; font-weight: 600;
            color: #9CA3AF; text-transform: uppercase;
            letter-spacing: 1px;
          }

          .gp-wave { display: block; width: 100%; line-height: 0; margin-top: -1px; }

          /* ── FILTER ── */
          .gp-filter {
            background: rgba(255,255,255,.94);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border);
            padding: 15px 40px;
            position: sticky; top: 0; z-index: 50;
            box-shadow: 0 2px 14px rgba(0,0,0,.05);
          }

          .gp-filter-inner {
            max-width: 1200px; margin: 0 auto;
            display: flex; gap: 8px;
            overflow-x: auto; scrollbar-width: none; padding-bottom: 2px;
          }

          .gp-filter-inner::-webkit-scrollbar { display: none; }

          .gp-fbtn {
            white-space: nowrap;
            padding: 9px 20px; border-radius: 50px;
            border: 1.5px solid transparent;
            font-family: 'DM Sans', sans-serif;
            font-weight: 700; font-size: 13px;
            cursor: pointer; transition: all .22s; flex-shrink: 0;
          }

          .gp-fbtn.on  { background: var(--red); color: #fff; box-shadow: 0 4px 14px rgba(230,57,70,.3); }
          .gp-fbtn.off { background: #F3F4F6; color: #374151; }
          .gp-fbtn.off:hover { background: #FFE9EB; color: var(--red); border-color: rgba(230,57,70,.22); }

          /* ── MAIN ── */
          .gp-main { padding: 56px 40px 80px; }
          .gp-inner { max-width: 1200px; margin: 0 auto; }

          /* Quote */
          .gp-quote {
            position: relative;
            background: #fff;
            border-radius: 32px;
            padding: 52px 60px;
            text-align: center;
            box-shadow: 0 6px 26px rgba(0,0,0,.06);
            border: 1px solid var(--border);
            margin-bottom: 56px;
            overflow: hidden;
          }

          .gp-quote::before {
            content: "\\201C";
            font-family: 'Fraunces', serif;
            font-size: 220px; font-weight: 900;
            color: #FFF0F2;
            position: absolute; top: -35px; left: 18px;
            line-height: 1; pointer-events: none;
          }

          .gp-quote-t {
            font-family: 'Fraunces', serif;
            font-size: clamp(19px, 2.6vw, 28px);
            font-weight: 700; color: var(--ink);
            line-height: 1.5; position: relative; z-index: 1;
            margin-bottom: 14px;
          }

          .gp-quote-t span { color: var(--red); font-style: italic; }
          .gp-quote-a { font-size: 13px; font-weight: 600; color: #9CA3AF; position: relative; z-index: 1; }

          /* Section label */
          .gp-lbl {
            display: flex; align-items: center; gap: 16px; margin-bottom: 36px;
          }

          .gp-lbl-t {
            font-weight: 800; font-size: 12px;
            color: var(--red); text-transform: uppercase;
            letter-spacing: 2.5px; white-space: nowrap;
          }

          .gp-lbl-l {
            flex: 1; height: 1.5px;
            background: linear-gradient(to right, rgba(230,57,70,.4), transparent);
          }

          /* ── MASONRY ── */
          .gp-grid { columns: 1; column-gap: 22px; }
          @media(min-width:640px)  { .gp-grid { columns: 2; } }
          @media(min-width:1024px) { .gp-grid { columns: 3; } }

          /* ── CARD ── */
          .gp-card {
            break-inside: avoid;
            display: inline-block;
            width: 100%; margin-bottom: 22px;
            background: #fff;
            border-radius: var(--r);
            overflow: hidden;
            cursor: pointer;
            border: 1px solid var(--border);
            box-shadow: 0 2px 10px rgba(0,0,0,.05);
            transition: transform .35s cubic-bezier(.22,.68,0,1.2), box-shadow .35s;
          }

          .gp-card:hover { transform: translateY(-8px) scale(1.01); box-shadow: 0 24px 54px rgba(0,0,0,.13); }

          .gp-c-img { position: relative; overflow: hidden; }

          .gp-c-img img {
            width: 100%; height: 280px; object-fit: cover; display: block;
            transition: transform .6s cubic-bezier(.22,.68,0,1.2);
          }

          .gp-card:hover .gp-c-img img { transform: scale(1.1); }

          .gp-c-ov {
            position: absolute; inset: 0;
            background: linear-gradient(160deg, rgba(230,57,70,0) 0%, rgba(17,24,39,.62) 100%);
            opacity: 0; transition: opacity .35s;
            display: flex; align-items: flex-end;
            justify-content: space-between; padding: 18px 20px;
          }

          .gp-card:hover .gp-c-ov { opacity: 1; }

          .gp-c-num {
            font-family: 'Fraunces', serif;
            font-size: 12px; color: rgba(255,255,255,.7); font-weight: 700;
          }

          .gp-c-zoom {
            width: 44px; height: 44px; background: #fff;
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-size: 17px;
            box-shadow: 0 4px 12px rgba(0,0,0,.2);
            transition: transform .2s;
          }

          .gp-card:hover .gp-c-zoom { transform: scale(1.12); }

          .gp-c-body { padding: 19px 20px 22px; }

          .gp-pill {
            display: inline-flex; align-items: center; gap: 6px;
            background: #FFF1F2; color: var(--red);
            padding: 5px 13px; border-radius: 50px;
            font-size: 11px; font-weight: 800;
            text-transform: uppercase; letter-spacing: .8px;
            margin-bottom: 11px;
          }

          .gp-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--red); flex-shrink: 0; }

          .gp-c-title {
            font-family: 'Fraunces', serif;
            font-size: 20px; font-weight: 700;
            color: var(--ink); line-height: 1.35;
            margin-bottom: 9px; transition: color .2s;
          }

          .gp-card:hover .gp-c-title { color: var(--red); }

          .gp-c-cap {
            font-size: 14px; color: var(--muted); line-height: 1.75;
            display: -webkit-box; -webkit-line-clamp: 2;
            -webkit-box-orient: vertical; overflow: hidden;
            margin-bottom: 16px;
          }

          .gp-c-btn {
            background: var(--red); color: #fff; border: none;
            padding: 10px 18px; border-radius: 50px;
            font-family: 'DM Sans', sans-serif;
            font-weight: 700; font-size: 13px;
            cursor: pointer;
            box-shadow: 0 3px 10px rgba(230,57,70,.25);
            transition: transform .2s, box-shadow .2s;
          }

          .gp-c-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(230,57,70,.35); }

          /* ── SKELETON ── */
          .gp-skel-grid { columns: 1; column-gap: 22px; }
          @media(min-width:640px)  { .gp-skel-grid { columns: 2; } }
          @media(min-width:1024px) { .gp-skel-grid { columns: 3; } }

          .gp-skel {
            break-inside: avoid; display: inline-block;
            width: 100%; margin-bottom: 22px;
            background: #fff; border-radius: var(--r);
            overflow: hidden; border: 1px solid var(--border);
          }

          .gp-shim {
            background: linear-gradient(90deg, #F3F4F6 25%, #E9EAEC 50%, #F3F4F6 75%);
            background-size: 400% 100%;
            animation: shim 1.5s infinite;
          }

          @keyframes shim { 0%{background-position:100% 0} 100%{background-position:-100% 0} }

          .gp-skel-b { padding: 18px; }
          .gp-skel-l { border-radius: 6px; margin-bottom: 9px; }

          /* ── EMPTY ── */
          .gp-empty { text-align: center; padding: 80px 20px; color: #9CA3AF; }
          .gp-empty-ico { font-size: 52px; margin-bottom: 14px; }
          .gp-empty-t { font-family:'Fraunces',serif; font-size:22px; font-weight:700; color:var(--ink); margin-bottom:8px; }

          /* ── CTA ── */
          .gp-cta {
            background: var(--yellow); padding: 64px 40px; text-align: center; position: relative; overflow: hidden;
          }

          .gp-cta::before { content:''; position:absolute; top:-80px;right:-80px; width:300px;height:300px; background:rgba(255,255,255,.12); border-radius:50%; }
          .gp-cta::after  { content:''; position:absolute; bottom:-60px;left:-60px; width:220px;height:220px; background:rgba(255,255,255,.10); border-radius:50%; }

          .gp-cta-t {
            font-family: 'Fraunces', serif;
            font-size: clamp(26px,4vw,40px); font-weight:900; color:#fff;
            margin-bottom:12px; position:relative; z-index:1;
          }

          .gp-cta-d { color:rgba(255,255,255,.9); font-size:16px; margin-bottom:28px; position:relative; z-index:1; }

          .gp-cta-btn {
            background:#fff; color:var(--red); border:none;
            padding:15px 36px; border-radius:50px;
            font-family:'DM Sans',sans-serif; font-weight:800; font-size:15px;
            cursor:pointer; box-shadow:0 6px 22px rgba(0,0,0,.14);
            transition:transform .2s,box-shadow .2s; position:relative; z-index:1;
          }

          .gp-cta-btn:hover { transform:translateY(-3px); box-shadow:0 12px 30px rgba(0,0,0,.2); }

          /* ══════════════════════════════
              LIGHTBOX
          ══════════════════════════════ */

          .lb-ov {
            position: fixed; inset: 0; z-index: 9999;
            background: rgba(6,6,10,.95);
            display: flex; align-items: center; justify-content: center;
            padding: 16px;
            animation: lbFade .2s ease;
          }

          @keyframes lbFade { from{opacity:0} to{opacity:1} }

          /* X button */
          .lb-x {
            position: absolute; top: 18px; right: 18px;
            width: 44px; height: 44px;
            background: rgba(255,255,255,.10);
            border: 1px solid rgba(255,255,255,.14);
            border-radius: 50%; color: #fff; font-size: 16px;
            cursor: pointer; z-index: 10;
            display: flex; align-items: center; justify-content: center;
            transition: background .2s, transform .25s;
          }

          .lb-x:hover { background: var(--red); transform: rotate(90deg); }

          /* Arrows */
          .lb-arr {
            position: absolute; top: 50%; transform: translateY(-50%);
            width: 50px; height: 50px;
            background: rgba(255,255,255,.09);
            border: 1px solid rgba(255,255,255,.14);
            border-radius: 50%; color: #fff; font-size: 22px;
            cursor: pointer; z-index: 10;
            display: flex; align-items: center; justify-content: center;
            transition: background .2s, transform .2s;
          }

          .lb-arr:hover { background: rgba(255,255,255,.2); transform: translateY(-50%) scale(1.1); }
          .lb-prev { left: 16px; }
          .lb-next { right: 16px; }

          /* Counter pill */
          .lb-cnt {
            position: absolute; bottom: 22px; left: 50%; transform: translateX(-50%);
            background: rgba(255,255,255,.11);
            border: 1px solid rgba(255,255,255,.14);
            color: rgba(255,255,255,.7);
            font-size: 12px; font-weight: 700; letter-spacing: 2px;
            padding: 6px 18px; border-radius: 50px; z-index: 10;
            white-space: nowrap;
          }

          /* Modal */
  .lb-modal {
    display: flex;
    width: 100%;
    max-width: 1180px;
    height: 88vh;
    background: #fff;
    border-radius: 26px;
    overflow: hidden;
    position: relative;
  }

          @keyframes lbScale { from{transform:scale(.92);opacity:0} to{transform:scale(1);opacity:1} }

.lb-img-side {
  flex: 1.15;
  height: 100%;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 14px;
}

.lb-img-side img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  border-radius: 18px;
  transition: opacity .3s ease;
}

          .lb-img-side img.lb-loading { opacity: 0; }
          .lb-img-side img.lb-loaded  { opacity: 1; }

          .lb-spinner-wrap {
            position: absolute; inset: 0;
            display: flex; align-items: center; justify-content: center;
            pointer-events: none;
          }

          .lb-ring {
            width: 38px; height: 38px;
            border: 3px solid rgba(255,255,255,.14);
            border-top-color: var(--red);
            border-radius: 50%;
            animation: spin .7s linear infinite;
          }

          @keyframes spin { to{transform:rotate(360deg)} }

          /* Mobile nav in image */
          .lb-img-nav-m {
            display: none;
            position: absolute; bottom: 14px; left: 50%; transform: translateX(-50%);
            gap: 10px; z-index: 5;
          }

          .lb-arr-m {
            width: 42px; height: 42px;
            background: rgba(0,0,0,.5); border: 1px solid rgba(255,255,255,.2);
            border-radius: 50%; color: #fff; font-size: 18px;
            cursor: pointer;
            display: flex; align-items: center; justify-content: center;
          }

          /* Info side */
          .lb-info-side {
            width: 360px; flex-shrink: 0;
            padding: 36px 30px;
            overflow-y: auto;
            display: flex; flex-direction: column;
            border-left: 1px solid var(--border);
          }

          .lb-info-side::-webkit-scrollbar { width: 3px; }
          .lb-info-side::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }

          .lb-i-pill {
            display: inline-flex; align-items: center; gap: 7px;
            background: #FFF1F2; color: var(--red);
            padding: 6px 14px; border-radius: 50px;
            font-size: 11px; font-weight: 800;
            text-transform: uppercase; letter-spacing: 1px;
            margin-bottom: 16px; align-self: flex-start;
          }

          .lb-i-title {
            font-family: 'Fraunces', serif;
            font-size: clamp(21px, 2.2vw, 28px);
            font-weight: 700; color: var(--ink);
            line-height: 1.25; margin-bottom: 12px;
          }

          .lb-i-bar {
            width: 36px; height: 3px;
            background: var(--red); border-radius: 3px;
            margin-bottom: 16px;
          }

          .lb-i-cap {
            font-size: 14.5px; color: var(--muted);
            line-height: 1.85; margin-bottom: 22px; flex: 1;
          }

          .lb-i-qblock {
            background: #FFF7F5;
            border-left: 4px solid var(--red);
            border-radius: 0 14px 14px 0;
            padding: 16px 18px; margin-bottom: 26px;
          }

          .lb-i-qblock p {
            font-family: 'Fraunces', serif;
            font-size: 14px; font-style: italic;
            color: var(--ink); line-height: 1.7;
          }

          .lb-i-btns { display: flex; gap: 10px; flex-wrap: wrap; }

          .lb-i-btn-p {
            flex: 1;
            background: var(--red); color: #fff; border: none;
            padding: 12px 18px; border-radius: 50px;
            font-family: 'DM Sans', sans-serif;
            font-weight: 700; font-size: 13px; cursor: pointer;
            box-shadow: 0 4px 12px rgba(230,57,70,.28);
            transition: transform .2s, box-shadow .2s;
            display: flex; align-items: center; justify-content: center; gap: 6px;
          }

          .lb-i-btn-p:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(230,57,70,.38); }

          .lb-i-btn-g {
            background: #F3F4F6; color: var(--ink); border: none;
            padding: 12px 16px; border-radius: 50px;
            font-family: 'DM Sans', sans-serif;
            font-weight: 700; font-size: 13px; cursor: pointer;
            transition: background .2s;
            display: flex; align-items: center; justify-content: center; gap: 6px;
          }

          .lb-i-btn-g:hover { background: #E5E7EB; }

          /* Dot nav */
          .lb-dots {
            display: flex; gap: 6px; justify-content: center; margin-top: 18px;
          }

          .lb-dot-i {
            height: 6px; border-radius: 3px;
            background: #E5E7EB; cursor: pointer;
            transition: all .22s; width: 6px;
          }

          .lb-dot-i.on { background: var(--red); width: 18px; }

          /* Swipe hint */
          .lb-hint {
            font-size: 11px; color: rgba(255,255,255,.35);
            text-align: center; margin-top: 12px;
            letter-spacing: 1px;
            display: none;
          }

          /* ── RESPONSIVE ── */
          @media(max-width:860px) {
            .lb-modal { flex-direction: column; max-height: 92vh; }
            .lb-img-side { 
  flex: none; 
  height: 58vw; 
  min-height: 260px; 
  max-height: 420px; 
}
            .lb-info-side { width: 100%; border-left: none; border-top: 1px solid var(--border); padding: 22px 18px; }
            .lb-arr { display: none; }
            .lb-img-nav-m { display: flex; }
            .lb-hint { display: block; }
          }

          @media(max-width:640px) {
            .gp-hero  { padding: 68px 18px 0; }
            .gp-main  { padding: 36px 16px 60px; }
            .gp-filter{ padding: 12px 16px; }
            .gp-quote { padding: 34px 22px; }
            .gp-stats { flex-direction: column; }
            .gp-stat  { border-right:none; border-bottom:1px solid var(--border); }
            .gp-stat:last-child { border-bottom:none; }
            .lb-x     { top:10px; right:10px; }
            .lb-cnt   { bottom:8px; }
          }
        `}</style>

      <div className="gp">

        <Navbar
          pageData={pageData}
        />

        {/* ══════════ HERO ══════════ */}
        <section className="gp-hero">
          <div className="gp-noise" />
          <div className="gp-blob gp-b1" />
          <div className="gp-blob gp-b2" />
          <div className="gp-blob gp-b3" />

          <div className="gp-hero-inner">

            <div className="gp-badge">
              <div className="gp-pulse" />
              Real Stories &bull; Real Smiles &bull; Real Growth
            </div>

            <h1 className="gp-title">
              Moments of <em>Growth,</em><br />
              Inclusion &amp; <em>Hope</em>
            </h1>

            <p className="gp-desc">
              Every smile, every step, and every small achievement tells a story of
              courage, care, and possibility. These moments reflect the heart of
              Prarambha Foundation and the beautiful journeys of our children.
            </p>

            <div className="gp-stats">
              <div className="gp-stat">
                <span className="gp-stat-n" style={{ color: "var(--red)" }}>500+</span>
                <span className="gp-stat-l">Children</span>
              </div>
              <div className="gp-stat">
                <span className="gp-stat-n" style={{ color: "var(--yellow)" }}>{gallery.length || "—"}</span>
                <span className="gp-stat-l">Gallery Items</span>
              </div>
              <div className="gp-stat">
                <span className="gp-stat-n" style={{ color: "var(--blue)" }}>7</span>
                <span className="gp-stat-l">Categories</span>
              </div>
            </div>

          </div>
        </section>

        <svg className="gp-wave" viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="#FFFDFB" />
        </svg>

        {/* ══════════ FILTER BAR ══════════ */}
        <div className="gp-filter">
          <div className="gp-filter-inner">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`gp-fbtn ${selectedCategory === cat ? "on" : "off"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ══════════ MAIN ══════════ */}
        <section className="gp-main">
          <div className="gp-inner">

            {/* Quote */}
            <div className="gp-quote">
              <p className="gp-quote-t">
                "Every child deserves a place where they are{" "}
                <span>understood before being judged.</span>"
              </p>
              <p className="gp-quote-a">— Prarambha Foundation</p>
            </div>

            {/* Label */}
            <div className="gp-lbl">
              <span className="gp-lbl-t">
                {selectedCategory === "All"
                  ? `All Moments (${gallery.length})`
                  : `${selectedCategory} (${filteredGallery.length})`}
              </span>
              <div className="gp-lbl-l" />
            </div>

            {/* Skeleton */}
            {loading && (
              <div className="gp-skel-grid">
                {skeletonHeights.map((h, i) => (
                  <div key={i} className="gp-skel">
                    <div className="gp-shim" style={{ height: h }} />
                    <div className="gp-skel-b">
                      <div className="gp-skel-l gp-shim" style={{ height: 15, width: "38%", marginBottom: 12 }} />
                      <div className="gp-skel-l gp-shim" style={{ height: 20, width: "80%" }} />
                      <div className="gp-skel-l gp-shim" style={{ height: 20, width: "58%" }} />
                      <div className="gp-skel-l gp-shim" style={{ height: 13, width: "68%", marginTop: 8 }} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Empty */}
            {!loading && filteredGallery.length === 0 && (
              <div className="gp-empty">
                <div className="gp-empty-ico">📷</div>
                <div className="gp-empty-t">No photos in this category yet</div>
                <p>More moments are being added — check back soon!</p>
              </div>
            )}

            {/* Grid */}
            {!loading && filteredGallery.length > 0 && (
              <div className="gp-grid">
                {filteredGallery.map((item, idx) => (
                  <div
                    key={item._id}
                    className="gp-card"
                    onClick={() => openLightbox(item)}
                  >
                    <div className="gp-c-img">
                      <img
                        src={IMG(item.image)}
                        alt={item.title}

                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/1200x700?text=Gallery+Image"
                        }}
                      />
                      <div className="gp-c-ov">
                        <span className="gp-c-num">{idx + 1} / {filteredGallery.length}</span>
                        <div className="gp-c-zoom">🔍</div>
                      </div>
                    </div>
                    <div className="gp-c-body">
                      <div className="gp-pill">
                        <div className="gp-dot" />
                        {item.category}
                      </div>
                      <h3 className="gp-c-title">{item.title}</h3>
                      <p className="gp-c-cap">{item.caption}</p>
                      <button className="gp-c-btn">View Story →</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>


        {/* ══════════════════════════════
              LIGHTBOX
          ══════════════════════════════ */}
        {selectedImage && (
          <div className="lb-ov" onClick={closeLightbox}>

            {/* Close */}
            <button className="lb-x" onClick={closeLightbox}>✕</button>

            {/* Arrows (desktop) */}
            {filteredGallery.length > 1 && (
              <>
                <button className="lb-arr lb-prev" onClick={goPrev}>‹</button>
                <button className="lb-arr lb-next" onClick={goNext}>›</button>
              </>
            )}

            {/* Counter */}
            {filteredGallery.length > 1 && (
              <div className="lb-cnt">
                {lightboxIndex + 1} &nbsp;/&nbsp; {filteredGallery.length}
              </div>
            )}

            {/* Modal */}
            <div className="lb-modal" onClick={e => e.stopPropagation()}>

              {/* ── Image side ── */}
              <div className="lb-img-side">
                {!imgLoaded && (
                  <div className="lb-spinner-wrap">
                    <div className="lb-ring" />
                  </div>
                )}
                <img
                  key={selectedImage._id}

                  src={IMG(selectedImage.image)}

                  alt={selectedImage.title}

                  className={
                    imgLoaded
                      ? "lb-loaded"
                      : "lb-loading"
                  }

                  onLoad={() =>
                    setImgLoaded(true)
                  }

                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/1200x700?text=Gallery+Image"
                  }}
                />

                {/* Mobile nav */}
                {filteredGallery.length > 1 && (
                  <div className="lb-img-nav-m">
                    <button className="lb-arr-m" onClick={goPrev}>‹</button>
                    <button className="lb-arr-m" onClick={goNext}>›</button>
                  </div>
                )}
              </div>

              {/* ── Info side ── */}
              <div className="lb-info-side">

                {/* Category pill */}
                <div className="lb-i-pill">
                  <div className="gp-dot" />
                  {selectedImage.category}
                </div>

                {/* Title */}
                <h2 className="lb-i-title">{selectedImage.title}</h2>
                <div className="lb-i-bar" />

                {/* Caption */}
                <p className="lb-i-cap">{selectedImage.caption}</p>

                {/* Inspirational quote */}
                <div className="lb-i-qblock">
                  <p>
                    "Every child learns differently, and every smile is a step
                    toward confidence and belonging."
                  </p>
                </div>

                {/* Action buttons */}
                <div className="lb-i-btns">
                  <button className="lb-i-btn-p" onClick={closeLightbox}>
                    ✕ Close Story
                  </button>
                  <button className="lb-i-btn-g">
                    ❤️ Share
                  </button>
                </div>

                {/* Dot navigation */}
                {filteredGallery.length > 1 && (
                  <div className="lb-dots">
                    {filteredGallery
                      .slice(
                        Math.max(0, lightboxIndex - 3),
                        Math.min(filteredGallery.length, lightboxIndex + 4)
                      )
                      .map((_, i) => {
                        const realIdx = Math.max(0, lightboxIndex - 3) + i
                        return (
                          <div
                            key={realIdx}
                            className={`lb-dot-i ${realIdx === lightboxIndex ? "on" : ""}`}
                            onClick={() => {
                              setLightboxIndex(realIdx)
                              setSelectedImage(filteredGallery[realIdx])
                              setImgLoaded(false)
                            }}
                          />
                        )
                      })}
                  </div>
                )}

              </div>
            </div>

            {/* Keyboard hint (mobile) */}
            <div className="lb-hint">TAP ARROWS TO NAVIGATE &nbsp;•&nbsp; ESC TO CLOSE</div>

          </div>
        )}
        <Footer
          pageData={pageData}
        />
      </div>
    </>
  )
}

export default Gallery
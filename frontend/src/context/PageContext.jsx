// src/context/PageContext.jsx

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

import axios from "axios"

/* =====================================
    CONTEXT
===================================== */

const PageContext =
  createContext()

/* =====================================
    PROVIDER
===================================== */

export function PageProvider({
  children,
}) {

  const [pageData, setPageData] =
    useState(null)

  const [loading, setLoading] =
    useState(true)

  /* =====================================
      FETCH GLOBAL DATA
  ===================================== */

  useEffect(() => {

    fetchPageData()

  }, [])

  const fetchPageData =
    async () => {

      try {

        const { data } =
          await axios.get(
            "https://prarambha-backend.onrender.com/api/pages/home"
          )

        setPageData(data)

      } catch (error) {

        console.log(error)
      } finally {

        setLoading(false)
      }
    }

  /* =====================================
      RETURN
  ===================================== */

  return (

    <PageContext.Provider
      value={{
        pageData,
        setPageData,
        loading,
      }}
    >

      {children}

    </PageContext.Provider>

  )
}

/* =====================================
    CUSTOM HOOK
===================================== */

export const usePageData =
  () => useContext(PageContext)
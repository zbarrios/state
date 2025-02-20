import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function SecondLayout() {
  return (
    <>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

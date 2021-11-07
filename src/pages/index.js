import React from "react"
import Helmet from 'react-helmet'


function header() {
  return <nav className="flex items-center justify-between flex-wrap bg-green p-0 h-16">
    <div className="flex items-center flex-shrink-0 text-white mr-6 ml-6">
      <span>Joshua Tanner</span>
    </div>
    <div style={{borderLeft: "1px solid white", height: "100%"}} className="mr-6"/>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-white">
      <div className="text-sm lg:flex-grow">
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0  mr-4">
          Software
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
          Translation
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0">
          Blog
        </a>
      </div>
    </div>
  </nav>
}

function textbox() {
  return <div className="bg-white flex m-10 p-5 shadowed">
    oogity boogity
  </div>
}


export default function IndexPage() {
  return (
      <main>
        {header()}
        {textbox()}
      </main>
  )
}
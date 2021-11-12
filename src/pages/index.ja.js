import React from "react"
import github from "../images/scaled-github.svg"
import se from "../images/scaled-se.svg"
import linkedin from "../images/scaled-linkedin.svg"
import scholar from "../images/scaled-scholar.svg"
import email from "../images/scaled-email.svg"


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
  return <div className="bg-white flex m-10 p-5 shadowed w-full">
    好評工事中
  </div>
}

function sidebar() {
  return <div className="flex-col items-center bg-transparent h-full pr-5 pt-5">
    <img src={github} alt="github" className="pt-2 pb-2"/>
    <img src={se} alt="stack exchange" className="pt-2 pb-2"/>
    <img src={linkedin} alt="linkedin" className="pt-2 pb-2"/>
    <img src={scholar} alt="google scholar" className="pt-2 pb-2"/>
    <img src={email} alt="email" className="pt-2 pb-2"/>
  </div>
}


export default function IndexPage() {
  return (
      <main>
        {header()}
        <div className="flex flex-row">
          {textbox()}
          {sidebar()}
        </div>
      </main>
  )
}
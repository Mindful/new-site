import React from "react"
import {Header, LanguageSelector, Sidebar, Textbox} from "../../components"



export default function IndexPage({data, location}) {
  let lang = "ja";
  return (
      <main>
        <Header location={location} lang={lang}/>
        <div className="flex flex-row">
            <Textbox>
                <p>工事中</p>
            </Textbox>
            <Sidebar/>
        </div>
      </main>
  )
}
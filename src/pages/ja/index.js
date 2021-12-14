import React from "react"
import {Header, LanguageSelector, Sidebar, ContentBox} from "../../components"



export default function IndexPage({data, location}) {
  let lang = "ja";
  return (
      <main>
        <Header location={location} lang={lang}/>
        <div className="flex flex-row">
            <ContentBox>
                <p>工事中</p>
            </ContentBox>
            <Sidebar/>
        </div>
      </main>
  )
}
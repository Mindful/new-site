import React from "react"
import {Header, LanguageSelector, Sidebar, Textbox} from "../components"
import portrait from "../images/portrait.jpg"




export default function IndexPage({data, location}) {
    let lang = "en";
    return (
        <main>
            <Header location={location} lang={lang}/>
            <div className="flex flex-row">
                <Textbox>
                    <img className="flex flex-shrink rounded-full h-80 w-80" src={portrait}/>
                    <p>Under construction</p>
                </Textbox>
                <Sidebar/>
            </div>
        </main>
    )
}

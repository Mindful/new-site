import React from "react"
import {Layout, Textbox} from "../components"
import portrait from "../images/portrait.jpg"




export default function IndexPage({data, location}) {
    let lang = "en";
    return (
        <Layout lang={lang} location={location}>
            <Textbox>
                <img className="flex flex-shrink rounded-full h-80 w-80" src={portrait}/>
                <p>Under construction</p>
            </Textbox>
        </Layout>
    )
}

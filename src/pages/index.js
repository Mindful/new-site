import React from "react"
import {Layout, ContentBox} from "../components"
import portrait from "../images/portrait.jpg"




export default function IndexPage({data, location}) {
    let lang = "en";
    return (
        <Layout lang={lang} location={location}>
            <ContentBox>
                <img className="flex flex-shrink rounded-full h-80 w-80" src={portrait}/>
                <p>Under construction</p>
            </ContentBox>
        </Layout>
    )
}

import React from "react"
import {Layout, ContentBox, Timeline} from "../components"
import portrait from "../images/portrait.jpg"




export default function IndexPage({data, location}) {
    let lang = "en";
    return (
        <Layout lang={lang} location={location}>
            <ContentBox className={'flex-row'}>
                <div className={'w-1/3'}>
                    <img className="flex flex-shrink rounded-full h-80 m-auto" src={portrait}/>
                    <Timeline></Timeline>
                </div>

                <p>Under construction</p>
            </ContentBox>
        </Layout>
    )
}

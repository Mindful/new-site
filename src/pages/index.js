import React from "react"
import {Layout, ContentBox, Timeline} from "../components"
import portrait from "../images/portrait.jpg"




export default function IndexPage({data, location}) {
    let lang = "en";
    return (
        <Layout lang={lang} location={location}>
            <ContentBox className={'flex-row'}>
                <div className={'w-80'}>
                    <img className="flex flex-shrink rounded-full h-80" src={portrait}/>
                    <Timeline></Timeline>
                </div>

                <p>Under construction</p>
            </ContentBox>
        </Layout>
    )
}

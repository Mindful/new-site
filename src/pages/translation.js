import React from "react"
import {Heading, Layout, ContentBox} from "../components"
import portrait from "../images/portrait.jpg"




export default function IndexPage({data, location}) {
    let lang = "en";
    return (
        <Layout lang={lang} location={location}>
            <ContentBox className={'flex-col'}>
                <Heading>Interpretation</Heading>
                <p>TODO</p>
                <hr className={'my-8'}/>
                <Heading>Translation</Heading>
                <p>My expertise is primarily in backend development, software engineering and natural language processing (NLP).
                    If you need someone to help architect systems, build out the backend of your web/mobile application, train a
                    language related machine learning model or tackle some other kind of NLP problem, please feel free to reach out.
                    If you are looking for an expert web designer to make your website beautiful, I am not the right person.
                    An up-to-date summary of my professional experience can be found in my resume.
                    If you have a problem that seems like a good fit, the easiest way to find out for sure is just to email me.</p>
            </ContentBox>
        </Layout>
    )
}

import React from "react"
import {Heading, Layout, ContentBox} from "../components"
import resume from "../images/resume-icon.svg";



export default function IndexPage({data, location}) {
    let lang = "en";
    return (
        <Layout lang={lang} location={location} page_title={"Translation"}>
            <ContentBox className={'flex-col'}>
                <a className={'mx-auto flex-col content-evenly md:-mt-10 w-[135px]'} href={'https://mindful.github.io/resume/pdfs/interpreter_resume-nopii-nouseja.pdf'}>
                    <div>Up-to-date resume</div>
                    <div><img src={resume} alt="github" className="relative translate-x-1/2"/></div>
                </a>
                <Heading>Interpretation</Heading>
                <p>I work as an English/Japanese sequential interpreter, where much of my experience has been in the
                form of interpreting panels and other interactions for conference guests. </p>
                <hr className={'my-8'}/>
                <Heading>Translation</Heading>
                <p>I can also translate documents, applications, and other text. My professional background makes me
                uniquely qualified to work on the translation projects relating to software development
                or natural language processing.</p>
            </ContentBox>
        </Layout>
    )
}

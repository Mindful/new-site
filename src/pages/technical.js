import React from "react"
import {Heading, Layout, ContentBox} from "../components"
import resume from "../images/resume-icon.svg";


export default function IndexPage({data, location}) {
    let lang = "en";
    return (
        <Layout lang={lang} location={location} page_title={"Software"}>
            <ContentBox className={'flex-col'}>
                    <a className={'mx-auto flex-col content-evenly md:-mt-10 w-[135px]'} href={'https://mindful.github.io/resume/pdfs/resume-nopii-nouseja-nolong.pdf'}>
                        <div>Up-to-date resume</div>
                        <div><img src={resume} alt="github" className="relative translate-x-1/2"/></div>
                    </a>
                <Heading>Natural Language Processing</Heading>
                <p>My focus is on applying NLP technologies to solve real world problems. I work across a wide range
                of NLP technologies, but some of my favorite tools include spaCy, Pytorch and scikit-learn.  </p>
                <hr className={'my-8'}/>
                <Heading>Software Engineering</Heading>
                <p>My software engineering expertise is primarily in backend development, where I have built out scalable
                    and stable backends at both fortune 500 companies and startups in a variety of languages. I also work
                    directly with mobile and front end technologies where necessary.
                </p>
            </ContentBox>
        </Layout>
    )
}

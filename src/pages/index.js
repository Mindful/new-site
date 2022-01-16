import React from "react"
import {Layout, ContentBox, Timeline, Portrait, LangLink} from "../components"




export default function IndexPage({data, location}) {
    let lang = "en";
    return (
        <Layout lang={lang} location={location}>
            <ContentBox className={'flex-col sm:flex-row'}>
                <div className={'w-full inline-block sm:w-1/2'}>
                    <Portrait></Portrait>
                    <Timeline lang={lang}></Timeline>
                </div>
                <div className={'w-full sm:pl-5 sm:w-1/2'}>
                    <p>Hi there! My name is Joshua Tanner, and I currently work as a software engineer
                        at <a className={'inline underline'} href={'https://mantra.co.jp/index_en.html'}>Mantra Inc.</a> As an engineer I
                        work primarily in <LangLink lang={lang} className={'inline underline'} to={'technical'}>natural language processing and backend development</LangLink>,
                        and I also occasionally work as a <LangLink lang={lang} className={'inline underline'} to={'translation'}>translator and interpreter</LangLink>.
                    </p>
                    <br/>
                    <p>
                        If you are interested in working with me on something, please feel to reach out. I am most interested in
                        language-related projects - in particular those that support language learners - but I am always happy
                        to hear about a good idea.
                    </p>
                </div>
            </ContentBox>
        </Layout>
    )
}

import React from "react"
import {Heading, Layout, ContentBox} from "../../components"
import resume from "../../images/resume-icon.svg";




export default function IndexPage({data, location}) {
    let lang = "ja";
    return (
        <Layout lang={lang} location={location} page_title={"Translation"}>
            <ContentBox className={'flex-col'}>
                <a className={'mx-auto flex-col content-evenly md:-mt-10 w-[135px]'} href={'https://mindful.github.io/resume/pdfs/interpreter_resume-nopii-useja.pdf'}>
                    <div>現在の職務経歴書</div>
                    <div><img src={resume} alt="github" className="relative translate-x-1/2"/></div>
                </a>
                <Heading>通訳</Heading>
                <p>英和の逐次通訳者として活動しています。経験の多くは国際会議に来客された方の専属通訳になりますが、分野の広範囲にわたって通訳できます。</p>
                <hr className={'my-8'}/>
                <Heading>翻訳</Heading>
                <p>書類やアプリなどの翻訳もできます。技術者としての職歴のおかげでソフトウェア開発と自然言語処理に関係する技術翻訳なら適任です。</p>
            </ContentBox>
        </Layout>
    )
}

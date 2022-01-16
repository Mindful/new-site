import React from "react"
import {Heading, Layout, ContentBox} from "../../components"
import resume from "../../images/resume-icon.svg";




export default function IndexPage({data, location}) {
    let lang = "ja";
    return (
        <Layout lang={lang} location={location} page_title={"Software"}>
            <ContentBox className={'flex-col'}>
                <a className={'mx-auto flex-col content-evenly md:-mt-10 w-[135px]'} href={'https://mindful.github.io/resume/pdfs/resume-nopii-useja-nolong.pdf'}>
                    <div>現在の職務経歴書</div>
                    <div><img src={resume} alt="github" className="relative translate-x-1/2"/></div>
                </a>
                <Heading>自然言語処理</Heading>
                <p>実際の問題を解決することに焦点を置きながら、様々な自然言語処理の技術を生かし研究や開発を行います。よく使うライブラリ野中には、
                    spaCy、Pytorch、scikit-learnなどがあります。</p>
                <hr className={'my-8'}/>
                <Heading>ソフトウェアエンジニアリング</Heading>
                <p>ソフト開発ではバックエンドを専門に、大手企業からベンチャーまででスケーラブルかつ安定したバックエンドを様々なプログラミング言語で
                    開発してきました。 必要とあれば、フロントエンドやモバイル開発もできます。
                </p>
            </ContentBox>
        </Layout>
    )
}

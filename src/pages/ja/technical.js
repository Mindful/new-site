import React from "react"
import {Heading, Layout, Textbox} from "../../components"




export default function IndexPage({data, location}) {
    let lang = "ja";
    return (
        <Layout lang={lang} location={location}>
            <Textbox className={'flex-col'}>
                <Heading>自然言語処理</Heading>
                <p>TODO</p>
                <hr className={'my-8'}/>
                <Heading>ソフトウェアエンジニアリング</Heading>
                <p>私の専門分野はバックエンド開発とソフトウェア工学、自然言語処理になります。システム設計やウェブ・モバイルアプリのバックエンド開発、
                    または自然言語処理や言語を対象とした機械学習なら、気軽にご相談ください。ウェブサイトを美しくできるデザイナーをお探しであれば申し訳ありませんが、適任ではありません。
                    最新の職歴などは職務経歴書で閲覧できます。</p>
            </Textbox>
        </Layout>
    )
}

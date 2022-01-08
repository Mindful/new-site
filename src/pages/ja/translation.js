import React from "react"
import {Heading, Layout, ContentBox} from "../../components"




export default function IndexPage({data, location}) {
    let lang = "ja";
    return (
        <Layout lang={lang} location={location} page_title={"Translation"}>
            <ContentBox className={'flex-col'}>
                <Heading>通訳</Heading>
                <p>TODO</p>
                <hr className={'my-8'}/>
                <Heading>翻訳</Heading>
                <p>英和の逐次通訳を中心に活動していますが、書類や他のテキストの翻訳もできます。経験の多くが国際会議に来客された方の専属通訳になりますが、最新の職歴などは職務経歴書で閲覧できます。

                    また、もしソフトウェア開発や人工知能に関係する内容の通訳または翻訳が必要であれば、その分野で日本語と英語の両方で働いた経験を持つ私にお任せください。
                    メールで気軽に問い合わせていただければ幸いです。</p>
            </ContentBox>
        </Layout>
    )
}

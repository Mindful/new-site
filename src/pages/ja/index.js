import React from "react"
import {ContentBox, LangLink, Layout, Portrait, Timeline} from "../../components"



export default function IndexPage({data, location}) {
  let lang = "ja";
  return (
      <Layout lang={lang} location={location}>
          <ContentBox className={'flex-col sm:flex-row'}>
              <div className={'w-full inline-block sm:w-1/2'}>
                  <Portrait></Portrait>
                  <Timeline lang={lang}></Timeline>
              </div>
              <div className={'w-full sm:pl-5 sm:w-1/2'}>
                  <p>初めまして！<a className={'inline underline'} href={'https://mantra.co.jp/index.html'}>Mantra株式会社</a>
                      でエンジニアを務めている、ジョシュア・ターナーと申します。 エンジニアとしては
                      <LangLink lang={lang} className={'inline underline'} to={'/technical'}>自然言語処理とバックエンド開発</LangLink>
                      を専門に扱っていますが、たまに<LangLink lang={lang} className={'inline underline'} to={'/translation'}>翻訳家や通訳者</LangLink>
                      として活動することもあります。
                  </p>
                  <br/>
                  <p>
                      コラボをしたい方は遠慮なく声をかけてください。興味は主に言語に関するプロジェクト、特に言語学習者の役に立つものにありますが、
                      斬新なアイデアを聞くことはいつでも歓迎します。
                  </p>
              </div>
          </ContentBox>
      </Layout>
  )
}
import React from "react"
import {ContentBox, Layout, Portrait, Timeline} from "../../components"



export default function IndexPage({data, location}) {
  let lang = "ja";
  return (
      <Layout lang={lang} location={location}>
          <ContentBox className={'flex-row'}>
              <div className={'w-1/3'}>
                  <Portrait></Portrait>
                  <Timeline></Timeline>
              </div>
              <p>工事中</p>
          </ContentBox>
      </Layout>
  )
}
import React from "react"
import { Link } from "gatsby"
import github from "./images/social-github.svg";
import se from "./images/social-se.svg";
import linkedin from "./images/social-linkedin.svg";
import scholar from "./images/social-scholar.svg";
import email from "./images/social-email.svg";
import twitter from "./images/social-twitter.svg";
import graduation from "./images/icon-graduation.svg";
import translation from "./images/icon-language.svg";
import work from "./images/icon-work.svg";
import university from "./images/icon-university.svg";
import { Chrono } from "react-chrono";
import {theme} from "../tailwind.config";
import portrait from "./images/portrait.jpg";
import SeoComponent from "./seo";

export function Portrait() {
    return <img className="flex max-w-[50%] rounded-full m-auto" alt="Self portrait" src={portrait}/>
}

function Leftcard(props) {
    return <div className="absolute -bottom-1 w-full">
        <p className={'text-right text-xs'}><b>{props.date}</b><br/>{props.content}</p>
    </div>
}

function Rightcard(props) {
    return <div className="absolute -bottom-1 w-full">
        <p className={'text-left text-xs'}><b>{props.date}</b><br/>{props.content}</p>
    </div>
}

export function Timeline({lang}) {
    let x = {en: 'Engineer@Mantra Inc.', ja: 'エンジニア@Mantra株式会社'}[lang]
    return <div className={'w-full'}>
            <Chrono mode="VERTICAL_ALTERNATING"  cardHeight={45}  theme={{
                primary: theme.colors.black,
                secondary: theme.colors.white,
                cardBgColor: theme.colors.transparent,
                cardForeColor: theme.colors.black,
                titleColor: theme.colors.black
            }} hideControls={true} useReadMore={false} scrollable={false}>

                <Leftcard date={'2021/12'} content={{en: 'Engineer@Mantra Inc.', ja: 'エンジニア@Mantra株式会社'}[lang]}/>
                <Rightcard date={'2021/12'} content={{en: 'MSc in Computational Linguistics', ja: '計算言語学の理学修士を取得'}[lang]}/>
                <Leftcard date={'2021/7'} content={{en: 'Intern@Mantra Inc. & Fuku Inc.', ja: 'インターン@Mantra株式会社とFuku株式会社'}[lang]}/>
                <Rightcard date={'2020/12'} content={{en: 'Research Intern@University of Tokyo IIS', ja: '研究実習生@東京大学生産技術研究所'}[lang]}/>
                <Leftcard date={'2020/6'} content={{en: 'Research Intern@Octanove Labs', ja: '研究インターン@Octanove Labs'}[lang]}/>
                <Rightcard date={'2019/9'} content={{en: 'Grad student@University of Washington', ja: '大学院生@ワシントン大学'}[lang]}/>
                <Leftcard date={'2019/9'} content={{en: 'Interpreter@Crunchyroll Expo', ja: '通訳者@クランチーロールエキスポ'}[lang]}/>
                <Rightcard date={'2019/8'} content={{en: 'Interpreter@Jonathan Ng Japan Tour', ja: '通訳者@Jonathan Ng 日本ツアー'}[lang]}/>
                <Leftcard date={'2019/4'} content={{en: 'Interpreter@Sakura-Con', ja: '通訳者@サクラコン'}[lang]}/>
                <Rightcard date={'2018/9'} content={{en: 'Interpreter@Japan-America Grassroots Summit', ja: '通訳者@日米草の根交流サミット大会'}[lang]}/>
                <Leftcard date={'2016/11'} content={{en: 'Engineer@eBay New Product Dev', ja: 'エンジニア@eBay新商品開発部'}[lang]}/>
                <Rightcard date={'2016/7'} content={{en: 'Translate "Maxel" app into Japanese', ja: 'Maxelアプリを和訳'}[lang]}/>
                <Leftcard date={'2015/9'} content={{en: 'Engineer@eBay Global Shipping', ja: 'エンジニア@国際配送管理部'}[lang]}/>
                <Rightcard date={'2015/4'} content={{en: 'BS in Computer Science', ja: 'コンピュータサイエンスの理学士を取得'}[lang]}/>
                <Leftcard date={'2014/4'} content={{en: 'Exchange student@University of Hyogo', ja: '留学生@兵庫県立大学'}[lang]}/>
                <Rightcard date={'2013/6'} content={{en: 'Intern@eBay Global Data Infrastructure', ja: 'インターン@eBay国際データインフラ部'}[lang]}/>



                <div className="chrono-icons">
                    <img src={work} alt="" />
                    <img src={graduation} alt="" />
                    <img src={work} alt="" />
                    <img src={university} alt="" />
                    <img src={work} alt="" />
                    <img src={university} alt="" />
                    <img src={translation} alt="" />
                    <img src={translation} alt="" />
                    <img src={translation} alt="" />
                    <img src={translation} alt="" />
                    <img src={work} alt="" />
                    <img src={translation} alt="" />
                    <img src={work} alt="" />
                    <img src={graduation} alt="" />
                    <img src={university} alt="" />
                    <img src={work} alt="" />
                </div>
            </Chrono>
        </div>

}

export function LangLink({lang, to, children, className}) {
    return <Link to={lang === 'en' ? to : '/'+lang+to} className={className}>
        {children}
    </Link>
}

export function PostLink({ post, lang }) {
    return <div>
        <LangLink to={post.frontmatter.slug} lang={lang}>
            {post.frontmatter.title}
        </LangLink>
    </div>
}

// https://www.gatsbyjs.com/blog/2020-02-19-how-to-build-multilingual-sites-with-gatsby/
export function LanguageSelector({lang, location, className}) {
    return {
        'en': (
            <Link className={className} to={`/ja${location.pathname}`}>
                日本語
            </Link>
        ),
        'ja': (
            <Link className={className} to={location.pathname.replace("/" + lang + "/", "/")}>
                English
            </Link>
        )
    }[lang]
}

export function Header({lang, location}) {
    return <nav className="flex bg-green p-0 h-16">
        <div className="flex items-center flex-shrink-0 text-white mr-6 ml-6">
            <LangLink to={'/'} lang={lang}><span>Joshua Tanner</span></LangLink>
        </div>
        <div style={{borderLeft: "1px solid white", height: "100%"}} className="mr-6"/>
        <div className="flex w-full items-center text-white">

            <div className="hidden sm:flex">
                <LangLink to={'/technical'} lang={lang} className="mr-4">SOFTWARE</LangLink>
                <LangLink to={'/translation'} lang={lang} className="mr-4">TRANSLATION</LangLink>
                <LangLink to={'/blog'} lang={lang}>BLOG</LangLink>
            </div>

            <div className="relative content-center -ml-4 sm:hidden">
                <input type="checkbox" id="sortbox" className="toggler"/>
                <div className="hamburger"><div></div></div>

                <div id="sortboxmenu" className="absolute mt-2 right-1 top-full min-w-max shadow rounded hidden bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-10">
                    <ul className="block text-right text-gray-900">
                        <li><LangLink to={'/technical'} lang={lang} className="block px-3 py-2 bg-green">SOFTWARE</LangLink></li>
                        <li><LangLink to={'/translation'} lang={lang} className="block px-3 py-2 bg-green">TRANSLATION</LangLink></li>
                        <li><LangLink to={'/blog'} lang={lang} className="block px-3 py-2 bg-green">BLOG</LangLink></li>
                    </ul>
                </div>
            </div>

                <LanguageSelector lang={lang} location={location} className="absolute right-4"/>
        </div>
    </nav>
}

export function Layout({lang, location, page_title, children, className}) {
    return (
        <main>
            <SeoComponent title={page_title}/>
            <Header location={location} lang={lang}/>
            <div className={"flex md:flex-row flex-col px-5 md:pr-0 items-center md:items-start " + (className ? className : '')}>
                {children}
                <Sidebar/>
            </div>
        </main>
    )
}


export function TextBox(props) {
    return <div className={'flex p-8 sm:p-14 bg-white shadowed w-full ' + (props.className ? props.className : '')}>
        {props.children}
    </div>
}

export function BoundingBox(props) {
    return <div className={"flex m-10 w-full " + (props.className ? props.className : '')}>
        {props.children}
    </div>
}

export function ContentBox(props) {
    return BoundingBox({children: TextBox(props)})
}

export function BlogPost({className, post, lang, headerLink}) {
    return <TextBox className={"flex-col" + (className ? className : '')}>
        <Heading>
            {headerLink
                ? <PostLink post={post} lang={lang}>{post.frontmatter.title}</PostLink>
                : post.frontmatter.title
            }
        </Heading>
        <span className={'mb-2'}>{post.frontmatter.date}</span>
        <div className={'blogpost'}
             dangerouslySetInnerHTML={{ __html: post.html }}
        />
    </TextBox>
}


export function Heading({children}) {
    return <header className={"text-3xl md:text-4xl my-4"}>{children}</header>
}

export function Sidebar() {
    return <div className="flex flex-row md:flex-col md:shrink-[0.15] bg-transparent md:h-full md:mr-5 md:mt-10
     bg-transparent md:py-0 -my-5 space-x-8 md:space-x-0">
        <a href={'https://github.com/Mindful'}>
            <img src={github} alt="github" className="w-auto h-auto md:w-3/4 md:h-3/4 pt-2 pb-2"/>
        </a>
        <a href={'https://stackexchange.com/users/5319885/mindful'}>
            <img src={se} alt="stack exchange" className="w-auto h-auto md:w-3/4 md:h-3/4 pt-2 pb-2"/>
        </a>
        <a href={'https://twitter.com/mindful_jt'}>
            <img src={twitter} alt="twitter" className="w-auto h-auto md:w-3/4 md:h-3/4 pt-2 pb-2"/>
        </a>
        <a href={'https://www.linkedin.com/in/joshuatanner2'}>
            <img src={linkedin} alt="linkedin" className="w-auto h-auto md:w-3/4 md:h-3/4 pt-2 pb-2"/>
        </a>
        <a href={'https://scholar.google.com/citations?user=OqYthY0AAAAJ&h'}>
            <img src={scholar} alt="google scholar" className="w-auto h-auto md:w-3/4 md:h-3/4 pt-2 pb-2"/>
        </a>
        <a href={'mailto:mindful.jt@gmail.com'}>
            <img src={email} alt="email" className="w-auto h-auto md:w-3/4 md:h-3/4 pt-2 pb-2"/>
        </a>
    </div>
}





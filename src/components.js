import React from "react"
import { Link } from "gatsby"
import github from "./images/scaled-github.svg";
import se from "./images/scaled-se.svg";
import linkedin from "./images/scaled-linkedin.svg";
import scholar from "./images/scaled-scholar.svg";
import email from "./images/scaled-email.svg";
import graduation from "./images/icon-graduation.svg";
import translation from "./images/icon-language.svg";
import work from "./images/icon-work.svg";
import university from "./images/icon-university.svg";
import { Chrono } from "react-chrono";
import {theme} from "../tailwind.config";
import portrait from "./images/portrait.jpg";

export function Portrait() {
    return <img className="flex max-h-[30%] rounded-full m-auto" alt="Self portrait" src={portrait}/>
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

export function Timeline() {
    const items = [{
            cardTitle: "2013/6",
            cardDetailedText: "Intern@eBay Global Data Infra",
        },
        {
            title: "2014/4",
            cardDetailedText: "Exchange student@University of Hyogo",
        },
        {
            title: "2015/4",
            cardDetailedText: "Receive BS in Computer Science",
        },
        {
            title: "2015/9",
            cardDetailedText: "Engineer eBay Global Shipping",
        },
        {
            title: "2016/7",
            cardDetailedText: "Translate \"Maxel\" app into Japanese",
        },
    ];

    return <div className={'w-full'}>
            <Chrono mode="VERTICAL_ALTERNATING"  cardHeight={45}  theme={{
                primary: theme.colors.black,
                secondary: theme.colors.white,
                cardBgColor: theme.colors.transparent,
                cardForeColor: theme.colors.black,
                titleColor: theme.colors.black
            }} hideControls={true} useReadMore={false} scrollable={false}>

                <Leftcard date={'2013/6'} content={'Intern@eBay Global Data Infrastructure'}/>
                <Rightcard date={'2014/4'} content={'Exchange student@University of Hyogo'}/>
                <Leftcard date={'2015/4'} content={'BS in Computer Science'}/>
                <Rightcard date={'2015/9'} content={'Engineer@eBay Global Shipping'}/>
                <Leftcard date={'2016/7'} content={'Translate "Maxel" app into Japanese'}/>
                <Rightcard date={'2016/11'} content={'Engineer@eBay New Product Dev'}/>
                <Leftcard date={'2018/9'} content={'Interpreter@Japan-America Grassroots Summit'}/>
                <Rightcard date={'2019/4'} content={'Interpreter@Sakura-Con'}/>
                <Leftcard date={'2019/8'} content={'Interpreter@Jonathan Ng Japan Tour'}/>
                <Rightcard date={'2019/9'} content={'Interpreter@Crunchyroll Expo'}/>
                <Leftcard date={'2019/9'} content={'Grad student@University of Washington'}/>
                <Rightcard date={'2020/6'} content={'Research Intern@Octanove Labs'}/>
                <Leftcard date={'2020/12'} content={'Research Intern@University of Tokyo'}/>
                <Rightcard date={'2021/7'} content={'Intern@Mantra Inc. & Fuku Inc.'}/>
                <Leftcard date={'2015/4'} content={'MSc in Computational Linguistics'}/>


                <div className="chrono-icons">
                    <img src={work} alt="" />
                    <img src={university} alt="" />
                    <img src={graduation} alt="" />
                    <img src={work} alt="" />
                    <img src={translation} alt="" />
                    <img src={work} alt="" />
                    <img src={translation} alt="" />
                    <img src={translation} alt="" />
                    <img src={translation} alt="" />
                    <img src={translation} alt="" />
                    <img src={university} alt="" />
                    <img src={work} alt="" />
                    <img src={university} alt="" />
                    <img src={work} alt="" />
                    <img src={graduation} alt="" />
                </div>
            </Chrono>
        </div>

}

export function PostLink({ post }) {
    return <div>
        <Link to={post.frontmatter.slug}>
            {post.frontmatter.title}
        </Link>
    </div>
}

export function LangLink({lang, to, children, className}) {
    return <Link to={lang === 'en' ? to : '/'+lang+to} className={className}>
        {children}
    </Link>
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


            <div className="relative sm:hidden">
                <input type="checkbox" id="sortbox" className="hidden absolute"/>
                <label htmlFor="sortbox" className="flex items-center space-x-1 cursor-pointer">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </label>

                <div id="sortboxmenu" className="absolute mt-2 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-10">
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

export function Layout({lang, location, children, className}) {
    return (
        <main>
            <Header location={location} lang={lang}/>
            <div className={"flex md:flex-row flex-col px-10 md:pr-0 items-center md:items-start " + (className ? className : '')}>
                {children}
                <Sidebar/>
            </div>
        </main>
    )
}


export function TextBox(props) {
    return <div className={'flex p-14 bg-white shadowed w-full ' + (props.className ? props.className : '')}>
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



// export function Textbox({lang, location, children, className}) {
//     return <div className={"bg-white flex m-10 p-14 shadowed w-full " + (className ? className : '')}>
//         {children}
//     </div>
// }

export function Heading({children}) {
    return <header className={"text-4xl my-4"}>{children}</header>
}

export function Sidebar() {
    return <div className="flex flex-row md:flex-col md:shrink-[0.15] bg-transparent md:h-full md:pr-5 md:pt-5
    md:space-x-0 space-x-5 bg-transparent md:py-0 -my-5">
        <a href={'https://github.com/Mindful'}>
            <img src={github} alt="github" className="pt-2 pb-2"/>
        </a>
        <a href={'https://stackexchange.com/users/5319885/mindful'}>
            <img src={se} alt="stack exchange" className="pt-2 pb-2"/>
        </a>
        <a href={'https://www.linkedin.com/in/joshuatanner2'}>
            <img src={linkedin} alt="linkedin" className="pt-2 pb-2"/>
        </a>
        <a href={'https://scholar.google.com/citations?user=OqYthY0AAAAJ&h'}>
            <img src={scholar} alt="google scholar" className="pt-2 pb-2"/>
        </a>
        <a href={'mailto:mindful.jt@gmail.com'}>
            <img src={email} alt="email" className="pt-2 pb-2"/>
        </a>
    </div>
}





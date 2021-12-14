import React from "react"
import { Link } from "gatsby"
import github from "./images/scaled-github.svg";
import se from "./images/scaled-se.svg";
import linkedin from "./images/scaled-linkedin.svg";
import scholar from "./images/scaled-scholar.svg";
import email from "./images/scaled-email.svg";
import portrait from "./images/portrait.jpg";

export function PostLink({ post }) {
    return <div>
        <Link to={post.frontmatter.slug}>
            {post.frontmatter.title} ({post.frontmatter.date})
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
        <div className="w-full flex items-center text-white">
                <LangLink to={'/technical'} lang={lang} className="mr-4">
                    SOFTWARE
                </LangLink>
                <LangLink to={'/translation'} lang={lang} className="mr-4">
                    INTERPRETATION
                </LangLink>
                <LangLink to={'/blog'} lang={lang}>
                    BLOG
                </LangLink>
                <LanguageSelector lang={lang} location={location} className="absolute right-4"/>
        </div>
    </nav>
}

export function Layout({lang, location, children, className}) {
    return (
        <main>
            <Header location={location} lang={lang}/>
            <div className={"flex " + (className ? className : '')}>
                {children}
                <Sidebar/>
            </div>
        </main>
    )
}



export function Textbox({lang, location, children, className}) {
    return <div className={"bg-white flex m-10 p-14 shadowed w-full " + (className ? className : '')}>
        {children}
    </div>
}

export function Heading({children}) {
    return <header className={"text-4xl my-4"}>{children}</header>
}

export function Sidebar() {
    return <div className="flex-col items-center bg-transparent h-full pr-5 pt-5">
        <Link to={'https://github.com/Mindful'}>
            <img src={github} alt="github" className="pt-2 pb-2"/>
        </Link>
        <Link to={'https://stackexchange.com/users/5319885/mindful'}>
            <img src={se} alt="stack exchange" className="pt-2 pb-2"/>
        </Link>
        <Link to={'https://www.linkedin.com/in/joshuatanner2'}>
            <img src={linkedin} alt="linkedin" className="pt-2 pb-2"/>
        </Link>
        <Link to={'https://scholar.google.com/citations?user=OqYthY0AAAAJ&h'}>
            <img src={scholar} alt="google scholar" className="pt-2 pb-2"/>
        </Link>
        <a href={'mailto:mindful.jt@gmail.com'}>
            <img src={email} alt="email" className="pt-2 pb-2"/>
        </a>
    </div>
}





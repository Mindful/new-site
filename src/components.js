import React from "react"
import { Link } from "gatsby"
import github from "./images/scaled-github.svg";
import se from "./images/scaled-se.svg";
import linkedin from "./images/scaled-linkedin.svg";
import scholar from "./images/scaled-scholar.svg";
import email from "./images/scaled-email.svg";

export function PostLink({ post }) {
    return <div>
        <Link to={post.frontmatter.slug}>
            {post.frontmatter.title} ({post.frontmatter.date})
        </Link>
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
                english
            </Link>
        )
    }[lang]
}

export function Header({lang, location}) {
    return <nav className="flex bg-green p-0 h-16">
        <div className="flex items-center flex-shrink-0 text-white mr-6 ml-6">
            <span>Joshua Tanner</span>
        </div>
        <div style={{borderLeft: "1px solid white", height: "100%"}} className="mr-6"/>
        <div className="w-full flex items-center text-white">
                <a href="#responsive-header" className="mr-4">
                    Software
                </a>
                <a href="#responsive-header" className=" mr-4">
                    Translation
                </a>
                <a href="#responsive-header" className="mr-4">
                    Blog
                </a>
                <LanguageSelector lang={lang} location={location} className="absolute right-4"/>
        </div>
    </nav>
}

export function Textbox({lang, location, children}) {
    return <div className="bg-white flex m-10 p-14 shadowed w-full">
        {children}
    </div>
}

export function Sidebar() {
    return <div className="flex-col items-center bg-transparent h-full pr-5 pt-5">
        <img src={github} alt="github" className="pt-2 pb-2"/>
        <img src={se} alt="stack exchange" className="pt-2 pb-2"/>
        <img src={linkedin} alt="linkedin" className="pt-2 pb-2"/>
        <img src={scholar} alt="google scholar" className="pt-2 pb-2"/>
        <img src={email} alt="email" className="pt-2 pb-2"/>
    </div>
}





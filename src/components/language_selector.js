import React from "react"
import { Link } from "gatsby"

function LanguageSelector({lang, location, className }) {
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

export default LanguageSelector
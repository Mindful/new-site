import * as React from "react"
import {Link} from "gatsby";

const NotFoundPage = () => {
  return (
    <main className>
        <div className="flex flex-col h-screen justify-center">
            <div className="mx-auto">
                <h3>Whoops! Can't find the page you were looking for.</h3>
            </div>
            <div className="mx-auto">
                <h3 className={"underline text-green"}><Link to={'/'}>Return to the index?</Link></h3>
            </div>
        </div>
    </main>
  )
}

export default NotFoundPage

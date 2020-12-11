import * as React from "react";
import Form from "../components/form";


// markup
const IndexPage = () => {
    return (
        <main>
            <header>Roofing Experts</header>
            <p>Life happens unexpectedly, Allow us to give you a no cost inspection to keep a roof over your head </p>
            <section className={'forms'}>
                <Form/>
            </section>
        </main>
    )
}

export default IndexPage

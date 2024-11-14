import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <title>{title} </title>
            <meta charSet="utf-8" />
            <meta name="rating" content="general" />
            <meta name="author" content="www" />
            <meta name="expires" content="never" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
           
           
            <meta name="distribution" content="global" />
        </Head>
    );
};



export default Meta;

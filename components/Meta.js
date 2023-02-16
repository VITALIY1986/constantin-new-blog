import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <title>Maggy - {title}</title>
            <meta charSet="utf-8" />
            <meta name="rating" content="general" />
            <meta name="author" content="www.Afracode.com" />
            <meta name="expires" content="never" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="language" content="english" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta name="distribution" content="global" />
        </Head>
    );
};

Meta.defaultProps = {
    title: "Magazine WordPress Theme",
    keywords: "demo, wordpress, theme, themeforest, envato, magazine, blog",
    description: "Maggy - Magazine Style WordPress Theme by afracode",
};

export default Meta;

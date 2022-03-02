import { FC } from "react";
import Head from "next/head";
import { useColorModeValue } from "@chakra-ui/react";
import theme from "@theme";

type Props = {
    customTitle?: string,
    home?: true
};

const title = "Translate";
const description = "translate";

const siteDomain = process.env["NEXT_PUBLIC_SITE_DOMAIN"];
const url = siteDomain && (siteDomain.includes("localhost") ? "http://" : "https://") + siteDomain;

const CustomHead: FC<Props> = ({ customTitle, home }) => {
    const fullTitle = customTitle
        ? `${customTitle} | ${title}`
        : title;

    const themeColor = useColorModeValue(theme.colors.lingva["100"], theme.colors.lingva["900"]);

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="robots" content={home ? "index,follow" : "noindex,nofollow"} />
            {home && <link rel="canonical" href={url} />}

            <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/favicon.ico" />
       <meta name="theme-color" content={themeColor} />

        
                   </Head>
    );
};

export default CustomHead;

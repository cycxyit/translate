import { FC } from "react";
import { Stack, Text, Link, Code } from "@chakra-ui/react";

type Props = {
    [key: string]: any
};

const vercelSponsor = process.env["NEXT_PUBLIC_VERCEL_SPONSOR"] === "true";

const Footer: FC<Props> = (props) => (
    <Stack
        as="footer"
        w="full"
        p={3}
        fontSize={["sm", null, "md"]}
        direction="column"
        justify="center"
        align="center"
        spacing={[1, null, 2]}
        {...props}
    >

        <Link href="https://github.com/xuwillie/trans/blob/main/LICENSE" isExternal={true} mt={1}>
            <Text as="span">&#169; {new Date().getFullYear()} Wll Translate</Text>
        </Link> 
<Link href="https://collection.wll.moe" isExternal={true} mt={1}>
            <Text as="span">Recommend Software</Text>
        </Link>
        <Link href="https://www.gnu.org/licenses/agpl-3.0.html" isExternal={true} mt={1}>
            <Text as="span">Licensed under AGPLv3</Text>
        </Link>
        <Link href="blog.cycxtit.top" isExternal={true} mt={1}>
            <Text as="span">程源の小站</Text>
        </Link>
    </Stack>
);

export default Footer;

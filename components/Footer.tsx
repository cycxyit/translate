import { FC } from "react";
import { Stack, Text, Link } from "@chakra-ui/react";

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
        direction={["column", null, "row"]}
        justify="center"
        align="center"
        spacing={[1, null, 2]}
        {...props}
    >

        <Link href="https://github.com/xuwillie/trans/blob/main/LICENSE" isExternal={true} my={1}>
            <Text as="span">&#169; {new Date().getFullYear()} Wll Translate</Text>
        </Link>
  <Link href="https://github.com/xuwillie/trans/" isExternal={true} mt={1}>
            <Text as="span">View Source</Text>
        </Link>
        <Text as="span" display={["none", null, "unset"]}>·</Text>
<Link href="https://collection.wll.moe" isExternal={true} mt={1}>
            <Text as="span">More Great OpenSource Software</Text>
        </Link>
        <Link href="https://www.gnu.org/licenses/agpl-3.0.html" isExternal={true} mt={1}>
            <Text as="span">Licensed under AGPLv3</Text>
        </Link>
     
    </Stack>
);

export default Footer;

import { FC } from "react";
import NextLink from "next/link";
import { Text, Flex, HStack, IconButton, Link, useColorModeValue } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { ColorModeToggler } from ".";

type Props = {
    [key: string]: any
};

const Header: FC<Props> = (props) => (
    <>
    

        <Flex
            as="header"
            py={3}
            justify="space-around"
            align="center"
            w="full"
            {...props}
        >
            <NextLink href="/" passHref={true}>
                <Link display="flex">
                    <Text
                        fontSize="xl"
                    >
This is a translator
</Text>

                </Link>
            </NextLink>
            <HStack spacing={1}>
                <ColorModeToggler
                    variant={useColorModeValue("outline", "solid")}
                />
               
            </HStack>
        </Flex>
    </>
);

export default Header;


import { FC } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { Flex, HStack, IconButton, Link, useColorModeValue } from "@chakra-ui/react";
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
            px={1}
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
                    />
                </Link>
            </NextLink>
            <HStack spacing={3}>
                <ColorModeToggler
                    variant={useColorModeValue("outline", "solid")}
                />
                <IconButton
                    as={Link}
                    href="https://github.com/TheDavidDelta/lingva-translate"
                    isExternal={true}
                    aria-label="GitHub"
                    icon={<FaGithub />}
                    colorScheme="gray"
                    borderRadius="full"
                    variant={useColorModeValue("outline", "solid")}
                />
            </HStack>
        </Flex>
    </>
);

export default Header;

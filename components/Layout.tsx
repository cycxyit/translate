import { FC } from "react";
import { Flex, VStack, Button, Link, useColorModeValue } from "@chakra-ui/react";
import { Header, Footer } from ".";

type Props = {
    [key: string]: any
};

const Layout: FC<Props> = ({ children, ...props }) => (
    <>
        <Button
            as={Link}
            href="#main"
            userSelect="none"
            position="absolute"
            top="-100px"
            left="0"
            _focus={{
                top: "0"
            }}
        >
            Skip to content
        </Button>

        <VStack minH="100vh" spacing={8}>
            <Header
                colorScheme="gray"
css={{ backdropFilter: "blur(10px)" }}
            />

            <Flex
                as="main"
                id="main"
                flexGrow={1}
                w="full"
                {...props}
            >
                {children}
            </Flex>

            <Footer
                colorScheme="gray"
            />
        </VStack>
    </>
);

export default Layout;

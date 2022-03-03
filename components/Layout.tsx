import { FC } from "react";
import { Flex, VStack, Button, Link, useColorModeValue, Box, Container } from "@chakra-ui/react";
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
<Container maxW="container.lg">

        <VStack spacing={8}>
            <Header
                
            />
<Container maxW="container.lg">
<Box>
            <Flex
                as="main"
                id="main"
                flexGrow={1}
                w="full"
                my={2}
                {...props}
            >
                {children}
            </Flex>
</Box>
</Container>
            <Footer
   my={4}
            />
        </VStack>
</Container>
    </>
);

export default Layout;

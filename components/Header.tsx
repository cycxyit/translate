import { FC } from "react";
import NextLink from "next/link";
import { Text, Flex, HStack, IconButton, Link, useColorModeValue } from "@chakra-ui/react";
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
Translate
</Text>

                </Link>
            </NextLink>
            <HStack spacing={1}>
                <ColorModeToggler
                    variant={useColorModeValue("outline", "solid")}
                />
               
            </HStack>
        </Flex>
<Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff80", "20202380")}
      zIndex={1}
      css={{ backdropFilter: "blur(10px)" }}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="xl" fontFamily="inherit" letterSpacing={"tighter"}>
Translate
          </Heading>
        </Flex>
        
        <Box flex={1} align="right">
          <HStack spacing={1}>
                <ColorModeToggler
                    variant={useColorModeValue("outline", "solid")}
                />
               
            </HStack>
          
        </Box>
      </Container>
    </Box>
    </>
);

export default Header;

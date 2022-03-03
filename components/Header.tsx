import { FC } from "react";
import NextLink from "next/link";
import { Text, Flex, HStack, IconButton, Link, useColorModeValue, Box, Heading, Container } from "@chakra-ui/react";
import Image from "next/image";
import { ColorModeToggler } from ".";

type Props = {
    [key: string]: any
};

const Header: FC<Props> = (props) => (
    <>
   
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
          <Heading as="h1" size="xl" fontWeight="300" fontFamily="inherit" letterSpacing={"tighter"}>
Translate
          </Heading>
        </Flex>
        
        <Box align="right">
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

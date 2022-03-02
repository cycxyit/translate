import { FC } from "react";
import { IconButton, useColorMode,useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useHotkeys } from "react-hotkeys-hook";

type Props = {
    [key: string]: any
};

const ColorModeToggler: FC<Props> = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();
    useHotkeys("ctrl+shift+l, command+shift+l", toggleColorMode, [toggleColorMode]);
    return (
        <IconButton
         
         aria-label="Toggle Theme"
          borderRadius="999px"
          colorScheme={useColorModeValue("gray", "telegram")}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
onClick={toggleColorMode}
            {...props}
        />
    );
};

export default ColorModeToggler;

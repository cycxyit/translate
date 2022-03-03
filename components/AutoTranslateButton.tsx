import { useState, useEffect, FC } from "react";
import { Icon,ButtonGroup,Button } from "@chakra-ui/react";
import { FaBolt } from "react-icons/fa";
import { localGetItem, localSetItem } from "@utils/storage";

type Props = {
    onAuto: () => void,
    [key: string]: any
};

const initLocalStorage = () => {
    const initial = localGetItem("isauto");
    return initial ? initial === "true" : false;
};

const AutoTranslateButton: FC<Props> = ({ onAuto, ...props }) => {
    const [isAuto, setIsAuto] = useState(initLocalStorage);

    useEffect(() => {
        localSetItem("isauto", isAuto.toString());
    }, [isAuto]);

    useEffect(() => {
        isAuto && onAuto();
    }, [isAuto, onAuto]);

    return (

  <Button mr='-px' colorScheme="gray" variant={isAuto ? "solid" : "outline"}
            onClick={() => setIsAuto(current => !current)}
            {...props} >  <Icon as={ FaBolt } mr={1}/>

 Auto</Button>

  
    );
};

export default AutoTranslateButton;

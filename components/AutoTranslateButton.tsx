import { useState, useEffect, FC } from "react";
import { Icon,ButtonGroup,Button } from "@chakra-ui/react";
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

  <Button colorScheme="gray" variant={isAuto ? "solid" : "outline"}
            onClick={() => setIsAuto(current => !current)}
            {...props} >

 Auto</Button>

  
    );
};

export default AutoTranslateButton;

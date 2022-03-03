import { useState, useEffect, FC } from "react";
import { IconButton,ButtonGroup,Button } from "@chakra-ui/react";
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
<ButtonGroup isAttached variant='outline'>
  <Button mr='-px' colorScheme="gray">Auto</Button>
  <IconButton aria-label='Switch auto' colorScheme="gray" icon={<FaBolt />} variant={isAuto ? "solid" : "outline"}
            onClick={() => setIsAuto(current => !current)}
            {...props} />
</ButtonGroup>

  
    );
};

export default AutoTranslateButton;

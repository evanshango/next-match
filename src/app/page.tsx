import {Button} from "@nextui-org/react";
import {FaRegSmile} from "react-icons/fa";

export default function Home() {
    return (
        <div>
            <Button
                color="primary"
                variant="bordered"
                startContent={<FaRegSmile size={20}/>}
            >
                Click Me
            </Button>
        </div>
    );
}

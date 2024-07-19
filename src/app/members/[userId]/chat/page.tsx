import React from 'react';
import {CardBody, CardHeader, Divider} from "@nextui-org/react";

const ChatPage = () => {
    return (
        <>
            <CardHeader className='text-2xl font-semibold text-secondary'>
                Chats
            </CardHeader>
            <Divider/>
            <CardBody>
                Chats Go Here
            </CardBody>
        </>
    );
};

export default ChatPage;
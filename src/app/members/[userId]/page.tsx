import React from 'react';
import {notFound} from "next/navigation";
import {getMemberByUserId} from "@/app/actions/memberActions";
import {CardBody, CardHeader, Divider} from "@nextui-org/react";

const MemberDetail = async ({params}: { params: { userId: string } }) => {
    const member = await getMemberByUserId(params.userId);

    if (!member) return notFound()
    return (
        <>
            <CardHeader className='text-2xl font-semibold text-secondary'>
                Profile
            </CardHeader>
            <Divider />
            <CardBody>
                {member.description}
            </CardBody>
        </>
    );
};

export default MemberDetail;
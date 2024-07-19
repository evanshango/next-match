'use client'

import React from 'react';
import {Button, Card, CardBody, CardFooter, Divider, Image} from "@nextui-org/react";
import {calculateAge} from "@/lib/util";
import Link from "next/link";
import {usePathname} from "next/navigation";
import { Member } from '@prisma/client';

type Props = {
    member: Member
}

const MemberSidebar = ({member}: Props) => {
    const pathname = usePathname()
    const basePath = `/members/${member.userId}`
    const navLinks = [
        {name: 'Profile', href: `${basePath}`},
        {name: 'Photos', href: `${basePath}/photos`},
        {name: 'Chat', href: `${basePath}/chat`},
    ]

    return (
        <Card className="w-full mt-10 items-center h-[80vh]">
            <Image
                height={200}
                width={200}
                src={member?.image || '/images/user.png'}
                alt={member.name}
                className='rounded-full mt-4 object-cover aspect-square'
            />
            <CardBody>
                <div className="flex flex-col items-center">
                    <div className="text-2xl">
                        {member.name}, {calculateAge(member.dateOfBirth)}
                    </div>
                    <div className="text-sm text-neutral-500">
                        {member.city}, {member.country}
                    </div>
                </div>
                <Divider className="my-3"/>
                <nav className="flex flex-col p-4 ml-4 text-2xl gap-4">
                    {navLinks.map(link => (
                        <Link
                            href={link.href}
                            key={link.name}
                            className={`block rounded ${pathname === link.href
                                ? 'text-secondary' : 'hover:text-secondary/50'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </CardBody>
            <CardFooter>
                <Button as={Link}
                        href='/members'
                        fullWidth
                        color='secondary'
                        variant='bordered'
                >
                    Go back
                </Button>
            </CardFooter>
        </Card>
    );
};

export default MemberSidebar;
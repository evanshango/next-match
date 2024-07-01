'use client'

import React from 'react';
import {Session} from "next-auth";
import {Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger} from "@nextui-org/react";
import Link from "next/link";
import {signOutUser} from "@/app/actions/authActions";

type Props = {
    user: Session['user']
}

const UserMenu = ({user}: Props) => {
    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar isBordered as='button'
                        className='transition-transform'
                        color='secondary' name={user?.name || 'user avatar'}
                        size='sm'
                        src={user?.image || '/images/user.png'}
                />
            </DropdownTrigger>
            <DropdownMenu variant='flat' aria-label='User actions meni'>
                <DropdownSection showDivider>
                    <DropdownItem isReadOnly as='span' className='h-14 flex flex-row' aria-label='user name'>
                        Signed in as {user?.name}
                    </DropdownItem>
                </DropdownSection>
                <DropdownItem as={Link} href='/members/edit'>
                    Edit profile
                </DropdownItem>
                <DropdownItem color='danger' onClick={async () => signOutUser()}>
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default UserMenu;
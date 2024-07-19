'use server'

import {prisma} from "@/lib/prisma";
import {auth} from "@/auth";
import {Photo} from "@prisma/client";

export const getMembers = async () => {
    const session = await auth()

    if (!session?.user) return null;

    try {
        return prisma.member.findMany({
            where: {
                NOT: {
                    userId: session.user.id
                }
            }
        })
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const getMemberByUserId = async (userId: string) => {
    try {
        return prisma.member.findUnique({
            where: {
                userId
            }
        })
    } catch (error) {
        console.error(error)
    }
}

export const getMemberPhotosByUserId = async (userId: string) => {
    try {
        const member = await prisma.member.findUnique({
            where: {userId},
            select: {photos: true}
        })

        if (!member) return null;

        return member.photos.map(p => p) as Photo[]
    } catch (error) {
        console.error(error)
    }
}
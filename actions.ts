"use server"

import { cookies } from "next/headers"
import { getIronSession, type IronSession } from "iron-session"
import { sessionOptions } from "./lib"
import { redirect } from "next/navigation"

type IronSessionType = IronSession<Record<string, unknown>>

type AppSession = IronSessionType & {
    username?: string
    jwt?: string
}

export const getSession = async (): Promise<AppSession> => {

    const cookieStore = await cookies()
    const session = await getIronSession(cookieStore, sessionOptions)

    return session as AppSession
}

export const login = async (_status: unknown, formData: FormData) => {

    const username = formData.get("username") as string | null
    const password = formData.get("password") as string | null

    const result = await fetch(`${process.env.API_URL}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    })

    const data = await result.json()
    const session = await getSession()

    if (result.ok) {
        session.username = data.username
        session.jwt = data.token
        await session.save()
        redirect("/private")
    } else {
        await session.destroy()
        return { error: data.detail }
    }
}

export const logout = async () => {
    const session = await getSession()
    await session.destroy()
    redirect("/auth")
}

export const socialAuth = async (url: string) => {
    console.log("url", url)
    const response = await fetch(
        url,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
    )

    const data = await response.json()

    return data.auth_url
}

// export const regsiterFcmToken = async (token: string) => {} This done

export const togglePromotionPush = async () => {
    const session = await getSession()

    const result = await fetch(`${process.env.API_URL}/toggle-promotion`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session.jwt}`
        }
    })

    const data = await result.json()

    if(data.updated) {
        return true
    }
    else {
        return false
    }
}

export const toggleActivityPush = async () => {
    const session = await getSession()

    const result = await fetch(`${process.env.API_URL}/toggle-push`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session.jwt}`
        }
    })

    const data = await result.json()

    if(data.updated) {
        return true
    }
    else {
        return false
    }
}

export const toggleDirectEmail = async () => {
    const session = await getSession()

    const result = await fetch(`${process.env.API_URL}/toggle-email`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session.jwt}`
        }
    })

    const data = await result.json()

    if(data.updated) {
        return true
    }
    else {
        return false
    }
}

export const getUserPreferences = async () => {
    const session = await getSession()

    const result = await fetch(`${process.env.API_URL}/preference`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session.jwt}`
        }
    })

    const data = await result.json()

    if(result.ok) {
        return {
            "receive_email": data.receive_email,
            "receive_promotion": data.receive_promotion,
            "receive_activity": data.receive_activity
        }
    }
}

//export const getUserNotifications = async () => {}

//export const sendMessage = async (userId: number) => {}

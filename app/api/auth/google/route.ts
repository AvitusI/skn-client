import { NextRequest, NextResponse } from "next/server";

import { getSession } from "@/actions";
import { client } from "@/lib/redis";

export async function GET(request: NextRequest) {
    const url = new URL(request.url)

    const code = url.searchParams.get("code")

    if (!code) {
        return new NextResponse(
            'Missing important parameters',
            { status: 400 }
        )
    }

    const session = await getSession();

    // Redis logic
    const keys = await client.keys(code);
    const data = await client.hGetAll(keys[0])

    
    session.jwt = data.jwt
    
    session.username = data.username

    await session.save()

    const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/products`;

    return NextResponse.redirect(redirectUrl)

}
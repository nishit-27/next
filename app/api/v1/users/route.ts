import { NextResponse } from "next/server";


export function GET() {
    return NextResponse.json({
        user: "demo@gmail.com",
        password: "233"
    })
}
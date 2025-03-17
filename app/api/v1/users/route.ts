import { NextResponse } from "next/server";


export function GET() {
    return NextResponse.json({
        user: "demo@gmail.com",
        password: "233"
    })
}

export function PUT() {
    return NextResponse.json({
        userName: "demo",
        email: "demo@gmail.com",
        password: "223"
    })
}
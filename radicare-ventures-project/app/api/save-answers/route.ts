import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const data = await req.json();

        if (!data || !data.questionId || !data.answer) {
            return NextResponse.json({ error: "Invalid data" }, { status: 400 });
        }

        // Save to DB
        const savedAnswer = await prisma.answer.create({
            data: {
                questionId: data.questionId,
                answer: data.answer,
            },
        });

        return NextResponse.json({ message: "Answer saved!", savedAnswer }, { status: 200 });

    } catch (error) {
        console.error("Error saving answer:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}

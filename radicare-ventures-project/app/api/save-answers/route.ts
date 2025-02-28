// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export async function POST(req: Request) {
//     try {
//         const data = await req.json();
//         const answers = data.answers; // Get all answers

//         if (!answers || typeof answers !== "object") {
//             return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
//         }

//         // Save each answer to the database
//         const savedAnswers = await Promise.all(
//             Object.entries(answers).map(async ([questionId, answer]) => {
//                 return prisma.answer.create({
//                     data: {
//                         questionId: Number(questionId),
//                         answer: Array.isArray(answer) ? answer.join(", ") : answer, // Handle checkboxes
//                     },
//                 });
//             })
//         );

//         return NextResponse.json({ message: "Answers saved!", savedAnswers }, { status: 200 });

//     } catch (error) {
//         console.error("Error saving answers:", error);
//         return NextResponse.json({ error: "Server error" }, { status: 500 });
//     }
// }

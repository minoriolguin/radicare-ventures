"use client";
import React, { useState, useEffect, useRef } from "react";

const questions = [
    { id: 1, question: "Are you currently a client?" },
    { id: 2, question: "Which location are you requesting service for?" },
    { id: 3, question: "Please list a contact number and name that will be at the location during the service:" },
    { id: 4, question: "Select which service(s) you are requesting:" },
];

export default function QuestionBox() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const formRef = useRef(null);

    const progressPercentage = ((currentStep + 1) / questions.length) * 100;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        setAnswers({ ...answers, [id]: e.target.value });
    };

    return (
        <div className="min-h-screen p-12 border shadow-lg rounded-md">
            {/* Progress Bar */}
            <div className="relative w-full h-2 bg-gray-300 rounded">
                <div
                    className="h-2 bg-darkGreen rounded"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>

            {/* Scrollable Form */}
            <div
                ref={formRef}
                className="mt-6 h-auto overflow-y-scroll space-y-6"
                style={{ scrollBehavior: "smooth" }}
            >
                {questions.map((q, index) => (
                    <div
                        key={q.id}
                        className={`question p-4 rounded ${index === currentStep
                                ? "bg-white text-black"
                                : "bg-gray-200 text-gray-500"
                            }`}
                    >
                        <h2 className="text-lg">{q.question}</h2>
                        {index === currentStep && (
                            <input
                                type="text"
                                value={answers[q.id] || ""}
                                onChange={(e) => handleInputChange(e, q.id)}
                                className="w-full mt-2 p-2 border rounded"
                                placeholder="Type your answer here"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

"use client";
import React, { useState } from "react";
import Question from "./question";

const questions = [
    { id: 1, question: "Are you currently a client?", type: "multiple_choice", answer_options: ["Yes", "No"] },
    { id: 2, question: "Which location are you requesting service for?", type: "text" },
    { id: 3, question: "Please enter a contact name for a person who will be on-site during the service:", type: "text" },
    { id: 4, question: "Please enter a contact number for someone who will be on-site during the service:", type: "text" },
    { id: 5, question: "Select which service(s) you are requesting:", type: "checkbox", answer_options: ["Cleaning", "Maintenance", "Repair"] },
    { id: 6, question: "Which BIA area are you located in?", type: "checkbox", answer_options: ["Chinatown BIA", "Beltline BIA", "East village BIA"] }
];

export default function ServiceRequestForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
    const [submitted, setSubmitted] = useState(false);

    const progressPercentage = ((currentStep + 1) / questions.length) * 100;

    const handleInputChange = (id: number, value: string | string[]) => {
        setAnswers({ ...answers, [id]: value });

        setTimeout(() => {
            setCurrentStep((prev) => (prev < questions.length - 1 ? prev + 1 : prev));
        }, 500);
    };

    // API 
    // const saveAnswersToDB = async () => {
    //     try {
    //         const response = await fetch("/api/save-answers", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ answers }),
    //         });

    //         const result = await response.json();

    //         if (response.ok) {
    //             console.log("All answers saved:", result);
    //             setSubmitted(true); 
    //         } else {
    //             console.error("Failed to save answers:", result.message);
    //         }
    //     } catch (error) {
    //         console.error("Error saving answers:", error);
    //     }
    // };

    return (
        <div className="w-full min-h-screen p-12 border shadow-lg rounded-md">
            {/* Progress Bar */}
            <div className="relative w-full h-2 bg-gray-300 rounded">
                <div className="h-2 bg-darkGreen rounded transition-all duration-200" style={{ width: `${progressPercentage}%` }}></div>
            </div>

            {/* Questions List */}
            <div className="mt-6 space-y-6">
                {questions.map((q, index) => (
                    <Question
                        key={q.id}
                        id={q.id}
                        question={q.question}
                        type={q.type}
                        answerOptions={q.answer_options}
                        answer={answers[q.id] || (q.type === "checkbox" ? [] : "")}
                        isActive={index === currentStep}
                        onChange={handleInputChange}
                    />
                ))}
            </div>

            {/* Submit Button */}
            {currentStep === questions.length - 1 && (
                <button
                    className="mt-6 px-6 py-3 bg-darkGreen text-white rounded shadow"
                    onClick={() => setSubmitted(true)}
                >
                    Submit
                </button>
            )}

            {submitted && <p className="text-green-500 mt-4"> Your response has been saved!</p>}
        </div>
    );
}

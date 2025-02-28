import React, { useEffect, useState } from "react";
import InputTypes from "./InputTypes";

type QuestionProps = {
    id: number;
    question: string;
    type: string;
    answerOptions?: string[];
    answer: string | string[];
    isActive: boolean;
    onChange: (id: number, value: string | string[]) => void;
};

const Question: React.FC<QuestionProps> = ({ id, question, type, answerOptions, answer, isActive, onChange }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isActive) {
            setIsVisible(true);
        }
    }, [isActive]);

    return (
        <div
            className={`p-4 rounded transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"} 
                ${isActive ? "bg-white text-black shadow-lg border" : "bg-gray-200 text-gray-500"}`}
        >
            <h2 className="text-lg">{question}</h2>
            <InputTypes type={type} answerOptions={answerOptions} answer={answer} onChange={(value) => onChange(id, value)} />
        </div>
    );
};

export default Question;

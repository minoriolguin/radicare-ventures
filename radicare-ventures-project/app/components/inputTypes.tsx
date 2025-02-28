import React from "react";

type InputProps = {
    type: string;
    answerOptions?: string[];
    answer: string | string[];
    onChange: (value: string | string[]) => void;
};

const InputTypes: React.FC<InputProps> = ({ type, answerOptions, answer, onChange }) => {
    switch (type) {
        case "text":
            return (
                <input
                    type="text"
                    value={answer as string}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full mt-2 p-2 border rounded"
                    placeholder="Type your answer here"
                    autoFocus
                />
            );

        case "multiple_choice":
            return (
                <div className="mt-2 space-y-2">
                    {answerOptions?.map((option) => (
                        <label key={option} className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="multiple_choice"
                                value={option}
                                checked={answer === option}
                                onChange={() => onChange(option)}
                                className="form-radio text-darkGreen"
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            );

        case "checkbox":
            return (
                <div className="mt-2 space-y-2">
                    {answerOptions?.map((option) => (
                        <label key={option} className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="checkbox"
                                value={option}
                                checked={(answer as string[]).includes(option)}
                                onChange={() => {
                                    const newAnswers = (answer as string[]).includes(option)
                                        ? (answer as string[]).filter((ans) => ans !== option)
                                        : [...(answer as string[]), option];
                                    onChange(newAnswers);
                                }}
                                className="form-checkbox text-darkGreen"
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            );

        default:
            return null;
    }
};

export default InputTypes;

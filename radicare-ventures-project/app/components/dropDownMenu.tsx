import React, { useState } from "react";

interface Option {
    value: string;
    label: string;
}

const DropdownMenu: React.FC = () => {
    // Dropdown options
    const options: Option[] = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ];

    // State to track the selected option
    const [selectedOption, setSelectedOption] = useState<string>("");

    // Handler for when the dropdown value changes
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
        console.log("Selected option:", event.target.value);
    };

    return (
        <div>
            <label htmlFor="dropdown">Choose an option:</label>
            <select
                id="dropdown"
                value={selectedOption}
                onChange={handleChange}
                style={{ marginLeft: "10px", padding: "5px" }}
            >
                <option value="" disabled>
                    Select an option
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {selectedOption && (
                <p style={{ marginTop: "10px" }}>
                    You selected: <strong>{selectedOption}</strong>
                </p>    
            )}
        </div>
    );
};

export default DropdownMenu;

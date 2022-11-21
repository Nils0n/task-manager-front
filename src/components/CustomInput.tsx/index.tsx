import React from "react";
import "./styles.scss";

type CustomInputParams = {
    label?: string;
    value: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    onEnterPress: () => Promise<void>;
}

export default function CustomInput({ label, value, onChange, onEnterPress }: CustomInputParams) {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onEnterPress();
        }
    }

    return (
        <div className="custom-input-container">
            <input
                type="text"
                value={value}
                className="custom-input"
                onChange={e => onChange(e)}
                onKeyDown={e => handleKeyDown(e)}
            />
            {label && (
                <label
                    className={
                        `${value.trim.length > 0 ? "shrink" : ""} custom-input-label`
                    }
                >
                    {label}
                </label>
            )}
        </div>
    )
}
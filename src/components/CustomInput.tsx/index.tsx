import "./styles.scss";

type CustomInputParams = {
    label?: string;
    value: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function CustomInput({ label, value, onChange }: CustomInputParams) {
    return (
        <div className="custom-input-container">
            <input
                type="text"
                className="custom-input"
                onChange={e => onChange(e)}
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
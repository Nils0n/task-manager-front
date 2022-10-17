import "./styles.scss";

type CustomInputParams = {
    label?: string;
    value?: string;
}

export function CustomInput({ label, value }: CustomInputParams) {
    return (
        <div className="custom-input-container">
            <input type="text" className="custom-input" />
            {label && (
                <label
                    className={
                        `${value?.trim() !== '' ? "shrink" : ""} custom-input-label`
                    }
                >

                </label>
            )}
        </div>
    )
}
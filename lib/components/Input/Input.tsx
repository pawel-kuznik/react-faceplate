import { ChangeEvent, MutableRefObject } from "react";

export interface InputProps {
    
    /**
     *  The name of the input.
     */
    name?: string;

    /**
     *  The HTML id of a list of suggestions for text/number fields.
     */
    list?: string;

    /**
     *  Type of the input.
     */
    type?: "number" | "text" | "date" | "datetime-local" | "email" | "month" | "password" | 
    "search" | "tel" | "time" | "url" | "week" | "datetime" ;

    /**
     *  The minimal value. It makes only sense for "number" inputs.
     */
    min?: number | string;

    /**
     *  The maximal value. It makes only sense for "number" inputs.
     */
    max?: number | string;

    /**
     *  Should the input be readonly?
     */
    readonly?: boolean;

    /**
     *  The default value of the input.
     */
    defaultValue?: string | number;

    /**
     *  The placeholder text of the input. The placeholder text is displayed when
     *  the input is empty.
     */
    placeholder?: string;

    /** 
     *  A mutable ref to the input value. The reference is updated when the input changes
     *  and when the underlying element is blurred.
     */
    valueRef?: MutableRefObject<string>;

    /**
     *  A callback to call when user changed the value. 
     */
    onChange?: (value: string) => void;

    /**
     *  A callback to call when user leaves the input.
     */
    onBlur?: (value: string) => void;
};

/**
 *  This is a simplified input component. It works like a regular input element,
 *  but exposes less of the API of the regular input. This is done so that the API
 *  can be simplified. For example, the onChange() provides changed value instead 
 *  of instance of change event. In most cases this is perfectly fine.
 */
export function Input({ name, list, readonly, type = "text", min, max, defaultValue, placeholder, valueRef, onChange, onBlur } : InputProps) {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

        const value = event.target.value;

        if (valueRef) valueRef.current = value;
        onChange?.(value);
    };

    const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {

        const value = event.target.value;

        if (valueRef) valueRef.current = value;
        onBlur?.(value);
    };

    return (
        <input
            className="faceplate-input"
            readOnly={readonly}
            type={type}
            name={name}
            min={min}
            max={max}
            list={list}
            defaultValue={defaultValue || valueRef?.current}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
        />
    );
}

import { ChangeEvent, MutableRefObject } from "react";

export interface InputProps {
    
    /**
     *  The name of the input.
     */
    name: string;

    /**
     *  The HTML id of a list of suggestions for text/number fields.
     */
    list?: string;

    /**
     *  Type of the input.
     */
    type?: "number" | "text" ;

    /**
     *  The minimal value. It makes only sense for "number" inputs.
     */
    min?: number | string;

    /**
     *  The maximal value. It makes only sense for "number" inputs.
     */
    max?: number | string;

    /**
     *  The default value of the input.
     */
    defaultValue?: string | number;

    /** 
     *  A mutable ref to the input value.
     */
    valueRef?: MutableRefObject<string>;

    /**
     *  A callback to call when user changed the value. 
     */
    onChange?: (value: string) => void;
};

/**
 *  This is a simplified input component. It works like a regular input element,
 *  but exposes less of the API of the regular input. This is done so that the API
 *  can be simplified. For example, the onChange() provides changed value instead 
 *  of instance of change event. In most cases this is perfectly fine.
 */
export function Input({ name, list, type, min, max, defaultValue, valueRef, onChange } : InputProps) {

    const handleChange = (event: ChangeEvent) => {

        const value = (event.target as HTMLInputElement).value;

        if (valueRef) valueRef.current = value;
        onChange?.(value);
    }

    return (
        <input
            className="faceplate-input"
            type={type}
            name={name}
            min={min}
            max={max}
            list={list}
            defaultValue={defaultValue || valueRef?.current}
            onChange={handleChange}
        />
    );
}

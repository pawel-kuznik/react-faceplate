import { ChangeEvent, MutableRefObject } from "react";

export interface TextAreaProps {
    
    /**
     *  The name of the input.
     */
    name?: string;

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

    /**
     *  Number of rows that the text area shows to the user.
     */
    rows?: number;
};


/**
 *  This is a simplified textarea component. It works largely like the standard
 *  textarea element, but exposes less of HTML API in favour of more streamlined
 *  and easier API.
 */
export function TextArea({ name, defaultValue, valueRef, onChange, rows }: TextAreaProps) {

    const handleChange = (event: ChangeEvent) => {

        const value = (event.target as HTMLTextAreaElement).value;

        if (valueRef) valueRef.current = value;
        onChange?.(value);
    }

    return (
        <textarea
            className="faceplate-textarea"
            name={name}
            rows={rows}
            onChange={handleChange}
        >
            {defaultValue || valueRef?.current}
        </textarea>
    );
};
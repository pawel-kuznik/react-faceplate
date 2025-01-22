import { FormEvent, ReactNode } from "react";
import { extractFormData } from "../../utils/extractFormData";

export interface InlineFormProps {
    
    /**
     *  Handle submit on the form. The data object is a key-value store
     *  of all inputs inside the form.
     */
    onSubmit?: (data: object) => void;

    /**
     *  Handle change on the form. The data object is a key-value store
     *  of all inputs inside the form.
     */
    onChange?: (data: object) => void;

    /**
     *  The children inside the form.
     */
    children?: ReactNode;
}

/**
 *  This is a component that can be used to display a form in a single line.
 *  The main use case for it is to server as search bar forms, inline create
 *  forms, etc.
 */
export function InlineForm({ onSubmit, onChange, children }: InlineFormProps) {

    const processFormEvent = (event: FormEvent) : object => {

        const form = (event.target as HTMLElement).closest("form")!;

        return extractFormData(form);
    };

    const handleChange = (event: FormEvent) => {

        if (!onChange) return;

        onChange(processFormEvent(event));
    };

    const handleSubmit = (event: FormEvent) => {

        if (!onSubmit) return;

        event.preventDefault();

        onSubmit(processFormEvent(event));
    };

    return (
        <form
            className="faceplate-inlineform"
            onSubmit={handleSubmit}
            onChange={handleChange}
        >
            {children}
        </form>
    );
};
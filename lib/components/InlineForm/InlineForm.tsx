import { FormEvent, ReactNode } from "react";
import { extractFormData } from "../../utils/extractFormData";

export interface InlineFormProps {
    
    /**
     *  Handle submit on the form. The data object is a key-value object
     *  of all inputs inside the form.
     */
    onSubmit?: (data: object) => void;

    /**
     *  Handle change on the form. The data object is a key-value object
     *  of all inputs inside the form.
     */
    onChange?: (data: object) => void;

    /**
     *  Handle when the form stops being active. This usually means when all
     *  inputs are inactive (blurred).
     */
    onInactive?: (data: object) => void;

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
export function InlineForm({ onSubmit, onChange, onInactive, children }: InlineFormProps) {

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

    const handleInactive = (event: FormEvent) => {

        if (!onInactive) return;

        onInactive(processFormEvent(event));
    };

    return (
        <form
            className="faceplate-inlineform"
            onSubmit={handleSubmit}
            onChange={handleChange}
            onBlur={handleInactive}
        >
            {children}
        </form>
    );
};
import { FormEvent, ReactNode } from "react";
import { extractFormData } from "../../utils/extractFormData";

export interface BasicFormProps {

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
};

/**
 *  This is a component that should be used when a simple form should be shown.
 *  The component offers an easy way to handle submit and changes in the form.
 */
export function BasicForm({ children, onSubmit, onChange }: BasicFormProps) {

    const processFormEvent = (event: FormEvent) : object => {

        const form = (event.target as HTMLElement).closest("form") as HTMLFormElement;

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
        <form onSubmit={handleSubmit} onChange={handleChange}>
            {children}
        </form>
    );
};
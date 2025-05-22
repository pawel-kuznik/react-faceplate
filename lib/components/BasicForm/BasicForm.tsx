import { FormEvent, ReactNode, useEffect, useRef } from "react";
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

    /**
     *  The initial data of the form. The data is used to pre-fill the form.
     */
    defaultValues?: { [key: string]: string | number };
};

/**
 *  This is a component that should be used when a simple form should be shown.
 *  The component offers an easy way to handle submit and changes in the form.
 */
export function BasicForm({ children, onSubmit, onChange, defaultValues }: BasicFormProps) {

    const formRef = useRef<HTMLFormElement>(null);

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

    useEffect(() => {
        if (defaultValues && formRef.current) {

            const form = formRef.current;

            for (let key in defaultValues) {
                const input = form.querySelector(`input[name="${key}"]`);
                if (input) {
                    (input as HTMLInputElement).value = defaultValues[key].toString();
                }

                const textarea = form.querySelector(`textarea[name="${key}"]`);
                if (textarea) {
                    (textarea as HTMLTextAreaElement).value = defaultValues[key].toString();
                }

                const select = form.querySelector(`select[name="${key}"]`);
                if (select) {
                    (select as HTMLSelectElement).value = defaultValues[key].toString();
                }
            }
        }
    }, [defaultValues]);
    

    return (
        <form ref={formRef} onSubmit={handleSubmit} onChange={handleChange}>
            {children}
        </form>
    );
};
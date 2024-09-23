import { ReactNode } from "react";

export interface FormFieldLineProps {
    children: ReactNode;
};

export function FormFieldLine({ children }: FormFieldLineProps) {
    return (
        <div className="faceplate-formfieldline">
            {children}
        </div>
    );
};
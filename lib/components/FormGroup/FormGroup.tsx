import { ReactNode } from "react";

export interface FormGroupProps {

    children?: ReactNode;
};

export function FormGroup({ children }: FormGroupProps) {
    return (
        <fieldset className="faceplate-formgroup">
            {children}
        </fieldset>
    );
};

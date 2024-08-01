import { ReactNode } from "react";

export interface FormFieldLayoutProps {
    layout?: "inline" | "column";
    label: string;
    description? : ReactNode | string;
    children?: ReactNode;
};

export function FormFieldLayout({ layout = "column", label, description, children }: FormFieldLayoutProps) {

    const css = [ 'faceplate-formfieldlayout' ];
    css.push(`faceplate-formfieldlayout-layout-${layout}`);

    return (
        <div className={css.join(' ')}>
            {label && (<label>{label}</label>)}
            {children}
            {!!description && (<div className="faceplate-formfieldlayout-description">{description}</div>)}
        </div>
    );
};
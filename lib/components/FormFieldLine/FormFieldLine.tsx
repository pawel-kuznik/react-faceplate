import { PropsWithChildren, ReactNode } from "react";
import { FormFieldLayout } from "../FormFieldLayout";

export interface FormFieldLineProps extends PropsWithChildren {
    /**
     *  An array CSS values as `px`, `rem`, `em`, `%`, or `auto` units.
     */
    widths?: string[];

    /**
     *  The label of the field.
     */
    label: string

    /**
     *  Description that should be shown after the input.
     */
    description?: ReactNode | string;
};

/**
 *  This is a component that can place input in one line. The widths of
 *  the fields can be controlled with the widths property.
 */
export function FormFieldLine({ label, widths, description, children }: FormFieldLineProps) {

    const styles : { gridTemplateColumns?: string } = { }

    if (widths) {
        styles.gridTemplateColumns = widths.join(" ")
    }

    return (
        <FormFieldLayout label={label} description={description}>
            <div className="faceplate-formfieldline" style={styles}>
                {children}
            </div>
        </FormFieldLayout>
    );
};
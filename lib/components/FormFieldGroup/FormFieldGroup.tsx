import { PropsWithChildren } from "react";

export interface FormFieldGroupProps extends PropsWithChildren {
    /**
     *  An array CSS values as `px`, `rem`, `em`, `%`, or `auto` units.
     */
    widths?: string[];
}


/**
 *  A component that groups a number of form fields in a line.
 */
export function FormFieldGroup({ children, widths }: FormFieldGroupProps) {

    const styles : { gridTemplateColumns?: string } = { }

    if (widths) {
        styles.gridTemplateColumns = widths.join(" ")
    }

    return (
        <div className="faceplate-formfieldgroup" style={styles}>
            {children}
        </div>
    );
}
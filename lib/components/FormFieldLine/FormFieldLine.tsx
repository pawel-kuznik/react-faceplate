import { PropsWithChildren } from "react";

export interface FormFieldLineProps extends PropsWithChildren {
    /**
     *  An array CSS values as `px` or `auto` units.
     */
    widths?: string[];
};

/**
 *  This is a component that can place input in one line. The widths of
 *  the fields can be controlled with the widths property.
 */
export function FormFieldLine({ children, widths }: FormFieldLineProps) {

    const styles : { gridTemplateColumns?: string } = { }

    if (widths) {
        styles.gridTemplateColumns = widths.join(" ")
    }

    console.log('styles', widths, styles);

    return (
        <div className="faceplate-formfieldline" style={styles}>
            {children}
        </div>
    );
};
import { MutableRefObject, ReactNode } from "react";
import { SelectInput } from "../SelectInput";
import { FormFieldLayout } from "../FormFieldLayout";
import { Input } from "../Input";
import { TextArea } from "../TextArea";

export interface FormFieldProps {

    /**
     *  The layout of the component:
     *  `inline` - means that the label and the input will be in one
     *  line and it will not render as a block.
     *  `column` - means that the label will be on top of the input 
     *  and it will render as a block.
     */
    layout?: "inline" | "column";

    /**
     *  The label that describes the field.
     */
    label: string;

    /**
     *  Description that should be shown after the input.
     */
    description?: ReactNode | string;

    /**
     *  The name of the input.
     */
    name?: string;

    /**
     *  The HTML id of a list of suggestions for text/number fields.
     */
    list?: string;

    /**
     *  Type of the input.
     */
    type?: "number" | "text" | "select" | "textarea" | "date" | "datetime-local" | "email" | "month" | "password" | 
    "search" | "tel" | "time" | "url" | "week" | "datetime";

    /**
     *  The options of the input. This is only applicable for "select" inputs.
     */
    options?: string[] | readonly string[];

    /**
     *  The labels for the options. This is only applicable for "select" inputs.
     *  The value can be either an array of labels or a function that can translate
     *  the options into labels.
     */
    labels?: string[] | ((option: string) => string);

    /**
     *  The titles/tooltips for the options. This is only applicable for "select"
     *  inputs. The value can be an array of labels or a function that can translate
     *  the options into titles.
     */
    titles?: string[] | ((option: string) => string);

    /**
     *  The minimal value. It makes only sense for "number" inputs.
     */
    min?: number | string;

    /**
     *  The maximal value. It makes only sense for "number" inputs.
     */
    max?: number | string;

    /**
     *  The number of rows that would be applied on the "textarea" inputs.
     */
    rows?: number;

    /**
     *  The default value of the input.
     */
    defaultValue?: string | number;

    /**
     *  The placeholder text of the input. The placeholder text is displayed when
     *  the input is empty.
     */
    placeholder?: string;

    /**
     *  A mutable reference to the value.
     */
    valueRef?: MutableRefObject<string>;

    /**
     *  A callback to call when user changed the value. 
     */
    onChange?: (value: string) => void;

    /**
     *  A callback to call when user leaves the input.
     */
    onBlur?: (value: string) => void;
};

export function FormField({ layout = "column", description, label, name, type, min, max, list, options, labels, titles, rows, defaultValue, placeholder, valueRef, onChange, onBlur }: FormFieldProps) {

    // the params that are safe to pass to an of the input types.
    const inputArgs: any = {
        type,
        name,
        min,
        max,
        list,
        options,
        labels,
        titles,
        rows,
        valueRef,
        onChange,
        onBlur,
        placeholder
    };

    // only pass default value when there is a defined value
    if (defaultValue !== undefined) inputArgs.defaultValue = defaultValue;

    const css = [ 'formfield' ];
    css.push(`formfield-layout-${layout}`);

    const WrappingLayout = ({ children }: { children: ReactNode }) => (
        <FormFieldLayout label={label} layout={layout} description={description}>
            {children}
        </FormFieldLayout>
    );

    if (type === "textarea") return (
        <WrappingLayout>
            <TextArea {...inputArgs}/>
        </WrappingLayout>
    );

    if (type === "select") return (
        <WrappingLayout>
            <SelectInput {...inputArgs} />
        </WrappingLayout>
    );

    return (
        <WrappingLayout>
            <Input {...inputArgs}/>
        </WrappingLayout>
    );
};

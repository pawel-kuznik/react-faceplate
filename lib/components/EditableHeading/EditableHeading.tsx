import { Input, InputProps } from "../Input";

export interface EditableHeadingProps extends InputProps {

    level?: number;
};

export function EditableHeading({ level = 3, ...inputProps }: EditableHeadingProps) {

    const InputJSX = (<Input {...inputProps}/>);

    if (level === 3) return (<h3 className="faceplate-editableheading">{InputJSX}</h3>);
    if (level === 2) return (<h2 className="faceplate-editableheading">{InputJSX}</h2>);
    return (<h1 className="faceplate-editableheading">{InputJSX}</h1>);
};

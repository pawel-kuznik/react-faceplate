import { useState } from "react";
import { SelectInput } from "../SelectInput";
import { Button } from "../Button";

export interface TagPickerProps {
    /**
     * Callback when a tag is picked.
     */
    onPick: (tag: string) => void;
}

export interface TagPickerComponentProps extends TagPickerProps {
    
    /**
     * The list of available options to pick from.
     */
    options: string[];

    /**
     * Optional labels for the options. If not provided, options are used as labels.
     */
    labels?: string[] | readonly string[] | ((option: string) => string);

    /**
     * Placeholder text for the select when no option is chosen.
     */
    placeholder?: string;
}

/**
 * A component that provides a way to pick tags from a predefined list.
 * It has two states: inert (just a "+" button) and picker (a select with options).
 */
export function TagPicker({ options, labels, placeholder = "Select a tag...", onPick }: TagPickerComponentProps) {
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>("");

    const handleAddClick = () => {
        setIsPickerOpen(true);
    };

    const handleCloseClick = () => {
        setIsPickerOpen(false);
        setSelectedValue("");
    };

    const handleSelectChange = (value: string) => {
        setSelectedValue(value);
        if (value) {
            onPick(value);
            handleCloseClick();
        }
    };

    if (!isPickerOpen) {
        return (
            <Button
                label="+"
                size="mini"
                color="default"
                onClick={handleAddClick}
            />
        );
    }

    return (
        <div className="faceplate-tagpicker-open">
            <SelectInput
                options={options}
                labels={labels || options}
                placeholder={placeholder}
                defaultValue=""
                onChange={handleSelectChange}
            />
            <Button
                label="×"
                size="mini"
                color="default"
                onClick={handleCloseClick}
            />
        </div>
    );
}
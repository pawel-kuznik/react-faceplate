import { FunctionComponent, MutableRefObject, useState, useEffect } from "react";
import { TagList, TagListProps } from "../TagList";
import { TagPicker, TagPickerProps } from "../TagPicker";

export interface TagInputProps {
    /**
     * The name of the hidden input field.
     */
    name?: string;

    /**
     * Should the input be readonly?
     */
    readonly?: boolean;

    /**
     * The default value as comma-separated tags.
     */
    defaultValue?: string;

    /**
     * Placeholder text to show when no tags are present.
     */
    placeholder?: string;

    /**
     * A mutable ref to the current value (comma-separated tags).
     */
    valueRef?: MutableRefObject<string>;

    /**
     * Callback when the tag list changes.
     */
    onChange?: (value: string) => void;

    /**
     * Callback when the input loses focus.
     */
    onBlur?: (value: string) => void;

    /**
     * Custom tag picker component.
     */
    picker?: FunctionComponent<TagPickerProps>;

    /**
     * Props to pass to the TagList component.
     */
    tagListProps?: Partial<TagListProps>;
}

/**
 * A component that combines TagList with a way to add new tags.
 * It maintains a hidden input with comma-separated values for form submission.
 */
export function TagInput({
    name,
    readonly = false,
    defaultValue = "",
    placeholder,
    valueRef,
    onChange,
    onBlur,
    picker: PickerComponent = TagPicker,
    tagListProps = {}
}: TagInputProps) {
    const [tags, setTags] = useState<string[]>(() => {
        const initial = defaultValue || valueRef?.current || "";
        return initial ? initial.split(",").map(tag => tag.trim()).filter(Boolean) : [];
    });

    const currentValue = tags.join(",");

    useEffect(() => {
        if (valueRef) {
            valueRef.current = currentValue;
        }
        onChange?.(currentValue);
    }, [currentValue, onChange, valueRef]);

    const handleAddTag = (tag: string) => {
        if (!tags.includes(tag)) {
            setTags(prev => [...prev, tag]);
        }
    };

    const handleRemoveTag = (tagToRemove: string, index: number) => {
        setTags(prev => prev.filter((_, i) => i !== index));
    };

    const handleBlur = () => {
        onBlur?.(currentValue);
    };

    const pickerComponent = readonly ? null : (
        <PickerComponent onPick={handleAddTag} />
    );

    return (
        <div className="faceplate-taginput" onBlur={handleBlur}>
            {tags.length === 0 && placeholder && !readonly && (
                <div className="faceplate-taginput-placeholder">
                    {placeholder}
                </div>
            )}
            <TagList
                tags={tags}
                onRemove={readonly ? undefined : handleRemoveTag}
                picker={pickerComponent}
                {...tagListProps}
            />
            <input
                type="hidden"
                name={name}
                value={currentValue}
            />
        </div>
    );
}
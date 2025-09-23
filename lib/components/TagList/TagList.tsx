import { ReactNode } from "react";
import { Tag, TagProps } from "../Tag";

export interface TagListProps {
    /**
     * The list of tag values to display.
     */
    tags: string[];

    /**
     * The formatting to apply to all tags.
     */
    formatting?: TagProps["formatting"];

    /**
     * The visual style to apply to all tags.
     */
    style?: TagProps["style"];

    /**
     * Custom component to render for adding new tags.
     */
    picker?: ReactNode;

    /**
     * Callback when a tag should be removed.
     */
    onRemove?: (tag: string, index: number) => void;
}

/**
 * A component that displays an inline list of tags using the Tag component.
 */
export function TagList({ tags, formatting, style, picker, onRemove }: TagListProps) {
    return (
        <div className="faceplate-taglist">
            {tags.map((tag, index) => (
                <div key={`${tag}-${index}`} className="faceplate-taglist-item">
                    <Tag formatting={formatting} style={style} onRemove={onRemove ? () => onRemove(tag, index) : undefined}>
                        {tag}
                    </Tag>
                </div>
            ))}
            {picker && (
                <div className="faceplate-taglist-picker">
                    {picker}
                </div>
            )}
        </div>
    );
}
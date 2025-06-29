import { PropsWithChildren, ReactNode } from "react";
import { Heading, HeadingProps } from "../Heading";

export interface DescriptiveHeaderProps extends PropsWithChildren {
    /**
     *  The title of the header.
     */
    title: string;

    /**
     *  The level of the heading.
     */
    level?: HeadingProps["level"]

    /**
     *  The icon of the header.
     */
    icon?: ReactNode;

    /**
     *  The description of the header.
     */
    description?: string | ReactNode;
}

/**
 *  This is a component offering a header with a title and smaller description.
 *  The component would commonly be used to display a section of a specific entity
 *  with potential actions mounted as the children.
 *  
 *  The component can also take an icon component that will be placed on the left
 *  of the title.
 */
export function DescriptiveHeader({ title, level, description, children, icon }: DescriptiveHeaderProps) {
    return (
        <div className="faceplate-descriptiveheader">
            {icon && <div className="faceplate-descriptiveheader-icon">{icon}</div>}
            <Heading level={level}>{title}</Heading>
            {description && <div className="faceplate-descriptiveheader-description">{description}</div>}
            <div className="faceplate-descriptiveheader-content">{children}</div>
        </div>
    );
}
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
     *  The description of the header.
     */
    description?: string | ReactNode;
}

export function DescriptiveHeader({ title, level, description, children }: DescriptiveHeaderProps) {
    return (
        <div className="faceplate-descriptiveheader">
            <Heading level={level}>{title}</Heading>
            {description && <div className="faceplate-descriptiveheader-description">{description}</div>}
            <div className="faceplate-descriptiveheader-content">{children}</div>
        </div>
    );
}
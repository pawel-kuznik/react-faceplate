import { PropsWithChildren } from "react";

export interface HeadingProps extends PropsWithChildren {
    /**
     *  The level of the heading.
     */
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 *  A Heading component.
 */
export function Heading({ level = 1, children }: HeadingProps) {

    if (level === 1) return <h1 className="faceplate-heading">{children}</h1>;
    if (level === 2) return <h2 className="faceplate-heading">{children}</h2>;
    if (level === 3) return <h3 className="faceplate-heading">{children}</h3>;
    if (level === 4) return <h4 className="faceplate-heading">{children}</h4>;
    if (level === 5) return <h5 className="faceplate-heading">{children}</h5>;
    if (level === 6) return <h6 className="faceplate-heading">{children}</h6>;

    throw new Error(`Invalid heading level: ${level}`);
}

export function H1({ children }: PropsWithChildren) {
    return <Heading level={1}>{children}</Heading>;
}

export function H2({ children }: PropsWithChildren) {
    return <Heading level={2}>{children}</Heading>;
}

export function H3({ children }: PropsWithChildren) {
    return <Heading level={3}>{children}</Heading>;
}

export function H4({ children }: PropsWithChildren) {
    return <Heading level={4}>{children}</Heading>;
}

export function H5({ children }: PropsWithChildren) {
    return <Heading level={5}>{children}</Heading>;
}

export function H6({ children }: PropsWithChildren) {
    return <Heading level={6}>{children}</Heading>;
}
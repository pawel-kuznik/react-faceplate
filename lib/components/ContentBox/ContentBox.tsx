import { ReactNode } from "react";

export interface ContentBoxProps {

    label?: string;

    children: ReactNode;
};

export function ContentBox({ label, children }: ContentBoxProps) {
    return (
        <div className="faceplate-contentbox">
            {label && <div className="faceplate-contentbox-label">{label}</div>}
            {children}
        </div>
    );
};

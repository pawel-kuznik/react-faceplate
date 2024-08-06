
export interface PlaceholderProps {
    width?: number | string;
    height?: number | string;
    color?: "red" | "orange" | "blue" | "green" | "gray" | "black";
}

export function Placeholder({ width, height, color = "gray" }: PlaceholderProps) {
    
    const css = [
        "faceplate-placeholder",
        `faceplate-placeholder-color-${color}`
    ];
    
    return (
        <div
            className={css.join(" ")}
            style={{
                width: width || "100%",
                height: height || "100%"
            }}
        ></div>
    );
};
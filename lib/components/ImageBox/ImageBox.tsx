import { ReactNode } from "react";

export interface ImageBoxProps {

    /**
     *  The `src` attribute that will be used as the image. In theory, it should
     *  be always a string, but some build systems and libraries might extend it
     *  with additional types. To make sure that we don't handicap usage of such
     *  libraries we preserve the type that react uses.
     */
    src: React.ImgHTMLAttributes<HTMLImageElement>['src'];

    /**
     *  The alt text to show when the image isn't loaded.
     */
    alt?: string;

    /**
     *  The width of the ImageBox. It can be either a CSS value ('400px', '100%', etc)
     *  or a number that will be translated into value in 'px'.
     */
    width?: number|string;

    /**
     *  The width of the ImageBox. It can be either a CSS value ('400px', '100%', etc)
     *  or a number that will be translated into value in 'px'.
     */
    height?: number|string;

    /**
     *  Additional content to be placed in the right-top corner of the image.
     */
    rightTop?: ReactNode;

    /**
     *  Additional content to be placed in the left-top corner of the image.
     */
    leftTop?: ReactNode;

    /**
     *  Additional content to be placed in the right-bottom corner of the image.
     */
    rightBottom?: ReactNode;

    /**
     *  Additional content to be placed in the left-bottom corner of the image.
     */
    leftBottom?: ReactNode;
};

/**
 *  The component that can hold an image and allow for mounting controls
 *  around the image.
 */
export function ImageBox({ src, width, height, alt, rightTop, leftTop, rightBottom, leftBottom }: ImageBoxProps) {

    return (
        <div
            style={{
                width: width !== undefined ? (typeof width === "string" ? width : `{width}px`) : "",
                height: height !== undefined ? (typeof height === "string" ? height : `{height}px`) : ""
            }}
            className="faceplate-imagebox"
        >
            <img src={src} alt={alt}/>
            {rightTop && (<div className="faceplate-imagebox-righttop">{rightTop}</div>)}
            {leftTop && (<div className="faceplate-imagebox-lefttop">{leftTop}</div>)}
            {rightBottom && (<div className="faceplate-imagebox-rightbottom">{rightBottom}</div>)}
            {leftBottom && (<div className="faceplate-imagebox-leftbottom">{leftBottom}</div>)}
        </div>
    );
};

import { useEffect, useRef, useState } from "react";
import { PaletteColor } from "../CssTypes";

export interface BarChartGroupProps {

    /**
     *  The start index of the bar groupe.
     */
    start: number;

    /**
     *  The end index of the bar groupe.
     */
    end: number;

    /**
     *  The label of the groupe.
     */
    label: string;
    
    /**
     *  The color of the groupe.
     */
    color?: PaletteColor;
};

export interface BarChartProps {

    /**
     *  The labels below the chart.
     */
    labels: string[];

    /**
     *  The data to show in the bars.
     */
    data: number[];

    /**
     *  The colors for each bar or one color for all bars.
     *  When an array is passed it will take precendence over colors
     *  set in groups.
     */
    colors?: Array<PaletteColor> | PaletteColor;

    /**
     *  Groups of columns that will be wrapped with visible borders
     *  and assigned a label on top of the chart.
     */
    groups?: BarChartGroupProps[];

    /**
     *  Height of the chart.
     */
    height: number;
};

/**
 *  This is a component that displays a bar chart. The chart is configurable
 *  with labels, groups, and colors.
 */
export function BarChart({ height, labels, data, groups, colors }: BarChartProps) {

    const svgRef = useRef(null);
    const bars = data.length;
    const maxValue = data.reduce((acc, v) => acc < v ? v : acc, 0);

    const [ svgWidth, setSvgWidth ] = useState<number>(100);
    const [ svgHeight, setSvgHeight ] = useState<number>(50);

    useEffect(() => {

        if (!svgRef.current) return;

        const observer = new ResizeObserver((entries) => {

            const svg = entries[0];

            setSvgWidth(svg.contentRect.width);
            setSvgHeight(svg.contentRect.height);
        });

        observer.observe(svgRef.current);

        return () => {
            observer.disconnect();
        };
    }, [ svgRef, setSvgWidth, setSvgWidth ]);

    const barWidth = (svgWidth - 10) / bars - 4;
    const barMaxHeight = svgHeight - 31;

    const styles = {
        "height": `${height}px`
    };

    const findColor = (idx: number) : PaletteColor => {

        if (Array.isArray(colors) && colors[idx]) return colors[idx];
        if (!Array.isArray(groups)) return typeof colors === "string" ? colors : "black";

        const group = groups.find(g => g.start <= idx && g.end >= idx);
        if (!group) return 'black';

        return group.color ? group.color : "black";
    };

    return (
        <svg
            style={styles}
            ref={svgRef}
            className="faceplate-barchart"
        >

            {data.map((value, idx) => {

                const height = (value / maxValue) * barMaxHeight; 

                return (<rect
                    key={idx}
                    className={`faceplate-barchart-bar faceplate-barchart-bar-color-${findColor(idx)}`}
                    x={7 + (idx * (barWidth + 4))}
                    y={15 + barMaxHeight - height}
                    width={barWidth}
                    height={height}
                />);
            })}

            {labels.map((value, idx) => {
                return (
                    <text
                        key={idx}
                        className="faceplate-barchart-label"
                        y={barMaxHeight + 28}
                        x={5 + (idx * (barWidth + 4) + barWidth / 2)}
                        textAnchor="middle"
                    >
                        {value}
                    </text>
                );
            })}

            {groups && groups.map((group, idx) => {

                const centerBar = group.start + Math.round((group.end - group.start) / 2);

                return (
                    <g key={idx}>
                        <text
                            className="faceplate-barchart-group-label"
                            y={10}
                            x={5 + (centerBar * (barWidth + 4) + barWidth / 2)}
                        >
                            {group.label}
                        </text>
                        {(idx !== (groups.length - 1) && (
                            <line
                                className="faceplate-barchart-group-border"
                                x1={5 + (group.end * (barWidth + 4) + barWidth) + 4}
                                x2={5 + (group.end * (barWidth + 4) + barWidth) + 4}
                                y1={0}
                                y2={barMaxHeight + 15}
                            />
                        ))}
                    </g>
                );
            })}

        </svg>
    );
};
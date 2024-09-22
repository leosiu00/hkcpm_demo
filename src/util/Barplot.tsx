import { useMemo } from "react";
import * as d3 from "d3";

const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };
const BAR_PADDING = 0.3;

type BarplotProps = {
    width: number;
    height: number;
    data: { name: string; value: number }[];
};

export const Barplot = ({ width, height, data }: BarplotProps) => {
    // bounds = area inside the graph axis = calculated by substracting the margins
    const boundsWidth = width - MARGIN.right - MARGIN.left;
    const boundsHeight = height - MARGIN.top - MARGIN.bottom;

    // Y axis is for groups since the barplot is horizontal
    const groups = useMemo(() => {
        return data.sort((a, b) => b.name.localeCompare(a.name)).map((d) => d.name);
    }, [data]);
    const xScale = useMemo(() => {
        return d3
            .scaleBand()
            .domain(groups)
            .range([boundsHeight, 0])
            .padding(BAR_PADDING);
    }, [data, height]);

    // Y axis
    const yScale = useMemo(() => {
        const [min, max] = d3.extent(data.map((d) => d.value));
        return d3
            .scaleLinear()
            .domain([0, max ? max + 5 : 10])
            .range([boundsWidth, 0]);
    }, [data, width]);

    // Build the shapes
    const allShapes = data.map((d, i) => {
        const x = xScale(d.name);
        if (x === undefined) {
            return null;
        }

        return (
            <g key={i}>
                <rect
                    x={xScale(d.name)}
                    y={yScale(d.value)}
                    height={boundsHeight - yScale(d.value)}
                    width={xScale.bandwidth()}
                    opacity={0.7}
                    stroke="#00a651"
                    fill="#00a651"
                    fillOpacity={1}
                    strokeWidth={1}
                    rx={1}
                />
                <text
                    y={yScale(d.value) - 7}
                    x={x + xScale.bandwidth() / 2}
                    textAnchor="end"
                    alignmentBaseline="central"
                    fontSize={12}
                >
                    {d.value}
                </text>
                <text
                    x={x + xScale.bandwidth() / 2}
                    y={yScale(0) + 7}
                    textAnchor="middle"
                    alignmentBaseline="central"
                    fontSize={12}
                >
                    {d.name}
                </text>
            </g>
        );
    });

    const grid = yScale
        .ticks(5)
        .slice(1)
        .map((value, i) => (
            <g key={i}>
                <line
                    x1={0}
                    x2={boundsHeight}
                    y1={yScale(value)}
                    y2={yScale(value)}
                    stroke="#808080"
                    opacity={0.2}
                />
                <text
                    x={boundsHeight + 10}
                    y={yScale(value)}
                    textAnchor="middle"
                    alignmentBaseline="central"
                    fontSize={9}
                    stroke="#808080"
                    opacity={0.8}
                >
                    {value}
                </text>
            </g>
        ));

    return (
        <div>
            <svg width={width} height={height}>
                <g
                    width={boundsWidth}
                    height={boundsHeight}
                    transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
                >
                    {grid}
                    {allShapes}
                </g>
            </svg>
        </div>
    );
};

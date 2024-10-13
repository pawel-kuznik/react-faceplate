export function convertToCSSUnits(input: undefined | number | string) : string {

    // if the input is undefined, we fallback on an empty string as
    // it will get ignored;
    if (input === undefined) return '';

    // we assume that a number is supposed to be in px
    if (typeof(input) === "number") return `${input}px`;

    // we assume that anything else is valid css unit
    return input;
};
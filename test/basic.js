import { v4 } from "uuid";

console.log("in root", v4());

export const readme = new URL("../README.md", import.meta.url);
export const nmReadme = new URL("vitest/README.md", import.meta.url);

export function inFunction() {
    const result = v4();
    console.log("in function", result);
    return result;
}

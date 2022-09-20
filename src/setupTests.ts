import { afterEach, beforeAll, expect } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";

beforeAll(() => {
    expect.extend(matchers);
});

afterEach(cleanup);

export {};

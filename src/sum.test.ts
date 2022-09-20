import {sum} from "./sum";

describe("sum", () => {
    it ("adds up values", () => {
        expect(sum(1,2,3,4)).toEqual(10)
    })

    it ("failing test", () => {
        expect(sum(1,2,3,5)).toEqual(11)
    })
})


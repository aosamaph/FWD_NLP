import { IsLinkValid } from '../src/frontend/scripts/helpers'

describe("Testing checking URL functionality", () => {
    test("Test IsLinkValid function is defined", () => {
        expect(IsLinkValid).toBeDefined()
    })

    test("Test valid URL", () => {
        expect(IsLinkValid("google.com")).toBeTruthy()
    })

    test("Test InValid URL", () => {
        expect(IsLinkValid('')).toBeFalsy()
    })
})
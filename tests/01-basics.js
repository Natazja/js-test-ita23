describe("Addition function", function() {
    it("should add two numbers correctly", function() {
        expect(add(1, 2)).toBe(3);
        expect(add(0, 0)).toBe(0);
        expect(add(-1, 1)).toBe(0);
    });
});
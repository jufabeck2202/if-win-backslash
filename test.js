const expect = require("chai").expect;
const chai = require("chai");
const m = require(".");



describe('if-win-backslash', async () => {
    it("if-win-backslash", async () => {
        let test1 = m.test(".");
        let test2 = m.test("node_modules");
        let test3 = m.test("node_modules/");
        let test4 = m.test("node_modules/chai");
        let test5 = m.test("node_modules\\chai");
        let test6 = m.test("\\node_modules/chai\\");
        let test7 = m.test("\\\\node_modules/\\chai\\\\");

        expect(test1).to.be.equal(".");
        expect(test2).to.be.equal("node_modules");
        expect(test3).to.be.equal("node_modules\\");
        expect(test4).to.be.equal("node_modules\\chai")
        expect(test5).to.be.equal("node_modules\\chai")
        expect(test6).to.be.equal("\\node_modules\\chai\\")
        expect(test7).to.be.equal("\\node_modules\\chai\\")
    });
});

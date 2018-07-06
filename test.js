const expect = require("chai").expect;
const chai = require("chai");
const m = require(".");
const opn = require('opn');



describe('test', async () => {
    it('', async () => {
        let pa = m("node_modules/chai");
        opn(pa).then(() => {
            // image viewer closed
        });

    });
});
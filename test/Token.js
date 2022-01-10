const { expect } = require("chai");

describe("Token contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {
        const owner = await ethers.getSigners();
        console.log(owner.length)
        // console.log(owner[0])

        const Token = await ethers.getContractFactory("Token");

        const hardhatToken = await Token.deploy();

        const ownerBalance = await hardhatToken.balanceOf(owner[0].address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
})
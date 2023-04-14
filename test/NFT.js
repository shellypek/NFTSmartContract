describe("NFT", function() {
    it("Should mint NFT", async function() {
      const NFT = await ethers.getContractFactory("NFT");
      const nft = await NFT.deploy();
      await nft.deployed();
      await nft.safeMint(owner.address, { value: ethers.utils.parseEther("0.001") });
      expect(await nft.balanceOf(owner.address)).to.equal(1);
    });
  });

  describe("NFT", function() {
    it("Should set base URI", async function() {
      const NFT = await ethers.getContractFactory("NFT");
      const nft = await NFT.deploy();
      await nft.deployed();
      await nft.setBaseURI("https://example.com/");
      expect(await nft.baseURI()).to.equal("https://example.com/");
    });
  });

  describe("NFT", function() {
    it("Should withdraw funds", async function() {
      const NFT = await ethers.getContractFactory("NFT");
      const nft = await NFT.deploy({ value: ethers.utils.parseEther("1") });
      await nft.deployed();
      const preBalance = await ethers.provider.getBalance(owner.address);
      await nft.withdraw();
      const postBalance = await ethers.provider.getBalance(owner.address);
      expect(postBalance.sub(preBalance)).to.equal(ethers.utils.parseEther("1"));
    });
  });
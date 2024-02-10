const Section = () => {
  return (
    <div className="min-h-screen bg-[url(/section.jpg)] bg-cover bg-center bg-no-repeat p-[78px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[24px]">
          <p className="text-white">UNISWAP ECOSYSTEM →</p>
          <p className="w-[323px] text-[32px] font-medium text-white">
            A growing network of DeFi Apps.
          </p>
          <p className="w-[354px] text-[20px] font-light text-[#888D9B]">
            Developers, traders, and liquidity providers participate together in
            a financial marketplace that is open and accessible to all.
          </p>
        </div>
        <div className="">
          <div className="h-full w-[590px] rounded-[24px] bg-[url(sectionImg.png)] bg-cover bg-center bg-no-repeat p-6 px-12">
            <p className="text-[48px] font-bold text-white">300+</p>
            <p className="text-[20px] font-light text-[#ffffff60]">
              Integrations
            </p>
          </div>
        </div>
      </div>
      <p className="py-[26px] text-white">DEVELOPERS →</p>
      <div className="grid grid-cols-7 gap-6">
        <div className="col-span-5 flex flex-col gap-4">
          <div className="flex h-[381px] flex-col items-start justify-end gap-[16px] rounded-[24px] border border-[#ffffff50] p-[33px] backdrop-blur-md">
            <h1 className="text-4xl font-semibold text-white">
              Superpowers for DeFi developers.
            </h1>
            <p className="w-[70%] text-white">
              Build Defi apps and tools on the largest crypto project on
              Ethereum. Get started with quick start guides, protocol
              documentation, a Javascript SDK, and fully open source code.
            </p>
            <button className="h-[44px] w-[167px] bg-[#323336] text-white">
              Documentation ↗
            </button>
          </div>
          <div className="flex w-full items-center gap-4">
            <div className="text-[20px]text-white flex flex-1 justify-between rounded-[24px] border border-[#ffffff50] bg-[#32333625] p-[25px] text-white">
              <h1>V3 Whitepaper</h1>
              <h1>↗</h1>
            </div>
            <div className="text-[20px]text-white flex flex-1 justify-between rounded-[24px] border border-[#ffffff50] bg-[#32333625] p-[25px] text-white">
              <h1>V3 Whitepaper</h1>
              <h1>↗</h1>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-between rounded-[24px] border border-[#ffffff50] bg-[#32333625] p-4">
          <img src="/u.png" alt="img" className="h-[134px] w-[120px]" />
          <h1 className="text-[20px] font-normal text-white">
            Apply for funding from the Uniswap Grants Program
          </h1>
          <p className="text-[20px] font-light text-[#FFFFFF60]">
            Get paid to build the future of finance. Uniswap Governance offers
            grant funding for people building apps, tools, and activities on the
            Uniswap Protocol.
          </p>
          <button className="h-[44px] w-[167px] rounded-sm bg-[#52535790] text-white">
            Learn More ↗
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;

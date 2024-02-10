const Hero = () => {
  return (
    <div className="flex h-screen flex-col bg-[url(/hero.webp)] bg-cover bg-center bg-no-repeat p-[78px]">
      <div className="flex flex-1 flex-col items-start justify-center gap-[17.67px]">
        <p className="text-[56px] font-thin text-white">
          UNISWAP <span className="font-medium text-white">PROTOCOL</span>
        </p>
        <p className="w-[732px] text-[24px] font-light text-white">
          Swap, earn, and build on the leading decentralized crypto trading
          protocol.
        </p>
        <div className="flex gap-[16px]">
          <img src="twitter.svg" />
          <img src="twitter.svg" />
          <img src="twitter.svg" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid w-[80%] grid-cols-4">
          {[1, 2, 3, 4]?.map((item) => (
            <div
              key={item}
              className="col-span-1 flex flex-col items-center px-[190px]"
            >
              <h1 className="text-[48px] font-bold text-white">$1.3T+</h1>
              <p className="w-[90px] text-center text-[14px] font-light text-white">
                Trade Volume
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

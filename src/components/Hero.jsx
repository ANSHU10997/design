const Hero = () => {
  return (
    <div className="flex h-screen flex-col bg-[url(/hero.webp)] bg-cover bg-right-bottom bg-no-repeat p-[78px] max-md:p-[28px] max-md:py-[150px] md:bg-center">
      <div className="flex flex-1 flex-col max-md:gap-[5px] md:items-start md:justify-center md:gap-[17.67px]">
        <p className="text-[56px] font-thin text-white max-md:text-[30px] max-md:font-normal">
          UNISWAP <span className="font-medium text-white">PROTOCOL</span>
        </p>
        <p className="w-[732px] text-[24px] font-light text-white max-md:w-[300px] max-md:text-[16px]">
          Swap, earn, and build on the leading decentralized crypto trading
          protocol.
        </p>
        <div className="flex gap-[16px]">
          <img src="twitter.svg" />
          <img src="twitter.svg" />
          <img src="twitter.svg" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="grid grid-cols-4 gap-4 max-md:m-5 max-md:grid-cols-2 md:w-[80%]">
          {[1, 2, 3, 4]?.map((item) => (
            <div
              key={item}
              className="flex flex-col items-center rounded-lg shadow-sm"
            >
              <h1 className="text-[48px] font-bold text-white max-md:m-5">
                $1.3T+
              </h1>
              <p className="text-center text-[14px] font-light text-white">
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

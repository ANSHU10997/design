const Nav = () => {
  return (
    <header className="fixed left-0 top-0 w-full px-16 py-[10px] backdrop-blur-md max-md:px-8">
      <nav className="flex items-center justify-between">
        <div>
          <a href="/">
            <img src="/navLogo.png" className="h-[32px] w-[32px]" />
          </a>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex flex-1 items-center justify-center gap-8 text-white max-md:hidden">
            <li>Ecosystem</li>
            <li>Community</li>
            <li>Governance</li>
            <li>Developers</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Jobs</li>
          </ul>
          <button className="rounded-md bg-[#EA0265] px-4 py-[10px] text-white">
            Launch App
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

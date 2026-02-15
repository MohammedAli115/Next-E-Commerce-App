const Brands = () => {
  return (
    <section className="bg-black py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-20">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 text-gray-400 text-xl md:text-2xl font-semibold tracking-wide">
          <span className="hover:text-white transition duration-300 cursor-pointer">
            VERSACE
          </span>

          <span className="hover:text-white transition duration-300 cursor-pointer">
            ZARA
          </span>

          <span className="hover:text-white transition duration-300 cursor-pointer">
            GUCCI
          </span>

          <span className="hover:text-white transition duration-300 cursor-pointer">
            PRADA
          </span>

          <span className="hover:text-white transition duration-300 cursor-pointer">
            Calvin Klein
          </span>
        </div>
      </div>
    </section>
  );
};

export default Brands;

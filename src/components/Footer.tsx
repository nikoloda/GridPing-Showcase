import logo from "../assets/GridPing.png";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="#top"
            className="flex items-center"
          >
            <img src={logo} alt="GridPing" className="w-25 h-8 object-contain" />
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Site</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#about"
              className="opacity-60 hover:opacity-100"
            >
              Overview
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#features"
              className="opacity-60 hover:opacity-100"
            >
              Software Stack
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#demo"
              className="opacity-60 hover:opacity-100"
            >
              Application Demo
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/nikoloda/GridPing-Showcase"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contact</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="mailto:nikoloda@oregonstate.edu"
              className="opacity-60 hover:opacity-100"
            >
              Email: nikoloda@oregonstate.edu
            </a>
          </div>
        </div>

        
      </section>

      <section className="container pb-14 text-center">
        <h3>
          Landing page made by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/danielv-nikolov"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Daniel Nikolov
          </a>
        </h3>
      </section>
    </footer>
  );
};

import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Read the
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Published Paper{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            We published a paper which justifies our design choices and formalizes our prototype
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <a
            href="#"
            aria-disabled="true"
            className={`w-full md:mr-4 md:w-auto pointer-events-none opacity-50 ${buttonVariants()}`}
          >
            Read the Paper (Coming Soon)
          </a>
          <a
            rel="noreferrer noopener"
            href="https://github.com/nikoloda/OSU_Islanding"
            target="_blank"
            className={`w-full md:w-auto ${buttonVariants({ variant: "outline" })}`}
          >
            Visit Github Repo
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

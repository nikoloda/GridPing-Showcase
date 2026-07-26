import paperUrl from "../assets/IEEE_PES_JOURNAL_Submission.pdf";
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
              Paper (Pending Publication){" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            We submitted a paper for publication to the <a rel="noreferrer noopener" href="https://pes-gridedge.org/" target="_blank" className="underline font-semibold">2027 IEEE PES Grid Edge Technologies Conference & Exposition</a>. The paper justifies our design choices and formalizes our prototype.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <a
            rel="noreferrer noopener"
            href={paperUrl}
            target="_blank"
            className={`w-full md:mr-4 md:w-auto ${buttonVariants()}`}
          >
            Read the Paper
          </a>
          <a
            rel="noreferrer noopener"
            href="https://github.com/nikoloda/GridPing-Backend"
            target="_blank"
            className={`w-full md:w-auto ${buttonVariants({ variant: "outline" })}`}
          >
            Backend Repo
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://github.com/nikoloda/GridPing-Deploy"
            target="_blank"
            className={`w-full md:w-auto ${buttonVariants({ variant: "outline" })}`}
          >
            Frontend Repo
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

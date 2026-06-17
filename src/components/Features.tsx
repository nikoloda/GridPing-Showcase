import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import image from "../assets/react.png";
import image3 from "../assets/aws.png";
import image4 from "../assets/julia.png";
import image5 from "../assets/lambda.png";
import image6 from "../assets/postgresql.png";
import image7 from "../assets/powermodels.svg";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  secondaryImage: string;
  repoUrl?: string;
  note?: string;
}

const features: FeatureProps[] = [
  {
    title: "Smart Meter",
    description:
      "Receives data and processes .m files using lightweight code in Julia with the PowerModels.jl library.",
    image: image4,
    secondaryImage: image7,
    repoUrl: "https://github.com/nikoloda/GridPing-Backend",
  },
  {
    title: "Cloud Hosted",
    description:
      "Records update an AWS-hosted PostgreSQL database to allow for asynchronous communication with frontend.",
    image: image3,
    secondaryImage: image6,
    note: "*Code Found in Smart Meter Repository*",
  },
  {
    title: "User Application",
    description:
      "The user application connects to an AWS Lambda function to retrieve records, allowing them to be rendered in the frontend.",
    image: image,
    secondaryImage: image5,
    repoUrl: "https://github.com/nikoloda/GridPing-Deploy",
  },
];

export const Features = () => {
  const imageClassName = "h-20 w-44 object-contain mx-auto md:w-52";

  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Development Stack
        </span>
        {" "}through Pipeline Stages
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image, secondaryImage, repoUrl, note }: FeatureProps) => (
          <Card key={title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent className="flex-1">{description}</CardContent>

            <CardFooter className="flex flex-col items-center gap-3">
              <img
                src={image}
                alt={`${title} primary logo`}
                className={imageClassName}
              />
              <div className="h-px w-14 bg-border/80" />
              <img
                src={secondaryImage}
                alt={`${title} secondary logo`}
                className={imageClassName}
              />
              {note && (
                <p className={`text-sm text-center w-full ${buttonVariants({ variant: "outline" })} pointer-events-none h-auto whitespace-normal`}>{note}</p>
              )}
              {repoUrl && (
                <a
                  rel="noreferrer noopener"
                  href={repoUrl}
                  target="_blank"
                  className={`w-full mt-2 ${buttonVariants({ variant: "outline" })}`}
                >
                  View Repository
                  <GitHubLogoIcon className="ml-2 w-4 h-4" />
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

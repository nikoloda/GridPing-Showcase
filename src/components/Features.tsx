import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
}

const features: FeatureProps[] = [
  {
    title: "Smart Meter",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image4,
    secondaryImage: image7,
  },
  {
    title: "Cloud Hosted",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image3,
    secondaryImage: image6,
  },
  {
    title: "User Application",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image,
    secondaryImage: image5,
  },
];

const featureList: string[] = [
  "Reviews",
  "Features",
  "Pricing",
  "Contact form",
  "Our team",
  "Responsive design",
  "Newsletter",
  "Minimalist",
];

export const Features = () => {
  const imageClassName = "h-20 w-44 object-contain mx-auto md:w-52";

  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Development{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Stack
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image, secondaryImage }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

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
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

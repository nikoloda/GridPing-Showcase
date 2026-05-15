import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import dataFlow from "../assets/data-flow.png";
import smartMeter from "../assets/smart-meter.png";
import dataProcessing from "../assets/data-processing.png";
import database from "../assets/database.png";
import gauge from "../assets/gauge.png";

interface FeatureProps {
  iconSrc: string;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    iconSrc: smartMeter,
    title: "Data Received",
    description:
      "The smart meter measures the power going through it or receives a global state from the utility",
  },
  {
    iconSrc: dataProcessing,
    title: "Data Processing",
    description:
      "The current state is compared to the ideal/ expected state to calculate power quality, number of islands, etc.",
  },
  {
    iconSrc: database,
    title: "Data Storage",
    description:
      "The record is inserted locally into a SQLite DB and/or remotely on an AWS postgreSQL DB",
  },
  {
    iconSrc: gauge,
    title: "Displaying",
    description:
      "The frontend requests data from the cloud database to show the users at the grid edge",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="flex justify-center mb-12">
        <img
          src={dataFlow}
          alt="Illustration showing the grid-edge computing flowchart"
          className="w-full max-w-3xl object-contain"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ iconSrc, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                <img src={iconSrc} alt={title} className="w-12 h-12 object-contain" />
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

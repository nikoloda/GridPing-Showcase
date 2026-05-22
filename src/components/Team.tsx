import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import danielHeadshot from "../assets/headshot.jpeg";
import ecsHeadshot from "../assets/ECS_Headshot.jpg";
import leslyHeadshot from "../assets/lesly_rojas_headshot.jpg";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  caption?: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: danielHeadshot,
    name: "Daniel Nikolov",
    position: "Backend Developer",
    caption: "Undergraduate senior focused on grid-edge algorithms and simulation.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/danielv-nikolov",
      },
      {
        name: "Email",
        url: "mailto:nikoloda@oregonstate.edu",
      },
    ],
  },
  {
    imageUrl: ecsHeadshot,
    name: "Dr. Eduardo Cotilla-Sanchez",
    position: "Head Researcher",
    caption: "Head coordinator and expert in power systems and island detection research.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/eduardo-cotilla-sanchez-30640935/",
      },
      // add email here if available
    ],
  },
  {
    imageUrl: leslyHeadshot,
    name: "Lesly Rojas",
    position: "Frontend Developer",
    caption: "Frontend engineer building data visualizations and UI for the project.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leslyrojascaloca/",
      },
      // add email here if available
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;
      case "Email":
        return <Mail size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our {" "}
        </span>
        Research Team
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        
      </p>

      <div className="grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks, caption }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex w-full max-w-sm flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>{caption}</p>
              </CardContent>

              <CardFooter className="gap-2">
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <a
                    key={name}
                    rel="noreferrer noopener"
                    href={url}
                    target={url.startsWith("mailto:") ? undefined : "_blank"}
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    <span className="sr-only">{name} icon</span>
                    {socialIcon(name)}
                  </a>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

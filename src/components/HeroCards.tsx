import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import simpleMode from "../assets/simpleMode.png";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src="/src/assets/headshot.jpeg" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Daniel Nikolov</CardTitle>
            <CardDescription>@nikoloda</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Know when to charge your EV to save money and reduce grid strain!</CardContent>
      </Card>

      <img
        src={simpleMode}
        alt="Free plan illustration"
        className="absolute top-[150px] left-[50px] w-72 object-contain drop-shadow-xl shadow-black/10 dark:shadow-white/10"
      />
    </div>
  );
};

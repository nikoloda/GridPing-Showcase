import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import simpleMode from "../assets/simpleMode.png";
import dualPhone from "../assets/dual-phone.png";
import gridPing from "../assets/GridPing.png";
import headshot from "../assets/headshot.jpeg";

export const HeroCards = () => {
  return (
    <>
      {/* Mobile layout */}
      <div className="flex lg:hidden flex-col gap-4 w-full mt-2">
        <div className="grid grid-cols-2 gap-3 items-start">
          <img
            src={gridPing}
            alt="GridPing preview"
            className="w-full object-contain rounded-xl"
          />
          <img
            src={dualPhone}
            alt="Dual phone app preview"
            className="w-full object-contain mix-blend-multiply"
          />
        </div>

        <img
          src={simpleMode}
          alt="Simple mode preview"
          className="w-full object-contain rounded-xl shadow-md"
        />

      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
        <Card className="absolute w-[340px] -top-[15px] overflow-hidden border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <img
              src={gridPing}
              alt="GridPing preview"
              className="w-full object-contain"
            />
          </CardContent>
        </Card>

        <Card className="absolute right-[20px] top-0 w-80 overflow-hidden border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <img
              src={dualPhone}
              alt="Dual phone app preview"
              className="w-full object-contain mix-blend-multiply"
            />
          </CardContent>
        </Card>

        <Card className="absolute top-[90px] left-[50px] w-72 overflow-hidden drop-shadow-xl shadow-black/10">
          <CardContent className="p-0">
            <img
              src={simpleMode}
              alt="Simple mode preview"
              className="w-full object-contain"
            />
          </CardContent>
        </Card>

        <Card className="absolute w-[350px] right-[5px] bottom-[-65px] overflow-hidden drop-shadow-xl shadow-black/10">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Avatar>
              <AvatarImage alt="" src={headshot} />
              <AvatarFallback>DN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <CardTitle className="text-lg">Daniel Nikolov</CardTitle>
              <CardDescription>@nikoloda</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            Know when to charge your EV to save money and reduce grid strain!
          </CardContent>
        </Card>
      </div>
    </>
  );
};

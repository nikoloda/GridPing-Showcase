import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Research{" "}
                </span>
                Motivation
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                This researach centers around the incorporation of computing resources, algorithms, and applications 
                at the grid edge to decrease grid strain, imrpove resilience, and lower costs for users. Currently, end 
                users of the power grid have minimal access to data and updates from utilities regarding the state of the 
                grid. This research proposes a concept which leverages the processing power found in modern smart meters to 
                distribute the processing, simulation, and publishing of grid state data to the grid edge. In addition, concept 
                applications were created which first ingest and process meter reading data, then send publish the records 
                to an AWS-hosted database. A frontend then retrieves the data and displays metrics, such as power quality, 
                along with reccomended actions to the user.
              
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};

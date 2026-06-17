import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { ZoomIn } from "lucide-react";
import beforeDashboard from "../assets/Power-Grid-Dashboard.png";
import currentDashboard from "../assets/Power-grid-dashboard-current.png";

export const FutureApplications = () => {
  return (
    <section
      id="future"
      className="container py-24 sm:py-32"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Future{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Applications
          </span>
        </h2>
        <p className="md:w-3/4 mx-auto mt-4 text-xl text-muted-foreground">
          Analysis Dashboard with grid structure context for use in the control room
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Before */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-yellow-400 shrink-0" />
            <h3 className="font-semibold text-lg">
              15 Minutes Earlier
              <span className="text-muted-foreground font-normal mx-2">|</span>
              <span className="text-muted-foreground font-normal">Grid Risk State</span>
            </h3>
          </div>
          <p className="text-sm text-muted-foreground mb-2">
            <b>Grid connected, but at risk of islanding or outage:</b>
            <br />
            At-risk infrastructure is highlighted before an islanding event occurs.
          </p>
          <Zoom>
            <div className="relative cursor-zoom-in">
              <img
                src={beforeDashboard}
                alt="Power Grid Dashboard — earlier timeline, grid connected"
                className="w-full rounded-lg border shadow-md object-cover"
                style={{ aspectRatio: "1918 / 897" }}
              />
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center pointer-events-none">
                <ZoomIn className="text-white w-4 h-4" />
              </div>
            </div>
          </Zoom>
        </div>

        {/* Now */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-red-500 shrink-0" />
            <h3 className="font-semibold text-lg">
              Present
              <span className="text-muted-foreground font-normal mx-2">|</span>
              <span className="text-muted-foreground font-normal">Islanded Created</span>
            </h3>
          </div>
          <p className="text-sm text-muted-foreground mb-2">
            <b>Line failed and islanding event occurred:</b>
            <br />
            The dashboard highlights active islands, identifies affected substations, and updates metrics in real time.</p>
          <Zoom>
            <div className="relative cursor-zoom-in">
              <img
                src={currentDashboard}
                alt="Power Grid Dashboard — present, islands detected"
                className="w-full rounded-lg border shadow-md object-contain"
              />
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center pointer-events-none">
                <ZoomIn className="text-white w-4 h-4" />
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

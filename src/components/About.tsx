import pilot from "../assets/logo.png";

export const About = () => {
  return (
    <div id="about" className="h-full">
      <div className="bg-muted/50 border rounded-lg py-10 px-8 h-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Research{" "}
          </span>
          Motivation
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          This research centers around the incorporation of computing resources, algorithms,
          and applications at the grid edge to decrease grid strain, improve resilience, and
          lower costs for users. Currently, end users of the power grid have minimal access
          to data and updates from utilities regarding the state of the grid. This research
          proposes a concept which leverages the processing power found in modern smart meters
          to distribute the processing, simulation, and publishing of grid state data to the
          grid edge. In addition, concept applications were created which first ingest and
          process meter reading data, then publish the records to an AWS-hosted database.
          A frontend then retrieves the data and displays metrics, such as power quality,
          along with recommended actions to the user.
        </p>
        <img
          src={pilot}
          alt="GridPing logo"
          className="mt-6 w-40 object-contain mx-auto block"
        />
      </div>
    </div>
  );
};

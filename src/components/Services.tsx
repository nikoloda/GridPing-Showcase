import phoneOutline from "../assets/Phone_outline.png";

export const Services = () => {
  return (
    <section
      id="demo"
      className="container py-24 sm:py-32"
    >
      <div className="flex flex-col items-center gap-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Application{" "}
            </span>
            Demo
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto border rounded-lg px-4 py-3 bg-muted/50">
            The GridPing application is for users at the grid edge.<br />While the simulated "SmartMeter" is running, the application will display new power quality readings every 15 minutes.
          </p>
        </div>

        {/* Phone mockup */}
        <div
          className="relative"
          style={{ width: "380px", maxWidth: "calc(100vw - 48px)" }}
        >
          {/* iframe sits behind, aligned to the screen area of the phone PNG */}
          <iframe
            src="https://gridping-demo.vercel.app/"
            title="Demo Application"
            style={{
              position: "absolute",
              top: "7.5%",
              left: "3.2%",
              width: "93.6%",
              height: "89.5%",
              border: "none",
              zIndex: 10,
              borderRadius: "6px",
            }}
          />

          {/* Phone outline overlaid on top — transparent screen area lets iframe show through */}
          <img
            src={phoneOutline}
            alt="Phone frame"
            draggable={false}
            style={{
              width: "100%",
              display: "block",
              position: "relative",
              zIndex: 20,
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
        </div>
      </div>
    </section>
  );
};

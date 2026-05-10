import { useEffect } from "react";

export const MapVisualization = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://js.arcgis.com/5.0/embeddable-components/";
    document.head.appendChild(script);
  }, []);

  return (
    <section className="container py-24 sm:py-32">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Grid{" "}
          </span>
          Visualization
        </h2>

        <arcgis-embedded-map
          style={{
            height: "600px",
            width: "100%",
            maxWidth: "900px",
            borderRadius: "8px",
          }}
          item-id="ea43092f0f24417f9d8a202b54748388"
          theme="dark"
          legend-enabled="true"
          time-zone-label-enabled="true"
          center="19.550129024798764,51.927339280513806"
          scale="9244648.868618"
          portal-url="https://osugisci.maps.arcgis.com"
        />
      </div>
    </section>
  );
};

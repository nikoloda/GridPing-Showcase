export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Application{" "}
          </span>
          Demo
        </h2>

        <iframe
          width="100%"
          height="600"
          title="Demo Application"
          src="http://localhost:5173/#features"
          style={{
            border: "1px solid var(--border)",
            borderRadius: "8px",
          }}
        />
      </div>
    </section>
  );
};

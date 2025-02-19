const AuthImagePattern = ({ title, subtitle }) => {
    const shapes = [
      "rounded-full", // Circle
      "rounded-2xl",  // Rounded square
      "clip-triangle", // Triangle
      "clip-hexagon",  // Hexagon
    ];
  
    return (
      <div className="hidden mt-10 lg:flex items-center justify-center bg-base-200 p-12">
        <div className="max-w-md text-center">
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`aspect-square bg-primary/10 ${shapes[i % shapes.length]} ${
                  i % 2 === 0 ? "animate-pulse" : ""
                }`}
              />
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-base-content/60">{subtitle}</p>
        </div>
      </div>
    );
  };
  
  export default AuthImagePattern;
  
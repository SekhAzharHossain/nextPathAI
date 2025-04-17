const GlowingLines = () => {
    const lineCount = 25; // You can adjust this for more/less density
    const center = lineCount / 2;
  
    return (
      <div className="glowing-lines">
        {Array.from({ length: lineCount }).map((_, i) => {
          const distanceFromCenter = Math.abs(i - center);
          const opacityFactor = 1 - distanceFromCenter / center; // closer to center = more visible
  
          return (
            <div
              key={i}
              className="line"
              style={{
                left: `${(i / lineCount) * 100}vw`,
                opacity: opacityFactor * 0.8 + 0.2, // fade out nicely
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          );
        })}
      </div>
    );
  };
  
  export default GlowingLines;
  
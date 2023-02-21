/**
 * Amin MOHAMED
 * Version 1.0
 */
const unbox = (object = {}) => {
  /**
   * not to self : map operator used to generate a list of JSX elements
   * question ; how does react interprets a list of JSX elements ?
   * follow up question : can there be unpredictable behavior and if so how to avoid it ?
   */
  return (
    <>
      {Object.entries(object).map((entry) => {
        const property = entry[0];
        const value = entry[1];

        return (
          <div key={property}>
            {property}: {value}
          </div>
        );
      })}
    </>
  );
};

export { unbox };

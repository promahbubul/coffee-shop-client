/* eslint-disable react/prop-types */
const SectionHeading = ({ children, className }) => {
  return (
    <h1
      style={{ textShadow: "2px 2px 5px black" }}
      className={`font-rancho text-5xl mt-6 text-coffee ${className}`}
    >
      {children}
    </h1>
  );
};

export default SectionHeading;

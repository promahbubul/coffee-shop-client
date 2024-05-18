/* eslint-disable react/prop-types */
const InputWithLabel = ({
  name,
  label,
  type,
  placeholder,
  className,
  onclick,
  defaultValue,
}) => {
  return (
    <div className={`flex flex-col gap-4 font-raleway ${className}`}>
      <label className="text-xl font-semibold text-black-1/80" htmlFor={name}>
        {label}
      </label>
      <input
        defaultValue={defaultValue && defaultValue}
        placeholder={placeholder}
        className="p-4 rounded-md bg-white
         "
        type={type ? type : "text"}
        name={name}
        id={name}
      />
    </div>
  );
};

export default InputWithLabel;

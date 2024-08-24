const Input = ({ value, label, onChange = () => {} }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-black">{label}</label>
      <input
        value={value}
        className="p-2 bg-white border-2 border-blue-400 shadow-md text-black"
        onChange={(param) => onChange(param.target.value)}
      />
    </div>
  );
};

export default Input;

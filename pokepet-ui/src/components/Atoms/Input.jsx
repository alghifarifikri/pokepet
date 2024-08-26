const Input = ({ value, label, onChange = () => {} }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-black">{label}</label>
      <input
        value={value}
        className="input-atom"
        onChange={(param) => onChange(param.target.value)}
      />
    </div>
  );
};

export default Input;

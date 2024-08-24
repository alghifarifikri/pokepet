const Button = ({
  onClick = () => {},
  label = "",
  className = "",
  children = null,
  loading = false,
}) => {
  return (
    <button onClick={onClick} className={className} disabled={loading}>
      {loading && (
        <div className="spinner-border animate-spin inline-block w-4 h-2 border-4 rounded-full border-t-white border-b-white border-l-transparent border-r-transparent"></div>
      )}
      {!loading && (children || label)}
    </button>
  );
};

export default Button;

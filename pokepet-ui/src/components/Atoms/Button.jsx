const Button = ({
  onClick = () => {},
  label = "",
  className = "",
  children = null,
  loading = false,
}) => {
  return (
    <button onClick={onClick} className={className} disabled={loading}>
      {loading && <div className="spinner-border button-atom"></div>}
      {!loading && (children || label)}
    </button>
  );
};

export default Button;

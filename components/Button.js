export default function Button({ children, className, ...rest }) {
  return (
    <button
      className={`px-5 py-2 rounded-lg font-semibold shadow-lg ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

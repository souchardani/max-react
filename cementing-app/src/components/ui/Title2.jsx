function Title2({ children, className }) {
  return (
    <h2
      className={`uppercase text-3xl font-bold tracking-tight text-gray-900 ${className}`}
    >
      {children}
    </h2>
  );
}

export default Title2;

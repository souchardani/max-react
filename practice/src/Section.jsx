const Section = ({ title, children, $color, ...props }) => {
  const classToUSe = $color ? "section has-background-success" : "section";
  return (
    <section className={classToUSe} {...props}>
      <div className="container has-text-centered">
        <h1 className="title">{title}</h1>
        <p className="subtitle">
          {children}
          <strong className="has-text-primary"> Bulma</strong>!
        </p>
      </div>
    </section>
  );
};

export default Section;

type CategoryCardProps = {
  icon: string;
  title: string;
  description: string;
};

export function CategoryCard({
  icon,
  title,
  description
}: CategoryCardProps) {
  return (
    <article className="card" id="categories">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="badge">Core Track</span>
    </article>
  );
}

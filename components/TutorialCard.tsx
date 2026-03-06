type TutorialCardProps = {
  level: string;
  title: string;
  description: string;
  duration: string;
};

export function TutorialCard({
  level,
  title,
  description,
  duration
}: TutorialCardProps) {
  return (
    <article className="card" id="featured">
      <span className="badge">{level}</span>
      <h3 style={{ marginTop: "1rem" }}>{title}</h3>
      <p>{description}</p>
      <div style={{ marginTop: "1rem", color: "var(--muted)", fontWeight: 700 }}>
        {duration}
      </div>
    </article>
  );
}

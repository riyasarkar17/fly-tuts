export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-panel">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">Aviation Learning, Reimagined</span>
              <h1>Learn to think like a pilot.</h1>
              <p>
                fly-tuts is a clean, modern starting point for a flight tutorial
                platform. Teach aviation basics, navigation, aircraft systems,
                weather, and radio communication with confidence.
              </p>

              <div className="button-row">
                <a href="#featured" className="button button-primary">
                  Browse Tutorials
                </a>
                <a href="#categories" className="button button-secondary">
                  View Categories
                </a>
              </div>
            </div>

            <div className="hero-card">
              <div className="metric">
                <span>Beginner Friendly</span>
                <strong>100%</strong>
              </div>
              <div className="metric">
                <span>Core Aviation Tracks</span>
                <strong>06</strong>
              </div>
              <div className="metric">
                <span>Future Ready</span>
                <strong>Scalable</strong>
              </div>
              <div className="metric">
                <span>Design Style</span>
                <strong>Modern + Elegant</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

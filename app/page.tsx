import { categories, tutorials } from "@/data/content";
import { CategoryCard } from "@/components/CategoryCard";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { TutorialCard } from "@/components/TutorialCard";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Categories</span>
              <h2>Start where every great pilot starts</h2>
              <p>
                Learn the language of the sky with short, practical lessons made
                for beginners and enthusiasts.
              </p>
            </div>

            <div className="grid grid-3">
              {categories.map((category) => (
                <CategoryCard key={category.title} {...category} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Featured Tutorials</span>
              <h2>Popular lessons from fly-tuts</h2>
              <p>
                Carefully structured lessons to make aviation concepts simple,
                clear, and exciting.
              </p>
            </div>

            <div className="grid grid-3">
              {tutorials.map((tutorial) => (
                <TutorialCard key={tutorial.title} {...tutorial} />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container cta">
            <div>
              <span className="eyebrow">Join the journey</span>
              <h2>From runway basics to sky confidence</h2>
              <p>
                Build a learning platform that can grow into a complete aviation
                education brand.
              </p>
            </div>

            <a href="#featured" className="button button-primary">
              Explore Tutorials
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

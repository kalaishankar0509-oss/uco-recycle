import "./App.css";
function App() {
  return (
    <div>
      <nav>
        <h2>UCO Recycle</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#how">How It Works</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main id="home">
        <section className="hero">
          <div>
            <h1>Turn Used Cooking Oil Into a Better Future</h1>

            <p>
              UCO Recycle helps collect used cooking oil and transform it
              into sustainable, eco-friendly products.
            </p>

            <button>Schedule a Collection</button>
          </div>
        </section>

        <section id="about">
          <h2>Why Recycle Used Cooking Oil?</h2>

          <div className="cards">
            <div className="card">
              <h3>♻️ Recycle</h3>
              <p>Give used cooking oil a useful second life.</p>
            </div>

            <div className="card">
              <h3>🌱 Eco Friendly</h3>
              <p>Support cleaner and more sustainable practices.</p>
            </div>

            <div className="card">
              <h3>💧 Collect</h3>
              <p>Make used oil collection simple and convenient.</p>
            </div>
          </div>
        </section>

        <section id="how">
          <h2>How It Works</h2>

          <div className="steps">
            <div>
              <strong>01</strong>
              <p>Collect your used cooking oil.</p>
            </div>

            <div>
              <strong>02</strong>
              <p>Schedule a collection.</p>
            </div>

            <div>
              <strong>03</strong>
              <p>We collect and recycle it.</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Start Recycling Today</h2>
          <p>Small changes can make a big difference.</p>
          <button>Get Started</button>
        </section>
      </main>

      <footer>
        <p>© 2026 UCO Recycle. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
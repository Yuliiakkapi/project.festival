const DefaultPage = () => {
  return (
    <div className="home-container">
      <main className="main-content">
        <section className="intro">
          <h2>Welcome to the Festival</h2>
          <p>
            Join us for an unforgettable experience with music, food, and fun!
          </p>
          <button className="cta-button">Get Tickets</button>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2025 Festival App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DefaultPage;

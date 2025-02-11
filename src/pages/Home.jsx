function Home() {
  return (
    <div className="container">
      <section className="mb-8">
        <img
          src="/assets/banner.jpg"
          alt="Shop Easy"
          className="w-full h-64 object-cover rounded shadow-lg"
        />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Welcome to Shop Easy!</h2>
        <p className="text-gray-700">
          Discover the best products at the beset prices.
        </p>
      </section>
    </div>
  );
}

export default Home;

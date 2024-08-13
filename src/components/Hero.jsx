function Hero() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-primary text-white">
        <img src="/assets/logo.png" alt="Logo" className="w-32 h-32 mb-4" />
        <h1 className="text-4xl font-bold mb-4">Welcome to Property Management System</h1>
        <p className="text-xl mb-8">Manage properties efficiently and effortlessly.</p>
        <a href="/login" className="bg-secondary text-white py-2 px-4 rounded">
          Get Started
        </a>
      </div>
    );
  }
  
  export default Hero;
  
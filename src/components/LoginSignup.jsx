import { useState } from 'react';

function LoginSignup() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => setIsSignUp(!isSignUp);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form className="flex flex-col space-y-4">
        {isSignUp && <input type="text" placeholder="Full Name" className="p-2 border rounded" />}
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <input type="password" placeholder="Password" className="p-2 border rounded" />
        <button className="bg-primary text-white py-2 rounded">{isSignUp ? 'Sign Up' : 'Login'}</button>
        <button className="bg-accent text-white py-2 rounded">
          Continue with Google
        </button>
      </form>
      <button onClick={toggleForm} className="text-secondary mt-4">
        {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
}

export default LoginSignup;

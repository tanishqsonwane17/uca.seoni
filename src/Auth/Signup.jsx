import React from "react";
export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#9CF6FB] px-4">
      <div className="w-full max-w-md bg-[#fdfdfddf] shadow-lg rounded-xl p-8">
        <img className="" src="" alt="Universal" />
        <h2 className="text-2xl font-bold text-center mb-2">Sign Up</h2>
        <p className="text-center text-gray-600 mb-6">
          Create your account to find your perfect match!
        </p>

        <form  action={'/'}  method="post" className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            required
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-400 text-white font-semibold py-2 rounded transition duration-200"
          >
            CREATE ACCOUNT
          </button>
        </form>

        <div className="text-center mt-4 text-gray-700">
          Already have an account?
          <a href="/login" className="text-pink-500 ml-1 hover:underline">Login</a>
        </div>

        <div id="signupLoader" className="mt-6 h-1 w-full bg-pink-100 rounded-full overflow-hidden">
          <div className="w-1/4 h-full bg-pink-500 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

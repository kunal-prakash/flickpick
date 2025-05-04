import Header from "./Header";

const Login = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="hidden sm:block absolute">
        <img
          className="h-screen"
          src="/assets/login_bg.jpg"
          alt="background-image"
        />
      </div>
      <form className="relative flex flex-col mx-auto  text-white px-20 py-10 w-[640px]  bg-black/60 sm:w-[450px]">
        <div className="text-3xl font-bold my-5">Sign In</div>
        <input
          className="border border-amber-100 rounded-lg px-5 py-2 my-5"
          type="text"
          placeholder="Email or mobile number"
        />
        <input
          className="border border-amber-100 rounded-lg px-5 py-2 mb-5"
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-500 rounded-lg px-5 py-2 mb-5">
          Sign In
        </button>
        <button>Use a sign-in code</button>
      </form>
    </div>
  );
};

export default Login;

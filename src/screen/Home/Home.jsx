import { loginUser } from "../../firebase-config";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";

function Home() {
  const {
    authState: { token },
    dispatch,
  } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto lg:mx-0 h-full flex items-center justify-center lg:block">
        <div className="relative z-10 pb-8 bg-white h-full sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
          </svg>

          <main className="mx-auto lg:h-full lg:flex lg:items-center max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">App to enrich your</span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  life with free friends and free rides
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Helps to overcome traffic, pollution, unavailability and
                expensive costs of other means of transport and allows
                possibility of growing network
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                    onClick={() =>
                      token
                        ? navigate('/profile')
                        : loginUser(dispatch, navigate)
                    }
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://res.cloudinary.com/fueledup-ecom/image/upload/v1652016224/routebuddies%20hero%20image.jpg"
          alt="hero image"
        />
      </div>
    </div>
  );
}

export { Home };

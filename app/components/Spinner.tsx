"use client";

export default function Spinner() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-bold animate-pulse">
          ⚡
        </span>
      </div>

      <h1 className="mt-6 text-2xl font-semibold animate-bounce tracking-wider">
        Loading...
      </h1>

      <div className="mt-4 w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-[loadingBar_2s_linear_infinite]" />
      </div>

      <style jsx>{`
        @keyframes loadingBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

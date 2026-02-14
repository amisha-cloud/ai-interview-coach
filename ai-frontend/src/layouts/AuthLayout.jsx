export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-violet-50 px-4">
      <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-2">
          {title}
        </h2>
        <p className="text-gray-500 text-center mb-8">
          {subtitle}
        </p>
        {children}
      </div>
    </div>
  );
}

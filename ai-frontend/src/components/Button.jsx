function Button({ text }) {
  return (
    <button
      className="w-full bg-purple-600 text-white py-2 rounded font-medium hover:bg-purple-700 transition"
    >
      {text}
    </button>
  )
}

export default Button

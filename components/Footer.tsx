export default function Footer() {
  return (
    <div className="h-auto w-full py-12 flex flex-col justify-center
      items-center gap-4"
    >
      <div className="text-container">
        <h2 className="text-subheading">
          © 2025 <span className="font-geist font-semibold">ReadmeBit</span>
        </h2>
      </div>
      <div className="text-container">
        <h2 className="text-subheading"
        >
          Built and maintained by
          <a
            className="ml-1 underline hover:text-blue-700"
            target="_blank"
            href="https://najibdev.vercel.app"
          >
            Najib Hossain
          </a>
        </h2>
      </div>
    </div>
  )
}
export default function Footer() {

  const d = new Date();
  const currentYear = d.getFullYear();

  return (
    <div className="h-auto w-full py-12 flex flex-col justify-center
      items-center gap-4"
    >
      <div className="text-container">
        <h2 className="text-subheading">
          © {currentYear} ReadmeBit
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
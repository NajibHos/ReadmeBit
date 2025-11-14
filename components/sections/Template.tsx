import TemplateSelector from "../TemplateSelector";

export default function Templates() {
  return (
    <div className="section-container">
      <div className="section-layout">
        <div className="h-auto w-full flex flex-col gap-4">
          <div className="text-container">
            <h2 className="text-heading">
              README Templates
            </h2>
          </div>
          <div className="text-container">
            <p className="text-subheading">
              Get started quickly with our professionally designed pre-made README
              templates.
            </p>
          </div>
        </div>

        {/* Template cards */}
        <TemplateSelector />
      </div>
    </div>
  )
}
import { DotPattern } from "../magicui/dot-pattern";
import CTAButton from "../CTAButton";

export default function Hero() {
  return (
    <div className="h-[80vh] lg:h-[90vh] w-full flex justify-center
      items-center relative overflow-hidden bg-transparent"
    >
      <div className="h-auto w-[90%] flex flex-col justify-center
        items-center gap-8 lg:gap-7"
      >
        <div className="h-auto w-full lg:w-[50%] text-center z-50">
          <h2 className="text-3xl lg:text-5xl font-workSans font-bold
            leading-10 lg:leading-16 text-gray-900 dark:text-white"
          >
            Create your GitHub <br /> README the easy way.
          </h2>
        </div>
        <div className="text-container z-50">
          <h2 className="text-subheading">
            Select widgets, edit with ease, preview instantly, and export
            your README.md ⚡
          </h2>
        </div>

        {/* CTA */}
        <CTAButton />
      </div>

      {/* dot pattern animation */}
      <DotPattern
        glow={true}
        className="h-auto w-full absolute inset-0 z-0 size-full"
      />

    </div>
  )
}
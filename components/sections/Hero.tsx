import { DotPattern } from "../magicui/dot-pattern";
import CTAButton from "../CTAButton";
import ImportGithubDialog from "../ImportGithubDialog";

export default function Hero() {
  return (
    <div className="h-[85vh] lg:h-[90vh] w-full flex justify-center
      items-center relative overflow-hidden bg-transparent"
    >
      <div className="h-auto w-[90%] flex flex-col justify-center
        items-center gap-7 lg:gap-5"
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
        <div className="mt-3 lg:mt-4 flex justify-center items-center gap-4">
          <CTAButton />
          <span>
            <ImportGithubDialog />
          </span>
        </div>

        {/* producthunt badge */}
        <div className="mt-6 flex justify-center items-center">
          <a href="https://www.producthunt.com/products/readmebit?embed=true&amp;utm_source=badge-featured&amp;utm_medium=badge&amp;utm_campaign=badge-readmebit" target="_blank" rel="noopener noreferrer"><img alt="ReadmeBit - Create your github readme the easy way | Product Hunt" width="250" height="54" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1215030&amp;theme=light&amp;t=1785930189752"/></a>
        </div>
      </div>

      {/* dot pattern animation */}
      <DotPattern
        className="h-auto w-full absolute inset-0 z-0 size-full"
      />

    </div>
  )
}
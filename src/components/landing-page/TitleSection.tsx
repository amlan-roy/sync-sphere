import React from "react";

type TitleSectionProps = {
  title: string;
  subheading?: string;
  pill: string;
};

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  subheading,
  pill,
}) => {
  return (
    <React.Fragment>
      <section
        className="
    flex flex-col gap-4 justify-center items-start
    md:items-center
    "
      >
        <article
          data-testid="title-section__pill"
          className="
            rounded-full p-[1px] text-sm
            dark:bg-gradient-to-r dark:from-brand-primaryBlue dark:to-brand-primaryPurple
            "
        >
          <div
            className="
            rounded-full px-3 py-1
            dark:bg-black
            "
          >
            {pill}
          </div>
        </article>
        {subheading ? (
          <>
            <h2
              data-testid="title-section__title"
              className="text-left text-3xl font-semibold
            md:text-centre
            sm:text-5xl"
            >
              {title}
            </h2>
            <p
              data-testid="title-section__subheading"
              className="dark:text-washed-purple-700
        sm:max-w-[450px]
        md:text-center"
            >
              {subheading}
            </p>
          </>
        ) : (
          <h1
            data-testid="title-section__title"
            className="text-left text-4xl font-semibold
            md:text-centre
            sm:text-6xl"
          >
            {title}
          </h1>
        )}
      </section>
    </React.Fragment>
  );
};
export default TitleSection;

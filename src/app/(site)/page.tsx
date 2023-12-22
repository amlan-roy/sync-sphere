import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { randomUUID } from "crypto";
import { twMerge } from "tailwind-merge";
import Banner from "../../../public/appbanner.png";
import Cal from "../../../public/cal.png";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { CLIENTS, USERS } from "@/lib/constants";
import CustomCard from "@/components/landing-page/CustomCard";
import TitleSection from "@/components/landing-page/TitleSection";

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <section
        className="
        overflow-hidden
        px-4 mt-10 gap-4
        sm:flex sm:flex-col sm:px-6
        md:justify-center md:items-center"
      >
        <TitleSection
          pill="✨ Your Workspace, Perfected!"
          title="An Integrated Collaboration Platform"
        />
        <div
          className="
          bg-white p-0.5 mt-1.5 rounded-xl bg-gradient-to-r from-primary to-brand-primaryBlue
          sm:w-[300px]"
        >
          <Button
            variant="secondary"
            className="
          w-full rounded-[10px] p-6 text-2xl bg-background"
          >
            Get Sync Sphere Free!
          </Button>
        </div>
        <div
          className="
        w-[750px] flex justify-center items-center mt-[-40px] relative ml-[-50px]
        md:mt-[-90px]
        sm:w-full sm:ml-0"
        >
          <Image src={Banner} alt="Application Banner" />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
      <section className="relative">
        <div
          className="overflow-hidden flex
          after:content[''] after:dark:from-brand-dark after:to-transparent after:from-background after:bg-gradient-to-l after:right-0 after:bottom-0 after:top-0 after:w-20 after:z-10 after:absolute
          before:content[''] before:dark:from-brand-dark before:to-transparent before:from-background before:bg-gradient-to-r before:left-0 before:top-0 before:bottom-0 before:w-20 before:z-10 before:absolute"
        >
          {[...Array(2)].map((arr) => (
            <div key={arr} className="flex flex-nowrap animate-slide">
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className=" relative w-[200px] m-20 shrink-0 flex items-center"
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        className="px-4 flex justify-center items-center flex-col relative
      sm:px-6"
      >
        <div className="w-[30%] blur-[120px] rounded-full h-32 absolute bg-brand-primaryPurple -z-10 top-22"></div>
        <TitleSection
          title="Keep track of all your meetings in one place"
          subheading="Capture your ideas, thoughts, and meeting notes in a structured and organised manner"
          pill="Features"
        />
        <div
          className="mt-10 max-w-[450px] flex justify-center items-center relative rounded-2xl border-8 border-washed-purple-300  border-opacity-10
          sm:ml-0
        "
        >
          <Image src={Cal} alt="Banner" className="rounded-2xl" />
        </div>
      </section>
      <section className="relative">
        <div
          className="w-full
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-100
          top-56
        "
        />
        <div
          className="mt-20
          px-4
          sm:px-6 
          flex
          flex-col
          overflow-x-hidden
          overflow-visible
        "
        >
          <TitleSection
            title="Trusted by all"
            subheading="Join thousands of satisfied users who rely on our platform for their 
            personal and professional productivity needs."
            pill="Testimonials"
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={randomUUID()}
              className={twMerge(
                clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                  "flex-row-reverse": index === 1,
                  "animate-[slide_250s_linear_infinite]": true,
                  "animate-[slide_250s_linear_infinite_reverse]": index === 1,
                  "ml-[100vw]": index === 1,
                }),
                "hover:paused"
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="w-[500px]
                  shrink-0s
                  rounded-xl
                  dark:bg-gradient-to-t
                  dark:from-border dark:to-background
                "
                  cardHeader={
                    <div
                      className="flex
                      items-center
                      gap-4
                  "
                    >
                      <Avatar>
                        <AvatarImage src={`/avatars/${index + 1}.png`} />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          {testimonial.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">
                      {testimonial.message}
                    </p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default HomePage;

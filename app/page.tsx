"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  const [copied, setCopied] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const email = "adityasuyashgupta@gmail.com";

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section>
      <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">hey 👋</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          i'm Adi - a self-taught dev and kinesthetic
          <br />
          learner who's always building something new ⚡
        </p>
        <p>
          for the past 2.5+ years,
          <br />
          i've been shipping web & onchain apps, advocating for devs and
          building sustainable developer communities 🌍
        </p>
        <p>
          to share what i've learned, we're building <br />
          <a
            href={socialLinks.techbastic}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <em>Tech Bastic</em>
            </strong>
          </a>{" "}
          - an open-source community that helps you become a self-taught web3
          developer - where we learn, build, and collaborate 💻
        </p>
        <p>
          i love creating tech content, hacking at hackathons, <br />
          connecting with folks in the community, and travelling solo ✈️
        </p>
        <p>
          want to connect? 🤝 <br />
          grab a time slot{" "}
          <a
            href={socialLinks.calcom}
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>here</em>
          </a>{" "}
          (or) shoot me an{" "}
          <a
            onClick={copyEmail}
            className="cursor-pointer relative inline-block text-green-700 font-medium"
          >
            <em>email</em>
            {isHydrated && copied && (
              <span
                className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1 rounded bg-green-100 text-green-800 text-xs shadow transition-opacity duration-300 whitespace-nowrap
                after:content-[''] after:absolute after:left-[-6px] after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-transparent after:border-r-green-100"
              >
                copied!
              </span>
            )}
          </a>
          .
        </p>
      </div>
    </section>
  );
}

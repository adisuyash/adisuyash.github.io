import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
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
      <h1 className="mb-8 text-2xl font-medium">hey {"👋"}</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          i'm Adi - a self-taught dev and kinesthetic
          <br />
          learner who's always building something new ⚡
        </p>
        <p>
          {/* been around for 2.5+ years - <br /> learning and building PWAs (progressive web apps), dApps (decentralized apps) and developer communities. */}
          for the past 2.5+ years,
          <br /> i've been shipping web & onchain apps, advocating for devs and
          helping grow developer communities 🌍
        </p>
        <p>
          to share what i've learned, we're building <br />{" "}
          <a href={socialLinks.techbastic} target="_blank">
            <strong>
              {" "}
              <em>Tech Bastic</em>
            </strong>
          </a>{" "}
          - an open-source community that helps you become a self-taught web3
          developer - where we learn, build, and collaborate 💻
        </p>
        <p>
          i love creating tech content, hacking at hackathons, <br /> connecting
          with folks in the community, and travelling solo ✈️
        </p>
        <p>
          want to connect? {"🤝"} <br /> grab a time slot{" "}
          <a href={socialLinks.calcom} target="_blank">
            <em>here</em>
          </a>{" "}
          {/* <br /> */}
          (or) shoot me an{" "}
          <a href={socialLinks.email} target="_blank">
            <em>email</em>
          </a>
          {"."}
        </p>
      </div>
    </section>
  );
}

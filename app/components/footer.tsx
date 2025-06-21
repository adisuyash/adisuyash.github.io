"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { socialLinks } from "app/lib/config";

// Simple Tooltip
function Tooltip({ text }: { text: string }) {
  return (
    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs text-neutral-600 dark:text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      {text}
    </span>
  );
}

// Single Icon Component
function SocialLink({
  href,
  icon: Icon,
  tooltip,
}: {
  href: string;
  icon: React.ElementType;
  tooltip: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative text-xl text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-transform transform hover:scale-110"
    >
      <Tooltip text={tooltip} />
      <Icon />
    </a>
  );
}

// Group of Icons
function SocialLinks() {
  return (
    <div className="flex gap-4 mt-3 justify-center sm:justify-end">
      <SocialLink href={socialLinks.github} icon={FaGithub} tooltip="GitHub" />
      <SocialLink
        href={socialLinks.twitter}
        icon={FaXTwitter}
        tooltip="Twitter"
      />
      <SocialLink
        href={socialLinks.linkedin}
        icon={FaLinkedinIn}
        tooltip="LinkedIn"
      />
      <SocialLink
        href={socialLinks.youtube}
        icon={TbBrandYoutubeFilled}
        tooltip="YouTube"
      />
      <SocialLink
        href={socialLinks.instagram}
        icon={FaInstagram}
        tooltip="Instagram"
      />
      <a
        href="/rss.xml"
        target="_self"
        className="group relative text-xl text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-transform transform hover:scale-105"
      >
        <Tooltip text="RSS" />
        <FaRss />
      </a>
    </div>
  );
}

// Footer Wrapper
export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 pt-6 pb-8">
      <div className="max-w-[960px] px-6 sm:px-4 mx-auto flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center sm:text-left">
          Built by{" "}
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            @adisuyash
          </a>
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}

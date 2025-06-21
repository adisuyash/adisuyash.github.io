import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Snapshots from life, my workspace, and travel.",
};

export default function Gallery() {
  return (
    <section>
      {/* Profile Pictures */}
      <h1 className="mb-8 text-2xl font-medium">Gallery</h1>
      <h2 className="mt-12 mb-6 text-xl font-semibold">Profile Pictures</h2>
      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/self.jpg", alt: "Adi smiling outdoors" },
          { src: "/photos/selfquack.png", alt: "Casual close-up of Adi" },
        ]}
      />

      {/* Workspace & Tech Setup */}
      <h2 className="mt-12 mb-6 text-xl font-semibold">My Workspace</h2>
      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/tablet.jpg", alt: "Tablet on a minimalist desk" },
          {
            src: "/photos/setup.png",
            alt: "Primary workspace setup with ambient lighting",
          },
          {
            src: "/photos/setup2.jpg",
            alt: "Alternate angle of the workspace",
          },
          {
            src: "/photos/laptop-ram-upgrade.jpg",
            alt: "Installing RAM on a laptop",
          },
        ]}
      />

      {/* Airplane Aesthetic Shots */}
      <h2 className="mt-12 mb-6 text-xl font-semibold">In Transit</h2>
      <ImageGrid
        columns={4}
        images={[
          {
            src: "/photos/airplane.jpg",
            alt: "Airplane window view - clear sky",
          },
          {
            src: "/photos/airplane2.jpg",
            alt: "Cinematic airplane wing during sunset",
          },
        ]}
      />

      {/* Full-width Banner */}
      <h2 className="mt-12 mb-6 text-xl font-semibold">Banner</h2>
      <div className="w-full max-w-[960px] mx-auto mb-12">
        <Image
          src="/photos/banner.png"
          alt="AdiSuyash Banner"
          width={960}
          height={240}
          className="rounded-xl object-cover w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}

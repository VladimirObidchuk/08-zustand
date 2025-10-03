import React from "react";
import css from "./not-found.module.css";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Notes page not found",
    description: "The page you are looking for does not exist",
    openGraph: {
      title: "Notes page not found",
      description: "The page you are looking for does not exist",

      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
          alt: "image for notes hub",
        },
      ],
      type: "article",
    },
  };
}

const notFound = () => {
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default notFound;

import * as React from 'react';
import type { HeadFC } from 'gatsby';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/index';
import { Footer } from '@/components/Footer';

const IndexPage = () => {
  return (
    <main className="container p-5 md:w-[700px] mx-auto pt-36 flex flex-col items-center text-primary mb-16">
      <h1 className="text-3xl font-extrabold">Persian Data</h1>
      <h4 className="text-base font-normal mt-4 text-gray-light">Persian practical data for programmers</h4>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {categories.map(category => (
          <CategoryCard {...category} />
        ))}
        <a
          href="https://github.com/AmirhBeigi/persian-data/issues/new"
          target="_blank"
          rel="noreferrer"
          className="p-5 rounded-lg flex items-center justify-center border border-solid border-gray-light border-opacity-20 cursor-pointer"
        >
          <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.9999 8.27313C18.5522 8.27313 18.9999 8.72085 18.9999 9.27313V17.2731H26.9999C27.5522 17.2731 27.9999 17.7208 27.9999 18.2731C27.9999 18.8254 27.5522 19.2731 26.9999 19.2731H18.9999V27.2731C18.9999 27.8254 18.5522 28.2731 17.9999 28.2731C17.4476 28.2731 16.9999 27.8254 16.9999 27.2731V19.2731H8.99988C8.44759 19.2731 7.99988 18.8254 7.99988 18.2731C7.99988 17.7208 8.44759 17.2731 8.99988 17.2731H16.9999V9.27313C16.9999 8.72085 17.4476 8.27313 17.9999 8.27313Z"
              fill="#22282F"
            />
          </svg>
        </a>
      </div>
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

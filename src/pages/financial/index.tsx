import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { financial } from '@/data/financial';
import { ConstantView } from '@/components/ConstantView';
import { Footer } from '@/components/Footer';
import { BackButton } from '@/components/BackButton';

const IndexPage = () => {
  return (
    <main className="relative container p-5 md:w-[700px] mx-auto pt-36 flex flex-col items-center text-primary mb-16">
      <BackButton />
      <h1 className="text-3xl font-extrabold">Financial</h1>
      <h4 className="text-base font-normal mt-4 text-gray-light">Persian practical data for programmers</h4>
      {financial.map(item => (
        <ConstantView {...item} />
      ))}
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Financial</title>
    <meta name="description" content="Persian practical data for programmers" />
  </>
);

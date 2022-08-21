import * as React from 'react';
import type { HeadFC } from 'gatsby';

const IndexPage = () => {
  return (
    <main>
      <h1 className="text-gray-600">Hello</h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

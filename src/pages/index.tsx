import * as React from 'react';
import type { HeadFC } from 'gatsby';

const IndexPage = () => {
  return (
    <main className="container mx-auto">
      <h1 className="text-gray-600">دیتای کاربردی ایران برای برنامه نویسان</h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

import * as React from 'react';
import { Link } from 'gatsby';
import { LeftChevron } from './icons/leftChevron';

export const BackButton = () => {
  return (
    <Link to="/" className="absolute top-0 left-0 p-8 md:px-5 flex items-center space-x-1">
      <LeftChevron />
      <span className="font-medium text-sm">‌Home</span>
    </Link>
  );
};

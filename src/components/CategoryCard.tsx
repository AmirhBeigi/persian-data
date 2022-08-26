import { Link } from 'gatsby';
import * as React from 'react';

interface CategoryCardProps {
  title: string;
  count: number;
  link: string;
  icon: string;
}

export const CategoryCard = (props: CategoryCardProps) => {
  const { title, count, icon, link } = props;

  return (
    <Link to={link} className="p-5  w-full rounded-lg flex items-center space-x-4 bg-gray-light bg-opacity-20 cursor-pointer">
      <img src={icon} alt="" width={30} />
      <div className="flex flex-col">
        <h4 className="text-lg font-semibold">{title}</h4>
        <span className="text-sm font-medium text-gray-dark">{count} constants</span>
      </div>
    </Link>
  );
};
export default CategoryCard;

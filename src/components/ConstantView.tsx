import * as React from 'react';
import { useState } from 'react';
import CodePreview from './CodePreview';
import { CopyIcon } from './icons/Copy';
import { GithubIcon } from './icons/Github';

interface ConstantViewProps {
  title: string;
  description?: string;
  data: object;
}

export const ConstantView = (props: ConstantViewProps) => {
  const { title, description, data, githubSrc } = props;
  const [isCopy, setIsCopy] = useState(false);
  const copyJson = () => {
    setIsCopy(true);
    navigator.clipboard.writeText(JSON.stringify(data));
    setTimeout(() => {
      setIsCopy(false);
    }, 700);
  };

  return (
    <div className="mt-12 w-full">
      <h2 className="font-bold">{title}</h2>
      {description && <span className="text-sm text-gray-dark mb-4">{description}</span>}
      <CodePreview code={data} className="mt-4" />
      <div className="flex justify-between mt-2">
        <button
          className="text-xs flex items-center space-x-2 font-medium h-9 rounded-md px-5 border border-gray-light border-opacity-40 hover:border-opacity-100"
          onClick={copyJson}
        >
          {isCopy ? (
            'Copied'
          ) : (
            <>
              <CopyIcon />
              <span>Copy JSON</span>
            </>
          )}
        </button>
        <a
          href={githubSrc}
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2 opacity-70 hover:opacity-100 cursor-pointer"
        >
          <span className="text-xs text-gray-dark">View this JSON in github</span>
          <GithubIcon className="fill-gray-dark" />
        </a>
      </div>
    </div>
  );
};

export default CodePreview;

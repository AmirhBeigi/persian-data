import * as React from 'react';
import { useState } from 'react';
import { CSVLink } from 'react-csv';
import { isKeyObject } from 'util/types';
import CodePreview from './CodePreview';
import { CopyIcon } from './icons/Copy';
import { GithubIcon } from './icons/Github';

interface ConstantViewProps {
  title: string;
  description?: string;
  data: object[] | string[];
  githubSrc: string;
}

export const ConstantView = (props: ConstantViewProps) => {
  const { title, description, data, githubSrc } = props;
  const [isCopy, setIsCopy] = useState(false);
  const [forammtedDataForCsvData, setForammtedDataForCsvData] = useState<object[]>([]);

  const copyJson = () => {
    setIsCopy(true);
    navigator.clipboard.writeText(JSON.stringify(data));
    setTimeout(() => {
      setIsCopy(false);
    }, 700);
  };

  React.useLayoutEffect(() => {
    forammtedDataForCsv();
  }, [data]);

  const forammtedDataForCsv = () => {
    if (typeof data[0] === 'string') {
      const newArray = data.map(item => [item]);
      newArray.unshift([title]);
      setForammtedDataForCsvData(newArray);
      return;
    }
    setForammtedDataForCsvData(data);
  };

  return (
    <div className="mt-12 w-full">
      <h2 className="font-bold">{title}</h2>
      {description && <span className="text-sm text-gray-dark mb-4">{description}</span>}
      <CodePreview code={data} className="mt-4" />
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between mt-2">
        <div className="flex space-x-1">
          <button
            className="text-xs flex items-center space-x-1 font-medium h-8 rounded-md px-3 border border-gray-light border-opacity-40 hover:border-opacity-100"
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
          <CSVLink
            data={forammtedDataForCsvData}
            filename={title}
            className="text-xs flex items-center space-x-1 font-medium h-8 rounded-md px-3 border border-gray-light border-opacity-40 hover:border-opacity-100"
          >
            Download CSV
          </CSVLink>
        </div>

        <a
          href={githubSrc}
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2 opacity-70 hover:opacity-100 cursor-pointer self-center md:self-end"
        >
          <span className="text-xs text-gray-dark">View this JSON in github</span>
          <GithubIcon className="fill-gray-dark" />
        </a>
      </div>
    </div>
  );
};

export default CodePreview;

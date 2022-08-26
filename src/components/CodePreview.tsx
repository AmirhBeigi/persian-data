import * as React from 'react';
import ReactJsonSyntaxHighlighter from 'react-json-syntax-highlighter';

interface CodePreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  code: object;
}

export const CodePreview = (props: CodePreviewProps) => {
  return (
    <div className={`w-full h-96 rounded-lg bg-gray-light bg-opacity-20 p-10 text-sm font-medium overflow-auto ${props.className ?? ''}`}>
      <ReactJsonSyntaxHighlighter obj={props.code} />
    </div>
  );
};

export default CodePreview;

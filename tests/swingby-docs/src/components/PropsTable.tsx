import React from 'react'

import './PropsTable.scss'

interface PropsTableProps {
  title: string;
  contents: {
    name: string;
    type: string;
    default: string;
    desc: string;
  }[];
}

const PropsTable = (props: PropsTableProps) => {
  return (
    <div
      className="props-table"
    >
      <h2>{props.title}</h2>
      <section>
        <div
          className="props-table__th row"
        >
          <div className="col-2">
            Name
          </div>
          <div className="col-2">
            Type
          </div>
          <div className="col-2">
            Default
          </div>
          <div className="col-6">
            Description
          </div>
        </div>
        {props.contents.map((content, index) => (
          <div className="props-table__tr row"
            key={index}
          >
            <div className="props-table__td col-2 text-weight-bold">
              {content.name}
            </div>
            <div className="props-table__td col-2"
              style={{
                fontFamily: 'monospace',
                wordWrap: 'break-word',
              }}
            >
              {content.type}
            </div>
            <div className="props-table__td col-2"
              style={{
                fontFamily: 'monospace',
              }}
            >
              {content.default}
            </div>
            <div className="props-table__td col-6">
              {content.desc}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default PropsTable

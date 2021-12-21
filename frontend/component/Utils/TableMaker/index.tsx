import * as React from 'react';

export function TableMaker({ attributes }) {
    // eslint-disable-next-line react/prop-types
    const lines = attributes.map((attr: any, index: number) => {
        const headers = Object.keys(attr);

        return (
            <tr key={index}>
                {headers.map((header: string, index: number) => {
                    return <td key={index}>{attr[header]}</td>;
                })}
            </tr>
        );
    });

    const headers = attributes[0] ? Object.keys(attributes[0]) : [];

    return (
        <div className="tableMaker" >
            <table>
                <thead>
                    <tr>
                        {headers.map((header: string, index: number) => {
                            return <th key={index}>{header}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>{lines}</tbody>
            </table>
        </div>
    );
}

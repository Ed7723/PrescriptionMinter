//This component will load a table
import {COLUMNS} from './tableheader';
import {useTable} from 'react-table';
import { useState, useEffect, useMemo } from 'react';
export function Table() {
    const[data, setData] = useState([]);

    const columns = useMemo(()=> COLUMNS,[]);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    useEffect(()=>{
        const fetchData = async ()=>{
            const response =  await fetch("http://localhost:8000/routing/");
                if (!response.ok) {
                    const message = `An error occurred: ${response.statusText}`;
                    window.alert(message);
                    return;
                };
                console.log(response);
                setData(response);
        };
        fetchData();
    });

    return (
        <>
            <div className="container mx-auto px-4 sm:px-8 max-w-3xl min-h-screen">
                <div className="py-8">
                    <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                        <h2 className="text-2xl leading-tight">
                            Users
                        </h2>
                        <div className="text-end">
                            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                <div className=" relative ">
                                    <input type="text" id="form-subscribe-Filter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal" {...getTableProps()}>
                                <thead>
                                    {headerGroups.map((headerGroup) => (
                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                            {headerGroup.headers.map((column) => (
                                                <th {...column.getHeaderProps()}>
                                                    {column.render('Header')}
                                                    <div>
                                                        {column.canFilter ? column.render('Filter') : null}
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody {...getTableBodyProps()}>
                                    {rows.map((row) => {
                                        prepareRow(row);
                                        return (
                                            <tr {...row.getRowProps()}>
                                                {row.cells.map((cell) => {
                                                    return (
                                                        <td {...cell.getCellProps()}>
                                                            {cell.render('Cell')}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
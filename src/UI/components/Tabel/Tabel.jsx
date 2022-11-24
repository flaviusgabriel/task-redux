// src/components/pagination.table.js
import React from "react";

import { useTable, usePagination } from "react-table";
import "bootstrap/dist/css/bootstrap.min.css";

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2, pageSize: 5 },
    },
    usePagination
  );

  // Render the UI for your table
  return (
    <div>
      <table className="container table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <ul className="pagination container">
        <li
          className="page-item"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <a className="page-link">First</a>
        </li>
        <li
          className="page-item"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <a className="page-link">{"<"}</a>
        </li>
        <li
          className="page-item"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <a className="page-link">{">"}</a>
        </li>
        <li
          className="page-item"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <a className="page-link">Last</a>
        </li>
        <li>
          <a className="page-link">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </a>
        </li>
      </ul>
    </div>
  );
}

function PaginationTableComponent() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Completed",
        accessor: "completed",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "CreatedAt",
        accessor: "createdAt",
      },
      {
        Header: "UpdatedAt",
        accessor: "updatedAt",
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <button className="btn btn-success mr-2">Edit</button>

              <button className="btn btn-danger">Delete</button>
            </div>
          );
        },
      },
    ],
    []
  );

  const data = [
    {
      completed: "true",
      description: "Here comes some text for description",
      createdAt: "01 / 02 / 2022",
      updatedAt: "01 / 02 / 2022",
      actions: 75,
    },
    {
      completed: "true",
      description: "Here comes some text for description",
      createdAt: "01 / 02 / 2022",
      updatedAt: "01 / 02 / 2022",
      actions: 75,
    },
    {
      completed: "true",
      description: "Here comes some text for description",
      createdAt: "01 / 02 / 2022",
      updatedAt: "01 / 02 / 2022",
      actions: 75,
    },
    {
      completed: "true",
      description: "Here comes some text for description",
      createdAt: "01 / 02 / 2022",
      updatedAt: "01 / 02 / 2022",
      actions: 75,
    },
    {
      completed: "true",
      description: "Here comes some text for description",
      createdAt: "01 / 02 / 2022",
      updatedAt: "01 / 02 / 2022",
      actions: 75,
    },
    {
      completed: "true",
      description: "Here comes some text for description",
      createdAt: "01 / 02 / 2022",
      updatedAt: "01 / 02 / 2022",
      actions: 75,
    },
    {
      completed: "true",
      description: "Here comes some text for description",
      createdAt: "01 / 02 / 2022",
      updatedAt: "01 / 02 / 2022",
      actions: 75,
    },
    {
      completed: "true",
      description: "Here comes some text for description",
      createdAt: "01 / 02 / 2022",
      updatedAt: "01 / 02 / 2022",
      actions: 75,
    },
  ];
  console.log(JSON.stringify(data));

  return <Table columns={columns} data={data} />;
}

export default PaginationTableComponent;

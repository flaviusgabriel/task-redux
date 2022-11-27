// src/components/pagination.table.js
import React, { useEffect, useState } from "react";

import { useTable, usePagination } from "react-table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import EditTaskModal from "../Modal/EditTaskModal/EditTaskModal";
import AddTaskModal from "../Modal/AddTaskModal/AddTaskModal";
import { deleteTaskDetails } from "../../../logic/services/TaskService";
import { deleteTask } from "../../../logic/actions/TaskAction";
import CheckInput from "../CheckInput/CheckInput";

const Table = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow, //atat
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
      initialState: { pageIndex: 0, pageSize: 5 },
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
                  // <EditTaskModal object={cell} />;
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

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
};

const PaginationTableComponent = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.tasks);

  const columns = React.useMemo(
    () => [
      {
        Header: "Completed",
        accessor: " completed",
        Cell: (props) => {
          return (
            <div>
              <CheckInput object={props.row.original} />
            </div>
          );
        },
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
          return (
            <div>
              <EditTaskModal object={props.row.original} />

              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteTaskDetails(props.row.original._id)
                    .then(() => {
                      dispatch(deleteTask(props.row.original._id));
                    })
                    .catch((error) => {
                      console.error(error);
                    });
                }}
              >
                Delete
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  return <Table columns={columns} data={data} />;
};

export default PaginationTableComponent;

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import "./table.css"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TableComponent = ({
  headers = ["year", "month", "day", "predicted_temp"],
  sortedData,
}) => {
  const renderHeaders = (headers) => {
    return headers.map((key, index) => {
      return (
        <TableCell component="th" scope="row">
          {key.toUpperCase()}
        </TableCell>
      );
    });
  };
  const renderTableData = (tableData) => {
    return tableData !== null
      ? tableData.map((data) => {
          const { year, month, day, predicted_temp } = data;
          return (
            <TableRow>
              <TableCell component="th" scope="row">
                {year}
              </TableCell>
              <TableCell component="th" scope="row">
                {month}
              </TableCell>
              <TableCell component="th" scope="row">
                {day}
              </TableCell>
              <TableCell component="th" scope="row">
                {predicted_temp}
              </TableCell>
            </TableRow>
          );
        })
      : null;
  };
  const classes = useStyles();
  return (
    <div>
      {/* <table id="students">
        <tbody>
          <tr>{renderHeaders(headers)}</tr>
          {renderTableData(sortedData)}
        </tbody>
      </table> */}

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>{renderHeaders(headers)}</TableRow>
          </TableHead>
          <TableBody>{renderTableData(sortedData)}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default TableComponent;


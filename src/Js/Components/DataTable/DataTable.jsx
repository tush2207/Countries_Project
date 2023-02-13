import React, { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, TableFooter, TablePagination } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import CountrtiesDetails from "../Hooks/Context/Context";
import Title from "../Common/Title/Title";

const columns = [
  {
    id: "flags_imgUrl",
    label: "Flag",
    align: "left",
  },
  { id: "CommonName", label: "Name", align: "left" },
  { id: "area", label: "Area", align: "left" },
  {
    id: "population",
    label: "Population",
    align: "left",
  },
  {
    id: "continents",
    label: "Continents",
    align: "left",
  },
  {
    id: "Region",
    label: "Region",
    align: "left",
  },
  {
    id: "Subregion",
    label: "Subregion",
    align: "left",
  },
];
export default function DataTable() {
  const data = useContext(CountrtiesDetails);
  const row = data;
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(1);
  };

  const SelectCOuntry = (value) => {
    navigate(`/CountryDetails/${value}`);
  };

  return (
    <Box>
      <Title Title={"Countries Data Table"} />
      <TableContainer component={Paper}>
        <Table aria-label="caption table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontSize: "20px",
                    background: "#dfdfdf",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {row
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row, index) => {
                return (
                  <TableRow key={index} hover>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <>
                          {column.id === "flags_imgUrl" ? (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{
                                cursor: "pointer",
                              }}
                              onClick={() => SelectCOuntry(row.CommonName)}
                            >
                              <Avatar
                                src={value}
                                key={column.id}
                                align={column.align}
                              />
                            </TableCell>
                          ) : (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{
                                cursor: "pointer",
                              }}
                              onClick={() => SelectCOuntry(row.CommonName)}
                            >
                              {value}
                            </TableCell>
                          )}
                        </>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 25, 50, 75, 100]}
                count={row?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
}

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
} from "@mui/material";
import { orderBy as lodashOrderBy } from "lodash";
import { ReactElement, useMemo, useState } from "react";
import { COLOR_BLUE } from "../../constants/Colors";
import { capitalizeFirstLetter } from "../../utils/StringUtils";
import "./CTable.scss";
import { TabDataModel } from "./TabDataModel";
import { TabHeadCellModel } from "./TabHeadCellModel";

interface TableProps<T extends TabDataModel, R extends TabHeadCellModel> {
  title: string;
  data: T[];
  headCells: R[];
  onRowSelected: (id: string) => void;
  actionButtons?: ReactElement[];
}

interface EnhancedTableHead<T extends TabHeadCellModel, R extends TabDataModel> {
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  order: Order;
  orderBy: keyof R;
  rowCount: number;
  headCells: T[];
}

enum Order {
  ASC = "asc",
  DESC = "desc",
}

function CTable<T extends TabDataModel, R extends TabHeadCellModel>(props: TableProps<T, R>) {
  const [order, setOrder] = useState<Order>(Order.ASC);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState<string>("");
  const rows = props.data;

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
    property = property.toLowerCase();
    const isAsc = orderBy === property && order === Order.ASC;
    setOrder(isAsc ? Order.DESC : Order.ASC);
    setOrderBy(property);
  };

  const handleClick = (id: string) => {
    props.onRowSelected(id);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(() => {
    return lodashOrderBy(rows, [orderBy], [order]).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage,
    );
  }, [order, orderBy, page, rows, rowsPerPage]);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Toolbar
            sx={{
              pl: { sm: 2 },
              pr: { xs: 1, sm: 1 },
            }}
          >
            <Typography
              sx={{ flex: "1 1 100%" }}
              variant="h6"
              id="tableTitle"
              component="div"
              className="table-title"
              color={COLOR_BLUE}
            >
              {props.title}
            </Typography>
          </Toolbar>
          <Box sx={{ my: "auto", pr: 2 }}>{props.actionButtons}</Box>
        </Box>
        <TableContainer>
          <Table sx={{ minWidth: 750, tableLayout: "fixed" }} aria-labelledby="tableTitle">
            <CTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={props.headCells}
            />
            <TableBody>
              {visibleRows.map((row) => {
                return (
                  <TableRow
                    className="TableRow"
                    hover
                    onClick={() => handleClick(row.id)}
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                  >
                    {props.headCells.map((cell, index) => {
                      return (
                        <TableCell align={cell.align} key={index}>
                          {convertToTabValue(row[cell.label])}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

function CTableHead<T extends TabHeadCellModel, R extends TabDataModel>(
  props: EnhancedTableHead<T, R>,
) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {props.headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.label ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.label}
              direction={orderBy === headCell.label ? order : Order.ASC}
              onClick={createSortHandler(headCell.label)}
            >
              {capitalizeFirstLetter(headCell.label)}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function convertToTabValue(rowElement: any): string | number {
  const type = typeof rowElement;
  if (rowElement === null || rowElement === undefined) return "";
  switch (type) {
    case "string":
      return rowElement as string;
    case "number":
      return rowElement as number;
    case "object":
      return (rowElement as Date).toLocaleDateString();
    default:
      return "";
  }
}

export default CTable;

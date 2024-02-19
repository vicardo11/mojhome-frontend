import Box from "@mui/material/Box";
import CTable from "../../components/table/CTable";
import { DATA, HEAD_CELL_DATA } from "./mock/finances";

const FinancesPage = () => {
  return (
    <Box>
      <CTable title="Finances" data={DATA} headCells={HEAD_CELL_DATA} />
      <CTable title="Finances" data={DATA} headCells={HEAD_CELL_DATA} />
      <CTable title="Finances" data={DATA} headCells={HEAD_CELL_DATA} />
      <CTable title="Finances" data={DATA} headCells={HEAD_CELL_DATA} />
    </Box>
  );
};

export default FinancesPage;

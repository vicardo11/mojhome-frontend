import Box from "@mui/material/Box";
import CTable from "../../components/table/CTable";
import { DATA, HEAD_CELL_DATA } from "./mock/finances";

const FinancesPage = () => {
  function handleRowSelected(id: number) {
    console.log(id);
  }

  return (
    <Box>
      <CTable
        title="Finances"
        data={DATA}
        headCells={HEAD_CELL_DATA}
        onRowSelected={handleRowSelected}
      />
    </Box>
  );
};

export default FinancesPage;

import { FinanceRecord } from "../model/FinanceRecord";
import { COLOR_BLUE, COLOR_GREEN, COLOR_RED } from "../../../constants/Colors";
import { Box, Paper, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { FinanceType } from "../../../types/FinanceType";
import { FinanceChartService } from "../service/FinanceChartService";
import { getLastFourMonths } from "../../../utils/DateUtils";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IncomeExpenseChart = ({ data }: { data: FinanceRecord[] }) => {
  const [chartData, setChartData] = useState<ChartData<"bar", number[]>>({
    labels: [],
    datasets: [],
  });
  const financeChartService = new FinanceChartService();

  useEffect(() => {
    const getFinanceData = (type: FinanceType) =>
      financeChartService
        .getLast3MonthsFinanceDataByType(type, data)
        .map((record) => record.totalAmount);

    setChartData({
      labels: getLastFourMonths(),
      datasets: [
        {
          label: "Incomes",
          backgroundColor: COLOR_GREEN,
          data: getFinanceData(FinanceType.INCOME),
        },
        {
          label: "Expenses",
          backgroundColor: COLOR_RED,
          data: getFinanceData(FinanceType.EXPENSE),
        },
      ],
    });
  }, [data]);

  return (
    <Paper sx={{ width: "100%", mb: 3 }}>
      <Box>
        <Toolbar sx={{ pl: { sm: 2 }, pt: 3, pb: 4 }}>
          <Typography sx={{ flex: "1 1 100%" }} variant="h5" component="div" color={COLOR_BLUE}>
            Last 4 months
          </Typography>
        </Toolbar>
      </Box>
      <Box sx={{ pb: 4, pt: 2, px: 4 }}>
        <Bar
          options={{ responsive: true, plugins: { legend: { position: "bottom" } } }}
          data={chartData}
        ></Bar>
      </Box>
    </Paper>
  );
};

export default IncomeExpenseChart;

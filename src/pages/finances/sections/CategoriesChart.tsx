import { FinanceRecord } from "../model/FinanceRecord";
import { COLOR_BLUE, PIE_CHART_COLORS } from "../../../constants/Colors";
import { Box, Paper, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { FinanceType } from "../../../types/FinanceType";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { getCategories, getFinanceDataByCategory } from "../service/CategoriesChartService";
import CIconButton from "../../../components/icon-button/CIconButton";

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement);

const chartOptions: ChartOptions<"pie"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          return context.label ?? "";
        },
      },
    },
  },
};

const IncomeExpenseChart = ({ data }: { data: FinanceRecord[] }) => {
  const [type, setType] = useState<FinanceType>(FinanceType.INCOME);
  const [chartData, setChartData] = useState<ChartData<"pie", number[]>>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const categoriesData = (type: FinanceType) => getFinanceDataByCategory(type, data);

    setChartData({
      labels: getCategories(type, data),
      datasets: [
        {
          label: type,
          backgroundColor: PIE_CHART_COLORS,
          data: categoriesData(type),
        },
      ],
    });
  }, [data, type]);

  function handleTypeChange() {
    setType((prevType) =>
      prevType === FinanceType.INCOME ? FinanceType.EXPENSE : FinanceType.INCOME,
    );
  }

  return (
    <Paper sx={{ width: "100%", mb: 3 }}>
      <Box>
        <Toolbar sx={{ pl: { sm: 2 }, pt: 3, pb: 4 }}>
          <Typography sx={{ flex: "1 1 100%" }} variant="h5" component="div" color={COLOR_BLUE}>
            Categories
          </Typography>
          <Box
            sx={{
              display: "flex",
              fontSize: 25,
              color: COLOR_BLUE,
              placeItems: "center",
            }}
          >
            <CIconButton
              icon={<IoIosArrowBack />}
              color={COLOR_BLUE}
              onButtonClick={handleTypeChange}
            ></CIconButton>
            <Typography>{type}</Typography>
            <CIconButton
              icon={<IoIosArrowForward />}
              color={COLOR_BLUE}
              onButtonClick={handleTypeChange}
            ></CIconButton>
          </Box>
        </Toolbar>
      </Box>
      <Box sx={{ pb: 4, pt: 2, px: 4 }}>
        <Pie options={chartOptions} data={chartData}></Pie>
      </Box>
    </Paper>
  );
};

export default IncomeExpenseChart;

import { FinanceRecord } from "../model/FinanceRecord";
import { COLOR_BLUE, COLOR_GREEN, COLOR_RED } from "../../../constants/Colors";
import { Box, Paper, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import { FinanceType } from "../../../types/FinanceType";
import { getFinanceDataByType } from "../service/FinanceChartService";
import { getLabels } from "../utils/DateUtils";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RxReset } from "react-icons/rx";

import CIconButton from "../../../components/icon-button/CIconButton";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const chartOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
    tooltip: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: (context) => {
          return context.dataset.label + ": " + (context.parsed.y ?? 0).toFixed(2);
        },
      },
    },
  },
};

const IncomeExpenseChart = ({ data }: { data: FinanceRecord[] }) => {
  const [toDate, setToDate] = useState<Date>(new Date());
  const [chartData, setChartData] = useState<ChartData<"bar", number[]>>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const getFinanceData = (type: FinanceType) => getFinanceDataByType(type, data, toDate);

    setChartData({
      labels: getLabels(toDate),
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
  }, [data, toDate]);

  function handlePreviousMonth() {
    const date = new Date(toDate);
    date.setMonth(date.getMonth() - 1);
    setToDate(date);
  }

  function handleNextMonth() {
    const date = new Date(toDate);
    date.setMonth(date.getMonth() + 1);
    if (date > new Date()) {
      return;
    }
    setToDate(date);
  }

  function handleRangeReset() {
    setToDate(new Date());
  }

  return (
    <Paper sx={{ width: "100%", height: "300px", mb: 3 }}>
      <Toolbar sx={{ height: "10%", pl: { sm: 2 }, pt: 3, pb: 4 }}>
        <Typography sx={{ flex: "1 1 100%" }} variant="h5" component="div" color={COLOR_BLUE}>
          Breakdown
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
            icon={<RxReset />}
            color={COLOR_BLUE}
            onButtonClick={handleRangeReset}
          ></CIconButton>
          <CIconButton
            icon={<IoIosArrowBack />}
            color={COLOR_BLUE}
            onButtonClick={handlePreviousMonth}
          ></CIconButton>
          <CIconButton
            icon={<IoIosArrowForward />}
            color={COLOR_BLUE}
            onButtonClick={handleNextMonth}
          ></CIconButton>
        </Box>
      </Toolbar>
      <Box sx={{ height: "90%", pb: 4, pt: 2, px: 4 }}>
        <Bar options={chartOptions} data={chartData}></Bar>
      </Box>
    </Paper>
  );
};

export default IncomeExpenseChart;

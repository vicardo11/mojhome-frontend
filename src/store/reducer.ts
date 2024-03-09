import { FinanceRecord } from "../pages/finances/model/FinanceRecord";

export type FinanceState = {
  financeRecords: FinanceRecord[];
};

const initialState: FinanceState = {
  financeRecords: [],
};

type FinanceRecordAction =
  | { type: "ADD_RECORD"; record: FinanceRecord }
  | { type: "REMOVE_RECORD"; recordId: string }
  | { type: "UPDATE_RECORD"; record: FinanceRecord }
  | { type: "SET_RECORDS"; records: FinanceRecord[] }; // Add this line

function financeReducer(
  state: FinanceState = initialState,
  action: FinanceRecordAction,
): FinanceState {
  switch (action.type) {
    case "ADD_RECORD":
      return { ...state, financeRecords: [...state.financeRecords, action.record] };
    case "REMOVE_RECORD":
      return {
        ...state,
        financeRecords: state.financeRecords.filter((record) => record.id !== action.recordId),
      };
    case "UPDATE_RECORD":
      return {
        ...state,
        financeRecords: state.financeRecords.map((record) => {
          return record.id === action.record.id ? action.record : record;
        }),
      };
    case "SET_RECORDS": // Add this case
      return { ...state, financeRecords: action.records };
    default:
      return state;
  }
}

export default financeReducer;

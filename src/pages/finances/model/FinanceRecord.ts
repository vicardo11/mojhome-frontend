import { TabDataModel } from "../../../components/table/TabDataModel";
import { FinanceType } from "../../../types/FinanceType";

export interface FinanceRecord extends TabDataModel {
  id: string;
  name: string;
  type: FinanceType;
  amount: number;
  date?: Date;
}

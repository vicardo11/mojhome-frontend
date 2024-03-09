import { Axios } from "axios";
import { FINANCES_URL } from "../../../constants/Urls";
import { FinanceRecord } from "../model/FinanceRecord";

export class FinanceService {
  private axios: Axios;

  constructor(axios: Axios) {
    this.axios = axios;
  }

  public getFinances = () => {
    return this.axios.get<FinanceRecord[]>(FINANCES_URL);
  };

  public updateFinance = (body: FinanceRecord) => {
    return this.axios.put<FinanceRecord>(FINANCES_URL, body);
  };

  public createFinance = (body: FinanceRecord) => {
    return this.axios.post<FinanceRecord>(FINANCES_URL, body);
  };

  public deleteFinance = (id: string) => {
    return this.axios.delete(`${FINANCES_URL}/${id}`);
  };
}

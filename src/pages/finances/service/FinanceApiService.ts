import { Axios } from "axios";
import { FINANCE_CATEGORIES_URL, FINANCES_URL } from "../../../constants/Urls";
import { FinanceRecord } from "../model/FinanceRecord";
import { CategoryRecord } from "../model/CategoryRecord";

export class FinanceApiService {
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

  public getCategories = () => {
    return this.axios.get<CategoryRecord[]>(FINANCE_CATEGORIES_URL);
  };
}

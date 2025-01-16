export interface IPagination {
  pageCurrent: number;
  pageLimit: number;
  pageSkip: number;
  total: number;
}


export interface IApiResponse {
  status: boolean;
  message: string;
  data: any;
  page: number;
  per_page: number;
  size: number;
  total_pages: number;
  total_size: number;
}
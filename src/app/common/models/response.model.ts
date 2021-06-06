

export interface ResponseModel {
  status: boolean; // TRUE if not problem, and FALSE if problem response from server.
  errorMessage: string | undefined; // If ocurred error.
  data: Object; // Data response.
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const callApi = (value: any) => {
  return new Promise((resolve) => setTimeout(() => resolve(value), 300));
};

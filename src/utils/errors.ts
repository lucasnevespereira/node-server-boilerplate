export const extractError = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }
  return error;
}
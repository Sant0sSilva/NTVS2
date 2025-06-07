export const isNodeError = (data: unknown): data is NodeJS.ErrnoException => {
  if (data && typeof data === "object" && "message" in data && "name" in data) {
    return true;
  }
  return false;
};

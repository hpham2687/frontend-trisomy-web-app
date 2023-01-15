export const isEmptyObject = (obj: Record<string, unknown>): boolean =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

export const convertObjectValuesToNumber = (
  obj: Record<string, unknown>,
): Record<string, unknown> => {
  const newObj = {};
  Object.keys(obj).forEach(function (key: string) {
    newObj[key] = Number(obj[key]);
  });
  return newObj;
};

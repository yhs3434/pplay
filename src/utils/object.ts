export const isObject = (
  obj: Record<string, unknown> | undefined | null,
): boolean => {
  if (obj === undefined || obj === null) {
    return false;
  }

  return !!Object.keys(obj).length;
};

export const isEmpty = (
  obj: Record<string, any> | undefined | null,
): boolean => {
  return Object.keys(obj || {}).length === 0;
};

export const removeEmpty = <T>(obj: Record<string, any>): T => {
  let newObj: Record<string, any> = {};

  Object.keys(obj).forEach(key => {
    if (obj[key] === Object(obj[key])) {
      newObj[key] = removeEmpty(obj[key]);
    } else if (obj[key] !== undefined) {
      newObj[key] = obj[key];
    }
  });

  return newObj as T;
};

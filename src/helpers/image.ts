import config from "config/index.json";

export const getImagePath = (path: string): string => {
  return `${config.imageBasePath}${path}`;
};

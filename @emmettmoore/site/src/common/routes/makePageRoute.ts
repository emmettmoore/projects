interface PageRouteDefinition<T> {
  path: string | ((data: T) => string);
}

export interface PageRoute<T> {
  getPath: (data: T) => string;
  getAbsoluteUrl: (data: T) => string;
}

export default <T = { [key: string]: unknown }>(
  routeDefinition: PageRouteDefinition<T>
): PageRoute<T> => {
  const getPath = (data: T): string => {
    return typeof routeDefinition.path === `string`
      ? routeDefinition.path
      : routeDefinition.path(data);
  };

  const getAbsoluteUrl = (data: T): string => {
    const path = getPath(data);

    if (!process.env.NEXT_PUBLIC_SITE_URL) {
      throw new Error(`Missing env var: NEXT_PUBLIC_SITE_URL`);
    }

    return new URL(path, process.env.NEXT_PUBLIC_SITE_URL).toString();
  };

  return {
    getPath,
    getAbsoluteUrl,
  };
};

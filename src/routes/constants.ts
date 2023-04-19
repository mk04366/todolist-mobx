export enum Routes {
  APP_ROUTES = 'appRoutes',
  HOME = 'home',
}

export type RouteParams = {
  [Routes.APP_ROUTES]: {
    screen: Routes;
    params?: RouteParams[Routes];
  };

  [Routes.HOME]: undefined;
};

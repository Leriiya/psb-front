import { routePrefix, routes } from './config'

export const getRoute = (
  routeName,
  // query?: 'new' | ':id' | string | number,
  query,
) => (
  `${routePrefix}${routes[routeName]}${query ? `/${query}` : ''}`
)

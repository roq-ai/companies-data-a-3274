const mapping: Record<string, string> = {
  'credit-limits': 'credit_limit',
  'data-filters': 'data_filter',
  'export-data': 'export_data',
  graphics: 'graphic',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

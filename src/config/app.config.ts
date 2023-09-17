interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: [],
  tenantRoles: ['System Administrator', 'Data Analyst'],
  tenantName: 'Organization',
  applicationName: 'Companies Data App',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage Organization profiles',
    'Invite Data Analysts to the application',
    'Manage user roles and permissions',
    'Set and control the monthly credit limit for each Organization',
    'Upload data to the application',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/59cf08fc-ba5d-45b6-b84f-ffafe1d9cfa1',
};

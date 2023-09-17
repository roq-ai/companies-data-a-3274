import * as yup from 'yup';

export const organizationValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  credit_limit: yup.number().integer().nullable(),
  data_uploaded: yup.boolean().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});

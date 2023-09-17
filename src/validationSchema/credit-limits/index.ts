import * as yup from 'yup';

export const creditLimitValidationSchema = yup.object().shape({
  limit_amount: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});

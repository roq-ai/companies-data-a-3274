import * as yup from 'yup';

export const dataFilterValidationSchema = yup.object().shape({
  filter_name: yup.string().required(),
  filter_type: yup.string().required(),
  user_id: yup.string().nullable().required(),
});

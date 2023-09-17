import * as yup from 'yup';

export const graphicValidationSchema = yup.object().shape({
  graphic_name: yup.string().required(),
  graphic_type: yup.string().required(),
  user_id: yup.string().nullable().required(),
});

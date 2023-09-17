import * as yup from 'yup';

export const exportDataValidationSchema = yup.object().shape({
  export_name: yup.string().required(),
  export_type: yup.string().required(),
  user_id: yup.string().nullable().required(),
});

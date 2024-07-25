import * as Yup from 'yup';

export const LabLoginSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email')
    .required('Required'),
    password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
});
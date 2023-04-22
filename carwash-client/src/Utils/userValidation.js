import * as yup from 'yup';

export const validation = yup.object({
    name: yup.string().required("Please enter your Name"),
    email: yup.string().required("Please enter your email").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]/, "Please Enter valid E-Mail"),
    // eslint-disable-next-line
    phoneNumber: yup.string().matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/).required('A phone number is required')
});
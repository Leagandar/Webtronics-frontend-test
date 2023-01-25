import * as yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const submitFormSchema = yup.object().shape(
    {
        name: yup
            .string()
            .min(2, "Name field must be at least 2 characters")
            .max(16, "Name field must not exceed 16 characters")
            .required("Name field is required"),
        phone: yup
            .string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required(),
        email: yup.string().email().required(),
    }
)
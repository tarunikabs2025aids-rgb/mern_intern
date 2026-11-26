import { useState } from "react";
import {z} from "zod";

const RegisterSchema = z.object({
    name: z.string().min(3, "name must have minimum of 3 letters"),
    email: z.string().email("Enter Valid Email"),
    password: z.string().min(8, "Password must have minimum of 8 letters")
});
const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));
        setErrors((previousErrors) => ({
            ...previousErrors,
            [name]: ""
        }));
        setSuccessMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = RegisterSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors = {};
            result.error.issues.forEach((issue) => {
                const field = issue.path[0];
                if (typeof field === "string" && !fieldErrors[field]) {
                    fieldErrors[field] = issue.message;
                }
            });
            setErrors(fieldErrors);
            setSuccessMessage("");
            return;
        }

        console.log("Registration Details:", formData);

        setErrors({});
        setSuccessMessage("Registration successful!");
        setFormData({
            name: "",
            email: "",
            password: ""
        });
    };

    return (
        <div className="flex flex-col items-center justify-center p-6">

            <h1 className="text-2xl font-bold mb-4">
                Register Form
            </h1>

            <form onSubmit={handleSubmit} noValidate
                className="flex flex-col gap-3 w-80">

                <div className="flex flex-col gap-1">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="border p-2 rounded"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <p id="name-error" role="alert" className="text-sm text-red-600">{errors.name}</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="border p-2 rounded"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <p id="email-error" role="alert" className="text-sm text-red-600">{errors.email}</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="border p-2 rounded"
                        aria-invalid={Boolean(errors.password)}
                        aria-describedby={errors.password ? "password-error" : undefined}
                    />
                    {errors.password && <p id="password-error" role="alert" className="text-sm text-red-600">{errors.password}</p>}
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Register
                </button>
                {successMessage && <p role="status" className="text-sm text-green-700">{successMessage}</p>}

            </form>
        </div>
    );
};

export default Register;
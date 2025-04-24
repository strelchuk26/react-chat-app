import { useForm } from "react-hook-form";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

interface RegisterProps {
    className?: string;
}

const Register: React.FC<RegisterProps> = ({ className }) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: any) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;
            const token = await user.getIdToken();

            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ email: data.email }),
            });

            const result = await response.json();
            console.log("Server Response:", result);
        } catch (error: any) {
            setError("password", { message: error.message });
        }
    };

    return (
        <div className={`w-full flex justify-between ${className}`}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex-1 gap-4 flex flex-col justify-center items-center">
                <h1 className="font-bold text-[25px]">Create an account</h1>
                <div className="flex items-center gap-8">
                    <img className="w-16 h-16" src="./avatar.png" alt="avatar" />
                    <p>Upload an image</p>
                </div>
                <CustomInput {...register("username")} placeholder="Username" />
                <CustomInput {...register("email")} placeholder="Email" />
                <CustomInput {...register("password")} type="password" placeholder="Password" />
                <CustomButton isSubmitting variant="primary" text="Sing up" />
            </form>
        </div>
    );
};

export default Register;

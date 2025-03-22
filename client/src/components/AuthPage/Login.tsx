import { useForm } from "react-hook-form";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

interface LoginProps {
    className?: string;
}

const Login: React.FC<LoginProps> = ({ className }) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: any) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;
            const token = await user.getIdToken();
            console.log("Token:", token);

            const response = await fetch("http://localhost:5000/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
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
                <h1 className="font-bold text-[25px]">Welcome back!</h1>
                <CustomInput placeholder="Email" />
                <CustomInput placeholder="Password" />
                <CustomButton isSubmitting variant="primary" text="Sign in" />
            </form>
        </div>
    );
};

export default Login;

import { useForm } from "react-hook-form";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useState } from "react";

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
    const [avatarFile, setAvatarFile] = useState<File | null>(null);

    const onSubmit = async (data: any) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;
            const token = await user.getIdToken();

            let avatarURL = "";

            if (avatarFile) {
                avatarURL = await uploadToCloudinary(avatarFile);
            }

            await updateProfile(userCredential.user, {
                displayName: data.username,
                photoURL: avatarURL,
            });

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

    const uploadToCloudinary = async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "react_avatar");

        const res = await fetch("https://api.cloudinary.com/v1_1/dj5umwhdi/image/upload", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();
        return data.secure_url;
    };

    return (
        <div className={`w-full flex justify-between ${className}`}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex-1 gap-4 flex flex-col justify-center items-center">
                <h1 className="font-bold text-[25px]">Create an account</h1>
                <div className="flex items-center gap-8">
                    {avatarFile && (
                        <img
                            src={URL.createObjectURL(avatarFile)}
                            alt="Avatar preview"
                            className="w-20 h-20 rounded-full"
                        />
                    )}
                    <p>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setAvatarFile(e.target.files?.[0] || null)}
                        />
                    </p>
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

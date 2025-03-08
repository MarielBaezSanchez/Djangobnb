'use client';

import useSignupModal from "@/app/hooks/useSignupModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const SignupModal = () => {
    const router = useRouter()
    const signupModal = useSignupModal()
    const [email, setEmail] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [errors, setErrors] = useState<string[]>([])

    //submit functionality

    const submitSignup = async () => {
        const formData = {
            name: 'stein',
            email: email,
            password1: password1,
            password2: password2
        }

        const response = await apiService.post('/api/auth/register/', JSON.stringify(formData))
        if (response.access) {
            handleLogin(response.user.pk, response.access, response.refresh)
            signupModal.close()
        } else {
            const tmpErrors: string[] = Object.values(response).map((error:any) =>{
                return error
            })
            setErrors(tmpErrors)
        }
    }

    const content = (
        <>
            {/* <h2 className="mb-6 text-2xl">
                Wenas wenas, registrate
            </h2> */}
            <form
                action={submitSignup}
                className="space-y-4"
            >
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your E-mail"
                    type="email"
                    className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
                />
                <input
                    onChange={(e) => setPassword1(e.target.value)}
                    placeholder="Your Password"
                    type="password"
                    className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
                />
                <input
                    onChange={(e) => setPassword2(e.target.value)}
                    placeholder="Repeat Password"
                    type="password"
                    className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
                />
                {errors.map((error, index) => (
                    <div
                        key={`error-${index}`}
                        className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                        {error}
                    </div>
                ))}

                <CustomButton
                    label="Submit"
                    onClick={submitSignup}
                />
            </form>
        </>
    )
    return (
        <Modal
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign up"
            content={content}
        />
    )
}
export default SignupModal;
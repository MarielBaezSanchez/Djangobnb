'use client';
 
 import useSignupModal from "@/app/hooks/useSignupModal";
 import Modal from "./Modal";
 import CustomButton from "../forms/CustomButton";
 
 const SignupModal = () => {
     const signupModal = useSignupModal()
 
     const content = (
         <>
             <h2 className="mb-6 text-2xl">
                 Wenas wenas, registrate
             </h2>
             <form className="space-y-4">
                 <input
                     placeholder="Your E-mail"
                     type="email"
                     className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
                 />
                 <input
                     placeholder="Your Password"
                     type="password"
                     className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
                 />
                 <input
                     placeholder="Repeat Password"
                     type="password"
                     className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
                 />
                 <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                     Ingresa bien los campos imbecil
                 </div>
                 <CustomButton
                     label="Submit"
                     onClick={() => console.log("Te has registrado")}
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
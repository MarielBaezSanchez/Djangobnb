'use client';
 
 import useLoginModal from "@/app/hooks/useLoginModal";
 import Modal from "./Modal";
 import CustomButton from "../forms/CustomButton";
 
 const LoginModal = () => {
     const loginModal = useLoginModal()
 
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
                 <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                     Ingresa bien los campos imbecil
                 </div>
                 <CustomButton
                     label="Submit"
                     onClick={() => console.log("tas dentro")}
                 />
             </form>
         </>
     )
     return (
         <Modal
             isOpen={loginModal.isOpen}
             close={loginModal.close}
             label="Log in"
             content={content}
         />
     )
 }
 export default LoginModal;
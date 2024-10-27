"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from 'emailjs-com';
import { useState } from "react";
import { CiMail } from "react-icons/ci";
<CiMail />
import { FaPhoneAlt } from "react-icons/fa";
<FaPhoneAlt />
import { IoLocationOutline } from "react-icons/io5";
<IoLocationOutline />
import { IoMdTime } from "react-icons/io";
<IoMdTime />

 const mailSchema = z.object({
    name : z.string().min(3, "Name is required"),
    email :z.string().email("Email is required"),
    subject :z.string().min(3,"Subject is required"),
    message :z.string().min(10, "message should be at least 10 charcters")
})
    type ContactFormSchema = z.infer<typeof mailSchema>;

export const FormComponent = ()=>{
const contact =[ 
    {
    icon :<CiMail size={30} className="text-sky-500"  /> ,
    info :"ahmedkha6900@gmail.com",
    id:"1"

},
    {
    icon :<FaPhoneAlt size={30} className="text-sky-500" /> ,
    info :"+2 1018377768",
    id:"2"

},
    {
    icon :<IoLocationOutline size={30} className="text-sky-500" /> ,
    info :"Mansorah - Egypt",
    id:"3"

},
    {
    icon :<IoMdTime size={30} className="text-sky-500" /> ,
    info :" 24 hours / 7 days",
    id:"4"

},

]
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [issent , setIssent] =useState(false)
    const [ isfailed , setIsfailed] =useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<ContactFormSchema>({
        resolver: zodResolver(mailSchema),
      });
    const onSubmit =  (values:ContactFormSchema) => {
        setIsSubmitting(true);
      console.log(values)

      emailjs
      .send(
        'service_v8v84gi',
        'template_dlmxvqj',
        {
            from_name: values.name,
            from_email: values.email, // sender email
            message: values.message,
          },
        'g7aSYgsn6mcrX1n7n'
      )
      .then(
        (result) => {
          console.log(result.text);
        setIssent(true)
        },
        (error) => {
          console.error(error.text);
         setIsfailed(true)
        }
      );
      setIsSubmitting(false);
      };
      
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
<div className="  rounded-lg w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gradient1 to-black p-3 flex ">
<div className="flex flex-col w-full gap-5 ">
{
    contact.map((item)=>
        <div key={item.id} className=" w-full flex justify-start gap-5 items-center p-3" >
            <div>
                {item.icon }
            </div>
            <div className="text-white">
                {item.info}
            </div>

        </div>
    )
}
</div>
</div>
<div className="  rounded-lg w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gradient1 to-black p-3 flex ">
        <form className=" text-white mb-5 w-full"  onSubmit={handleSubmit(onSubmit)}>
            <div className =  " w-full my-2 text-white p-3">               
                <input placeholder=" Name" className=" bg-transparent w-full focus:outline-none focus:bg-transparent focus:shadow-md focus:shadow-sky-500 focus:border-0 shadow-sky-500 p-1 rounded-lg active:bg-transparent border-2  border-sky-500 e" {...register('name')}  type="text" name="name"  />
                {errors.name && <p className="pt-3">{errors.name.message}</p>}
            </div>
            <div className = "my-2 text-white p-3">
                <input placeholder=" Email" className=" bg-transparent w-full focus:outline-none focus:bg-transparent focus:shadow-md focus:shadow-sky-500 focus:border-0 shadow-sky-500 p-1 rounded-lg active:bg-transparent border-2  border-sky-500 e" {...register('email')} type="email" name="email"  />
                {errors.email && <p className="pt-3">{errors.email.message}</p>}
            </div>
            <div className = "my-2 text-white p-3">
                <input placeholder=" Subject"  className=" bg-transparent w-full focus:outline-none focus:bg-transparent focus:shadow-md focus:shadow-sky-500 focus:border-0 shadow-sky-500 p-1 rounded-lg active:bg-transparent border-2  border-sky-500 e" {...register('subject')} type="text" name="subject"  />
                {errors.subject && <p className="pt-3">{errors.subject.message}</p>}
            </div>
            <div className = "my-2 text-white p-3">
              <textarea placeholder=" Message" className=" bg-transparent w-full focus:outline-none focus:bg-transparent focus:shadow-md focus:shadow-sky-500 focus:border-0 shadow-sky-500 p-1 rounded-lg active:bg-transparent border-2  border-sky-500 e" {...register('message')} name="message" />
              {errors.message && <p className="pt-3">{errors.message.message}</p>}
            </div>
            <div className="w-full flex-col gap-4  text-center    flex justify-center items-center">
                { issent ? <p className="w-full rounded-lg mx-5 p-2 text-2xl text-white bg-green-900"> Email Sent </p> : null  }
                { isfailed && <p className="w-full rounded-lg mx-5 p-2 text-2xl text-white bg-red-900"> Failed to send </p>  }
                
            <button className="bg-sky-400 hover:bg-sky-500   w-[50%] p-2 rounded-lg mx-5" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
            </div>
        </form>
        </div>
        </div>

    )
}



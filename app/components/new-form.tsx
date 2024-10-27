
'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormSchema = z.infer<typeof schema>;

 export const ContactForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data:ContactFormSchema) => {
    console.log(data)
    // setIsSubmitting(true);
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   });
    //   if (response.ok) {
    //     alert('Message sent successfully!');
    //   } else {
    //     alert('Failed to send message');
    //   }
    // } catch (error) {
    //   console.error('Error sending message:', error);
    //   alert('An error occurred. Please try again later.');
    // }
    // setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input type="text" {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Subject</label>
        <input type="text" {...register('subject')} />
        {errors.subject && <p>{errors.subject.message}</p>}
      </div>

      <div>
        <label>Message</label>
        <textarea {...register('message')}></textarea>
        {errors.message && <p>{errors.message.message}</p>}
      </div>

      <button type="submit" >
        submitt
        {/* {isSubmitting ? 'Sending...' : 'Send Message'} */}
      </button>
    </form>
  );
};

export default ContactForm;

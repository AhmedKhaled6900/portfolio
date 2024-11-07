import { Container } from "../components/container"
import { FormComponent } from "../components/form"
import { Heading } from "../components/heading"

const ContactPage = ()=>{
    return (
<Container>
    <div className="flex flex-col  " >


        <Heading title="Get in Touch" text="Have a Question or Idea? Let’s Chat!" text1=" Whether you have a question or just want to say hi, I’ll try my best to get back to you!">

        </Heading>
    <FormComponent></FormComponent>
    </div>


</Container>
    )
}
export default ContactPage
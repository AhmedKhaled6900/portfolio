import { Container } from "../components/container"
import { FormComponent } from "../components/form"
import { Heading } from "../components/heading"

const ContactPage = ()=>{
    return (
<Container>
    <div >


        <Heading title="Get in Touch" text1="Have a Question or Idea? Let’s Chat!" text="I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!">

        </Heading>
    <FormComponent></FormComponent>
    </div>


</Container>
    )
}
export default ContactPage
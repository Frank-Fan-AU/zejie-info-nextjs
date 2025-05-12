import Breakline from "@/common/components/elements/Breakline";
import SocialMediaList from "./SocialMediaList";
// import ContactForm from "./ContactForm";

const Contact = () => {
    return(
        <section className='space-y-6'>
                <h3 className='text-lg font-medium'>Phone</h3>
                <p>+61 411936898</p>
                <Breakline />
      <SocialMediaList />
      <Breakline />
      <div className='space-y-5'>
        {/* <h3 className='text-lg font-medium'>Or send me a message</h3> */}
        {/* <ContactForm /> */}
      </div>
    </section>
    )
}

export default Contact;
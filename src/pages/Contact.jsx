import heroImage from "../assets/software_developer.jpg";
import NormalInput from "../atoms/NormalInput";
import SubmitInput from "../atoms/SubmitInput";
import OneMessageContainer from "../atoms/OneMessageContainer";
import TextArea from "../atoms/TextArea";
import Message from "../components/Message";
import MessagesList from "../components/MessagesList";
import LoadingSection from "../components/LoadingSection";
import sendMessage from "../services/sendMessage";
import useForm from "../hooks/useForm";

export default function Contact() {
  const {handleSubmit, handleClose, state} = useForm(sendMessage)

  const {isLoading, messages, errors} = state

  return (
    <>
    { (!!messages && !errors) && (
    <OneMessageContainer>
      <Message title="Sucess" color="green" body="Thanks for send me a message, I will get back to you" handleClose={handleClose}/>
    </OneMessageContainer>
    )}
    {!!messages && !!errors && <MessagesList handleClose={handleClose} errors={errors} />}
    <img src={heroImage} alt="Contact us" className="fixed inset-0 h-full object-cover opacity-50" />
    <main className="relative z-10 opacity-90 pt-32 min-h-body space-y-6">
      <h2 className="text-center mx-auto text-4xl font-bold text-white">Contact me!</h2>
      <form className="relative w-[90%] rounded-xl mx-auto max-w-[600px] flex flex-col items-start pt-6 pb-8 pl-6 pr-4 gap-y-2 bg-slate-600" onSubmit={handleSubmit}>
        {isLoading && <LoadingSection />}
        <label htmlFor="name" className="pl-2 text-white">Name</label>
        <NormalInput type="text" required={true} name="name" placeholder="Enter your name" />
        <label htmlFor="email" className="pl-2 pt-2 text-white">Email</label>
        <NormalInput name="email" type="email" required={true} large="lg" placeholder="Enter your email" />
        <label htmlFor="message" className="pl-2 pt-2 text-white">Message</label>
        <TextArea name="message" id="message" required={true} placeholder="Enter your message" />
        <SubmitInput isLoading={isLoading} value="Send the message" />
      </form>
    </main>
    </>
  )
}
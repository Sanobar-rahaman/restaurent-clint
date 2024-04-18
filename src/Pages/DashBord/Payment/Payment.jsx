import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";


const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
    
    return (
        <div>
            <SectionTitle heading='Payment' subHeading="Plese Pay to eat"></SectionTitle>
            <div>
            <Elements stripe={stripePromise}>
                <CheckoutFrom></CheckoutFrom>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;
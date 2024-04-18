import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSeceure from "../../../Hooks/useAxiosSeceure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";



const CheckoutFrom = () => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transectionId, setTransactionId] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const axiosSceeure = useAxiosSeceure()
    const { user } = useAuth()
    const [cart] = useCart()

    const totalPrice = cart?.reduce((total, item) => total + parseFloat(item.price), 0)


    useEffect(() => {
        if (totalPrice > 0) {
            axiosSceeure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {

                    console.log(res.data.clintSecret);
                    setClientSecret(res.data.clintSecret)
                })
        }
    }, [axiosSceeure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log(error);
            setError(error.message);

        }
        else {
            console.log('payment method', paymentMethod);
            setError('')
        }
        //confirm payment
        console.log(clientSecret);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anymous',
                    name: user?.displayName || 'anymous'
                }

            }
        })
        if (confirmError) {
            console.log('confirm error', confirmError);
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transection id', paymentIntent.id);
                setTransactionId(paymentIntent.id)
                // now save the payment into database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transectionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }
                const res = await axiosSceeure.post('/payments', payment)
                console.log('payment saved', res.data);
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank You for Your Payment",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            }
        }



    }
    return (
        <form onSubmit={handleSubmit} >
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className=" btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className=" text-red-500">{error}</p>
            {transectionId && <p className=" text-green-500">Your tranction is successFull and tranction id is{transectionId}</p>}

        </form>
    );
};

export default CheckoutFrom;
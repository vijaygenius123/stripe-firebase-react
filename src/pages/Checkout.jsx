import {useState} from "react";
import {useStripe} from "@stripe/react-stripe-js";
import axios from 'axios'
export const Checkout = () => {
    const stripe = useStripe()
    const [product, setProduct] = useState( {
        "price_data": {
            "currency": "INR",
            "unit_amount": "500",
            "product_data": {
                "name": "hat",
                "images": [
                    "https://source.unsplash.com/random/?Hat"
                ]
            }
        },
        "quantity": 2
    })

    const changeQuantity =(v) => setProduct({
        ...product, quantity: Math.max(0, product.quantity + v)
    })
    const handleCheckout = async () => {
        const body = { line_items : [product]}
        const {data: {id: sessionId}} = await axios.post('http://localhost:8080/checkouts', body)
        console.log(sessionId)
        const {error} = await stripe.redirectToCheckout({sessionId})
        if(error){
            console.log(error)
        }
    }
    return (
        <>
            <h1>Checkout</h1>
            <div>
                <h3>{product.price_data.product_data.name}</h3>
                <h4>Amount : {product.price_data.unit_amount}</h4>
                <img  height={600} src={product.price_data.product_data.images[0]} alt=""/>
            </div>
            <hr/>
            <button onClick={() => changeQuantity(-1)}>-</button>
            {product.quantity}
            <button onClick={() => changeQuantity(1)}>+</button>
            <button onClick={handleCheckout}>Checkout</button>
        </>
    );
}

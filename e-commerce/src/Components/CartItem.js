// // import React, {useState, useEffect} from 'react' 
// // import ProductDetail from '../containers/ProductDetail';
// // import { useDispatch } from 'react-redux';
// // import { changeQuantity } from '../stores/cart';

// // const CartItem = (props) => {
// //     const {productId, quantity} = props.data;
// //     const [detail, setDetail] = useState([]);
// //     const dispatch = useDispatch();
// //     useEffect(() => {
// //         const findDetail = products.filter(product => product.id === productId)[0];
// //         setDetail(findDetail);
// //     }, [productId])
// //     const handleMinusQuantity = () => {
// //         dispatch(changeQuantity({
// //             productId: productId,
// //             quantity: quantity - 1
// //         }));
// //     }
// //     const handlePlusQuantity = () => {
// //         dispatch(changeQuantity({
// //             productId: productId,
// //             quantity: quantity + 1
// //         }));
// //     }
// //   return (
// //     <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
// //         <img src={detail.image} alt="" className='w-12'/>
// //         <h3>{detail.name}</h3>
// //         <p>${detail.price * quantity}</p>
// //         <div className='w-20 flex justify-between gap-2'>
// //             <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinusQuantity}>-</button>
// //             <span>{quantity}</span>
// //             <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handlePlusQuantity}>+</button>
// //         </div>
// //     </div>
// //   )
// // }

// // export default CartItem
// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// // import { changeQuantity } from '../stores/cart';
// import {changeQuantity} from '../redux/reducers/CardStore';
// import axios from 'axios';

// const CartItem = ({ data }) => {
//     const { productId, quantity } = data;
//     const [detail, setDetail] = useState(null);
//     const dispatch = useDispatch();

//     // Fetch product details from API
//     useEffect(() => {
//         const fetchProductDetail = async () => {
//             try {
//                 const response = await axios.get(`https://fakestoreapi.com/products`);
//                 setDetail(response.data);
//             } catch (error) {
//                 console.error("Error fetching product details:", error);
//             }
//         };

//         if (productId) {
//             fetchProductDetail();
//         }
//     }, [productId]);

//     const handleMinusQuantity = () => {
//         dispatch(changeQuantity({
//             productId,
//             quantity: Math.max(0, quantity - 1) // Ensure quantity does not go below 0
//         }));
//     };

//     const handlePlusQuantity = () => {
//         dispatch(changeQuantity({
//             productId,
//             quantity: quantity + 1
//         }));
//     };

//     // Show loading state if the product details are not available yet
//     if (!detail) {
//         return <h3>Loading...</h3>;
//     }

//     return (
//         <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
//             <img src={detail.image} alt={detail.title} className='w-12'/>
//             <h3>{detail.title}</h3>
//             <p>${(detail.price * quantity).toFixed(2)}</p>
//             <div className='w-20 flex justify-between gap-2'>
//                 <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinusQuantity}>-</button>
//                 <span>{quantity}</span>
//                 <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handlePlusQuantity}>+</button>
//             </div>
//         </div>
//     );
// };

// export default CartItem;
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../redux/reducers/CardStore';
import axios from 'axios';

const CartItem = ({ data }) => {
    const dispatch = useDispatch();
    const [detail, setDetail] = useState(null);

    // ✅ Ensure `data` exists before destructuring
    // if (!data) {
    //     return <h3>Error: No cart data available.</h3>;
    // }

    const { productId, quantity } = data;
    console.log("productId in Data",productId);
    console.log("productId in quantity",quantity);
    console.log("Data of code",data);
    

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`);
                setDetail(response.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        fetchProductDetail();
    }, [productId]); // ✅ Always run `useEffect` at the top

    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId,
            quantity: Math.max(1, quantity - 1) // Prevents going below 1
        }));
    };

    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId,
            quantity: quantity + 1
        }));
    };

    // ✅ Ensure `detail` exists before rendering
    if (!detail) {
        return <h3>Loading...</h3>;
    }

    return (
        <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
            <img src={detail.image} alt={detail.title} className='w-12'/>
            <h3>{detail.title}</h3>
            <p>${(detail.price * quantity).toFixed(2)}</p>
            <div className='w-20 flex justify-between gap-2'>
                <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinusQuantity}>-</button>
                <span>{quantity}</span>
                <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handlePlusQuantity}>+</button>
            </div>
        </div>
    );
};

export default CartItem;

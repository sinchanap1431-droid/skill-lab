// export default function ProductCard() {
//     return (
//         <div>
//             <div className="border-2 border-gray-300 p-4 rounded-lg w-80 bg-gray-200 "/>
//             <img
//                 src="https://m.media-amazon.com/images/I/61d88xzrklL._SX522_.jpg"
//                 width="100"
//                 height="200"
//                 alt="Product"
//             />
//             <p>iphone</p>
//             <p>Apple iphone 16 128 GB mobile phonewith camera control, A18 chip </p>
//             <p>1,18,000</p>
//             <button onClick={()=>(setCart(cart+1))}="bg-yellow-400">Add to cart</button>
//             <button className="bg-orange-500">Buy now</button>
//         </div>
//     );
// }


"use client";

import { useState } from "react";

export default function ProductCard() {
    const [cart, setCart] = useState(0);
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="mx-auto max-w-sm rounded-lg border border-gray-300 bg-white p-5 shadow-sm">
                <img
                    src="https://m.media-amazon.com/images/I/61d88xzrklL._SX522_.jpg"
                    alt="iPhone 16"
                    className="mx-auto h-56 w-full object-contain"
                />
                <h2 className="mt-4 text-xl font-semibold text-gray-900">
                    Apple iPhone 16
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                    128 GB, White, 5G Mobile Phone with A18 Chip
                </p>
                <p className="mt-2 text-sm text-yellow-600">
                    ★★★★☆ <span className="text-blue-600">(4.2)</span>
                </p>
                <p className="mt-3 text-2xl font-bold text-gray-900">
                    ₹76,999
                </p>
                {/* <p className="text-sm text-green-700">
                    FREE delivery
                </p> */}
                <div className="mt-4 flex items-center gap-4">
                    <button
                        onClick={() => setCart(Math.max(0, cart - 1))}
                        className="rounded border border-gray-300 px-4 py-1 hover:bg-gray-100"
                    >
                        -
                    </button>
                    <span className="font-semibold">{cart}</span>
                    <button
                        onClick={() => setCart(cart + 1)}
                        className="rounded border border-gray-300 px-4 py-1 hover:bg-gray-100"
                    >
                        +
                    </button>
                </div>
                <p className="mt-4 font-bold text-gray-900">
                    Total: ₹{cart * 76999}
                </p>
                <button
                    onClick={() => setCart(cart + 1)}
                    className="mt-4 w-full rounded-full bg-yellow-400 py-2 font-medium hover:bg-yellow-500"
                >Add to Cart
                </button>

                <button
                    onClick={() => alert("Proceeding to Buy Now")}
                    className="mt-2 w-full rounded-full bg-orange-400 py-2 font-medium hover:bg-orange-500"
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
}
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useStateContext } from "../contexts/ContextProvider";
import { cartData } from "../data/dummy";
import { Button } from ".";

const Cart = () => {
  const { currentColor, handleClick } = useStateContext();
  const [count, setCount] = useState(1);

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <button
            type="button"
            onClick={() => handleClick("cart")}
            className="text-xl rounded-full p-2 hover:bg-light-gray dark:text-white dark:hover:bg-slate-600"
          >
            <MdOutlineCancel />
          </button>
        </div>
        {cartData?.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center  leading-8 gap-5 border-b-1 border-color dark:border-gray-400 p-4">
                <img className="rounded-lg h-80 w-24" src={item.image} alt="" />
                <div>
                  <p className="font-semibold ">{item.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                    {item.category}
                  </p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">{item.price}</p>
                    <div className="flex items-center border-1 border-color dark:border-gray-400 rounded-lg">
                      <p
                        className="p-2 text-red-600 cursor-pointer"
                        onClick={() => setCount(count - 1)}
                      >
                        <AiOutlineMinus />
                      </p>
                      <p className="p-2 border-x-1 dark:border-gray-400 dark:text-white">
                        {count}
                      </p>
                      <p
                        className="p-2 text-green-600 cursor-pointer"
                        onClick={() => setCount(count + 1)}
                      >
                        <AiOutlinePlus />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>
        </div>
        <div className="mt-3">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;

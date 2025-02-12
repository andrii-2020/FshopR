import React, { useState } from 'react';
import {useLocation, useNavigate } from "react-router-dom"


export default function FormsAdd() {
    const { state } = useLocation()
    const [bookingData, setBookingData] = useState({
        f_name: '',
        l_name: '',
        phone: '',
        name_product: state.name,
        size_product: state.size,
        color_product: state.color,
        price_product: state.price

    });
    const [showAlert, setShowAlert] = useState(false);
   
    

    const handleBookingChange = (e) => {
        const { name, value } = e.target;
        setBookingData(prev => ({
            ...prev,
            [name]: value
        }));
        
    };

    const _goHome = useNavigate()
    const SendMessage = () => {
        console.log(bookingData)
        fetch('/api/sms/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                bookingData
            )
          })
          .catch(error => console.error(error));
        setShowAlert(true)
        setTimeout(()=>{
            setShowAlert(false)
            _goHome('/')
        }, 6000)

    };

    return (

        <div className="w-full h-screen mx-auto flex dark:bg-gray-900">

            <div className="lg:w-[80%] md:w-[90%] sm:w-[92%] w-[96%] mx-auto flex items-center justify-center">

                <div className="w-full md:p-6 p-4 md:mt-0 sm:p-8 dark:bg-gray-900">

                    {showAlert && 
                        <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 p-5 text-center animate-bounce"  role="alert">
                        <p class="font-bold">Дякуємо за замовлення.</p>
                        <p class="text-sm">На протязі 1-год. з вами зв'яжиться продавець</p>
                    </div>
                    }
                    <div className="w-4/5 mx-auto shadow-2xl rounded-sm p-10">

                        <h1
                            className="text-2xl font-semibold p-4 bg-gray-200 shadow-lg dark:bg-gray-800 dark:text-white rounded-sm">
                            Ви вибрали  <span style={{ color: 'rgba(124, 115, 120, 0.8)' }}>{state.name}</span> розмір
                            <span style={{ color: 'rgba(124, 115, 120, 0.8)' }}> {state.size} </span>
                            Колір <span style={{ color: 'rgba(124, 115, 120, 0.8)' }}>{state.color} </span>
                            Ціна <span style={{ color: 'rgba(124, 115, 120, 0.8)' }}> {state.price} </span>Грн.
                        </h1>


                        <div className="w-full md:flex sm:gap-2 gap-0 text-center">
                            <div className="bg-gray-100 dark:bg-gray-800 w-full px-4 py-6">


                                <div className="w-full">
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Імя
                                    </label>
                                    <input
                                        type="text"
                                        name="f_name"
                                        id="first_name"
                                        className="bg-gray-50 border border-gray-300 text-center text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={bookingData.f_name}
                                        onChange={handleBookingChange}
                                        style={{ borderColor: bookingData.f_name.length === 0 ? 'red' : '' }}

                                    />
                                </div>

                                <div className="w-full">
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Фамілія
                                    </label>
                                    <input type="text"
                                        name="l_name"
                                        id="first_name"
                                        className="bg-gray-50 border border-gray-300 text-center text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={bookingData.l_name}
                                        onChange={handleBookingChange}
                                        style={{ borderColor: bookingData.l_name.length === 0 ? 'red' : '' }}
                                    />
                                </div>

                                <div className="w-full">
                                    <label
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Номер телефону
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        maxLength={9}
                                        id="phone"
                                        pattern="[0-9]{9}"
                                        className="bg-gray-50 border border-gray-300 text-center text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={bookingData.phone}
                                        onChange={handleBookingChange}
                                        style={{ borderColor: bookingData.l_name.length === 0 ? 'red' : '' }}
                                    />
                                </div>

                            </div>


                        </div>

                        <div className="w-full flex justify-center p-2 bg-gray-200 dark:bg-gray-800">
                            <button
                                className="sm:px-8 px-4 py-2 bg-transparent text-white rounded-lg border-2 animate-pulse"
                                onClick={() => { SendMessage() }}
                                disabled={bookingData.l_name === '' || bookingData.f_name === '' || bookingData.phone === '' ? true : false}
                            >
                                Нідіслати продавцю
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

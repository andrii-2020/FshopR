import React, { useState } from 'react';
import {useLocation, useNavigate } from "react-router-dom"
import config from "../../services/config";


export default function FormsAdd() {
    const { state } = useLocation()
    const [bookingData, setBookingData] = useState({
        f_name: '',
        l_name: '',
        phone: '',
        name_product: state.name,
        price_product: state.price,
        city: '',
        number_posts: ''

    });
    const [showAlert, setShowAlert] = useState(false);
    const [validPhone, setvalidPhone] = useState(false);
   
    

    const handleBookingChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setBookingData(prev => ({
            ...prev,
            [name]: value
        }));
        if (bookingData.phone.match(/^[0-9\b]+$/)) {
            if(bookingData.phone.search('0') === 0) {
                setvalidPhone(true)
            }
        } else {
            setvalidPhone(false)
        }
        
    };

    const _goHome = useNavigate()
    const SendMessage = () => {
        setShowAlert(true)
        fetch(`${config.apiUrl}/sms/`, {
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
        }, 5000)

    };

    return (

        <div className="w-full h-screen mx-auto flex bg-gray-900 ">

            <div className="lg:w-[80%] md:w-[90%] sm:w-[92%] w-[96%] mx-auto flex items-center justify-center">

                <div className="w-full md:p-6 p-4 md:mt-0 sm:p-8 bg-gray-900">

                    {showAlert && 
                        <div className="bg-blue-100 border-t border-b border-blue-500
                        text-blue-700 px-4 py-3 p-5 text-center animate-bounce"  role="alert"
                            style={{top: '50%', position: 'sticky'}}
                        >
                        <p className="font-bold">Дякуємо за замовлення.</p>
                        <p className="text-sm">На протязі 1-год. з вами зв'яжиться продавець</p>
                    </div>
                    }
                    <div className="w-4/5 mx-auto shadow-2xl rounded-sm p-10">

                        <h1
                            className="text-2xl font-semibold p-4  shadow-lg bg-gray-800 text-white rounded-sm">
                            Ви вибрали <span style={{color: 'rgba(124, 115, 120, 0.8)'}}>{state.name}</span>
                            <span style={{color: 'rgba(124, 115, 120, 0.8)'}}>{state.color} </span>
                            Ціна <span style={{color: 'rgba(124, 115, 120, 0.8)'}}> {state.price} </span>Грн.
                        </h1>


                        <div className="w-full md:flex sm:gap-2 gap-0 text-center">
                            <div className=" bg-gray-800 w-full px-4 py-6">


                                <div className="w-full">
                                    <label
                                        className="block mb-2 text-sm font-medium text-white">Імя
                                    </label>
                                    <input
                                        type="text"
                                        name="f_name"
                                        id="first_name"
                                        className="bg-gray-50 border border-gray-300 text-center
                                        text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
                                        focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                        dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={bookingData.f_name}
                                        onChange={handleBookingChange}
                                        style={{borderColor: bookingData.f_name.length === 0 ? 'red' : ''}}

                                    />
                                </div>

                                <div className="w-full">
                                    <label
                                        className="block mb-2 text-sm font-medium text-white">Призвіще
                                    </label>
                                    <input type="text"
                                           name="l_name"
                                           id="first_name"
                                           className="bg-gray-50 border border-gray-300 text-center
                                           text-gray-900
                                           sm:text-sm rounded-lg
                                           focus:ring-primary-600
                                           focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600
                                           dark:placeholder-gray-400 dark:text-white
                                           dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           value={bookingData.l_name}
                                           onChange={handleBookingChange}
                                           style={{borderColor: bookingData.l_name.length === 0 ? 'red' : ''}}
                                    />
                                </div>

                                <div className="w-full">
                                    <label
                                        style={{color: validPhone === false ? 'red' : 'white'}}
                                        className="block mb-2 text-sm font-medium text-gray-900">
                                        {validPhone? `${bookingData.phone}` : 'Номер телефону: 0682223344'}
                                    </label>
                                    <input
                                        placeholder='0682223344'
                                        type="tel"
                                        name="phone"
                                        maxLength={10}
                                        id="phone"
                                        className="bg-gray-50 border border-gray-300 text-center text-gray-900
                                        sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block
                                        w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                                        value={bookingData.phone}
                                        onChange={handleBookingChange}
                                        style={{borderColor: bookingData.l_name.length === 0 ? 'red' : ''}}
                                    />
                                </div>

                                <div className="w-full">
                                    <label
                                        className="block mb-2 text-sm font-medium text-white">Місто/село
                                    </label>
                                    <input type="text"
                                           name="city"
                                           id="city"
                                           className="bg-gray-50 border border-gray-300 text-center
                                           text-gray-900
                                           sm:text-sm rounded-lg
                                           focus:ring-primary-600
                                           focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600
                                           dark:placeholder-gray-400 dark:text-white
                                           dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           value={bookingData.city}
                                           onChange={handleBookingChange}
                                           style={{borderColor: bookingData.city.length === 0 ? 'red' : ''}}
                                    />
                                </div>

                                <div className="w-full">
                                    <label
                                        className="block mb-2 text-sm font-medium text-white">Номер відділення нової пошти
                                    </label>
                                    <input type="text"
                                           name="number_posts"
                                           id="number_posts"
                                           className="bg-gray-50 border border-gray-300 text-center
                                           text-gray-900
                                           sm:text-sm rounded-lg
                                           focus:ring-primary-600
                                           focus:border-primary-600 block w-full p-2.5
                                           dark:bg-gray-700 dark:border-gray-600
                                           dark:placeholder-gray-400 dark:text-white
                                           dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           value={bookingData.number_posts}
                                           onChange={handleBookingChange}
                                           style={{borderColor: bookingData.number_posts.length === 0 ? 'red' : ''}}
                                    />
                                </div>

                            </div>


                        </div>

                        <div className="w-full flex justify-center p-2  bg-gray-800">

                            <button
                                className="sm:px-8 px-4 py-2 bg-transparent text-white rounded-lg border-2 animate-pulse"
                                onClick={() => {
                                    SendMessage()
                                }} disabled={bookingData.l_name === ''
                                || bookingData.f_name === ''
                                || validPhone === false
                                || bookingData.city === ''
                                || bookingData.number_posts === ''
                            }

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

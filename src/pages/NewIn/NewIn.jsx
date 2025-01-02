
import React from 'react'
import { categories, trending } from './NewData'
const NewIn = () => {
    return (
        <section class="text-gray-600 body-font my-16">
            <div class="w-full px-5 py-24 mx-auto">

                <div class="flex flex-col lg:flex-row  flex-wrap -m-4 w-full mx-auto">
                    <div className='lg:pl-10 lg:w-2/5 flex flex-col md:flex-row justify-around  px-10 md:px-0'>
                        <div class=" lg:w-1/2 sm:w-1/2 w-full mb-10  lg:mb-0">
                            <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm  sm:text-left uppercase ">Category</h2>
                            <nav class="flex flex-col sm:items-start sm:text-left  -mb-1 space-y-2.5">
                                {categories.map((item, index) => (

                                    <a>
                                        <span key={index} class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>{item}
                                    </a>
                                ))}

                            </nav>
                        </div>
                        <div class=" lg:w-1/2 sm:w-1/2 w-full mb-10 lg:mb-0">
                            <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm  sm:text-left uppercase">Trending</h2>
                            <nav class="flex flex-col sm:items-start sm:text-left -mb-1 space-y-2.5">
                                {trending.map((item, index) => (

                                    <a>
                                        <span key={index} class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>{item}
                                    </a>
                                ))}

                            </nav>
                        </div>

                    </div>
                    <div className=' lg:w-[60%] flex flex-col md:flex-row justify-center'>
                        <div class="p-4 lg:w-1/3 sm:w-1/2 w-full ">
                            <img alt="ecommerce" class="border border-gray-100 w-full h-full object-cover object-center rounded" src="https://images.unsplash.com/photo-1610132366635-2d140c69a3ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8" />
                            <span className='font-medium title-font mt-3 text-gray-900 text-sm text-center sm:text-left uppercase '>Tops</span>
                        </div>
                        <div class="p-4 lg:w-1/3 sm:w-1/2 w-full ">
                            <img alt="ecommerce" class="border border-gray-100  w-full h-full object-cover object-center rounded" src="https://images.unsplash.com/photo-1630758664435-72a78888fb9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxlbFNxdjBhOG1STXx8ZW58MHx8fHx8" />
                            <span className=' font-medium title-font mt-3 text-gray-900 mb-4 text-sm text-center sm:text-left uppercase '>Fall Collection</span>

                        </div>
                        <div class="p-4 lg:w-1/3 sm:w-1/2 w-full ">
                            <img alt="ecommerce" class="border border-gray-100  w-full h-full object-cover object-center rounded" src="https://plus.unsplash.com/premium_photo-1661326280617-ba5f611d1746?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <span className=' font-medium title-font mt-3 text-gray-900 mb-4 text-sm text-center sm:text-left uppercase '>Formal Wear</span>

                        </div>
                       
                    </div>
                </div>

            </div>
        </section >
    )
}

export default NewIn

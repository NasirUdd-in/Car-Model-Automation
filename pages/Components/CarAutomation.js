import React from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image'


function CarAutomation() {
    const { register, handleSubmit } = useForm();
    const handleRegistration = (data) => console.log(data)
    return (
        <div>
            <h1>CHOOSE YOUR CAR MODEL</h1>
            <div className='container grid gap-10 mx-auto lg:grid-cols-2 xl:grid-cols-5 '>

                <div className='col-span-2 px-6 py-16 border-2'>
                    {/* Upload your car start */}
                    <div className="mb-3 w-96">
                        <label htmlFor="formFileMultiple" className="form-label inline-block mb-2 text-gray-700">Upload Your Car</label>
                        <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFileMultiple" multiple />
                    </div>
                    {/* Upload your car finish*/}
                </div>
                <div className=' w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-coolGray-900 shadow-slate-50 border-2'>
                    <form onSubmit={handleSubmit(handleRegistration)}>
                        <div>
                            <label>Chassis Number*</label>
                            <input className='w-full py-3 pr-5 my-2 my-0 inline-block border border-solid border-stone-500 rounded box-border border p-4'
                                type="number" name='chassis_number' {...register('chassis_number')} placeholder="Enter Chassis Number"></input>
                        </div>
                        <div>
                            <label>Brand Name</label>
                            <input className='w-full py-3 pr-5 my-2 my-0 inline-block border border-solid border-stone-500 rounded box-border p-4'
                                type="text" name='brand_name' {...register('brand_name')} placeholder="Enter Brand Name"></input>
                        </div>
                        <div>
                            <label>Condition</label>
                            <input className='w-full py-3 pr-5 my-2 my-0 inline-block border border-solid border-stone-500 rounded box-border p-4'
                                type="text" name='condition' {...register('condition')} placeholder="Enter Condition"></input>
                        </div>
                        <div>
                            <label>Maker*</label>
                            <input className='w-full py-3 pr-5 my-2 my-0 inline-block border border-solid border-stone-500 rounded box-border p-4'
                                type="text" name='maker' {...register('maker')} placeholder="Enter Maker"></input>
                        </div>
                        <div>
                            <label>Model*</label>
                            <input className='w-full py-3 pr-5 my-2 my-0 inline-block border border-solid border-stone-500 rounded box-border p-4'
                                type="text" name='model' {...register('model')} placeholder="Enter Model"></input>
                        </div>
                        <div>
                            <label>Car Grade/Package</label>
                            <input className='w-full py-3 pr-5 my-2 my-0 inline-block border border-solid border-stone-500 rounded box-border p-4'
                                type="text" name='car_grade_package' {...register('car_grade_package')} placeholder="Enter Car Grade/Package"></input>
                        </div>
                        <div>
                            <label>Model Year</label>
                            <input className='w-full py-3 pr-5 my-2 my-0 inline-block border border-solid border-stone-500 rounded box-border p-4'
                                type="number" name='model_year' {...register('model_year')} placeholder="Enter Model Year"></input>
                        </div>
                        <div>
                            <label>Engine Number</label>
                            <input className='w-full py-3 pr-5 my-2 my-0 inline-block border border-solid border-stone-500 rounded box-border p-4'
                                type="number" name='engine_number' {...register('engine_number')} placeholder="Enter Engine Number"></input>
                        </div>
                        <button className='w-full bg-teal-400 text-white py-3.5 pr-5 my-2 pr-0 border-none rounded cursor-pointer'>Submit</button>
                    </form>
                </div>


            </div>
        </div>
    )
}

export default CarAutomation
import React from 'react'
import { useForm } from 'react-hook-form'

function CarAutomation() {
    const { register, handleSubmit } = useForm();
    const handleRegistration = (data) => console.log(data)
    return (
        <div>
            <h2>CHOOSE YOUR CAR MODEL</h2>
            <div className='grid grid-cols-3 gap-4 rounded-md bg-gray-200 p-5'>
                <div className='col-span-2'>
                    <h2>Drag & Drop you picture</h2>
                </div>
                <div>
                    <form onSubmit={handleSubmit(handleRegistration)}>
                        <div>
                            <label>Chassis Number*</label>
                            <input className='w-full py-3 pr-5 my-2 my-0 inline-block border border-solid border-stone-500 rounded box-border'
                                type="number" name='chassis_number' {...register('chassis_number')} placeholder="Enter Chassis Number"></input>
                        </div>
                        <div>
                            <label>Brand Name</label>
                            <input className='w-full py-3 pr-5 my-2 my-0 inline-block border border-solid border-stone-500 rounded box-border'
                                type="text" name='brand_name' {...register('brand_name')} placeholder="Enter Brand Name"></input>
                        </div>
                        <div>
                            <label>Condition</label>
                            <input className='w-full py-3 pr-5 my-2 my-0 inline-block border border-solid border-stone-500 rounded box-border'
                                type="text" name='condition' {...register('condition')} placeholder="Enter Condition"></input>
                        </div>
                        <div>
                            <label>Maker*</label>
                            <input className='w-full py-3 pr-5 my-2 my-0 inline-block border border-solid border-stone-500 rounded box-border'
                                type="text" name='maker' {...register('maker')} placeholder="Enter Maker"></input>
                        </div>
                        <div>
                            <label>Model*</label>
                            <input className='w-full py-3 pr-5 my-2 my-0 inline-block border border-solid border-stone-500 rounded box-border'
                                type="text" name='model' {...register('model')} placeholder="Enter Model"></input>
                        </div>
                        <div>
                            <label>Car Grade/Package</label>
                            <input className='w-full py-3 pr-5 my-2 my-0 inline-block border border-solid border-stone-500 rounded box-border'
                                type="text" name='car_grade_package' {...register('car_grade_package')} placeholder="Enter Car Grade/Package"></input>
                        </div>
                        <div>
                            <label>Model Year</label>
                            <input className='w-full py-3 pr-5 my-2 my-0 inline-block border border-solid border-stone-500 rounded box-border'
                                type="number" name='model_year' {...register('model_year')} placeholder="Enter Model Year"></input>
                        </div>
                        <div>
                            <label>Engine Number</label>
                            <input className='w-full py-3 pr-5 my-2 my-0 inline-block border border-solid border-stone-500 rounded box-border'
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
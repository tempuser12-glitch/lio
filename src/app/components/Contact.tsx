'use client'
import { ChangeEvent, useState } from "react";
import Toast from "../react_bits/Toast";
import emailjs from "@emailjs/browser";


type Errors = {
    name?: string;
    email?: string;
};

const Contact = () => {
    const [toaststatus, setToastStatus] = useState(false);
    const [datas, setDatas] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<Errors>();
    let date = new Date();



    const validate = () => {
        let newErr: Errors = {};
        let nameRegex = /^[A-Za-z ]+$/;
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!nameRegex.test(datas.name.trim())) {
            newErr.name = 'Invalid Name'
        }
        if (!emailRegex.test(datas.email)) {
            newErr.email = 'Invalid Email'
        }
        return newErr;
    }
    const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = evt.target;
        setDatas({ ...datas, [name]: value });
    }

    const hanldeClear = () => {
        setDatas({
            name: '',
            email: '',
            message: ''
        })
    }



    const handleSubmit = async () => {
        let errors = validate()
        // console.log(errors)
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        }
        else {
            try {
                const res = await emailjs.send(
                    'service_5t4b5ke',
                    'template_s1hkeio',
                    {
                        name: datas.name,
                        time: `${date.getHours()}:${date.getMinutes()}`,
                        message: `Mail id : ${datas.email}\n ${datas.message}`
                    },
                    'WetdwQtA0Y4kcPuJL'
                )
                if (res.status === 200) {
                    setDatas({
                        name: '',
                        email: '',
                        message: ''
                    })
                    setToastStatus(true);
                }
            }
            catch (err) {
                console.error("EmailJS Error:", err);
            }
            console.log(datas)
            setDatas({
                name: '',
                email: '',
                message: ''
            })

        }
    }
        

    return (
        <section className='custom-container w-full pt-16 px-6 pb-6 flex flex-col items-center justify-center gap-6 lg:flex-row'>
            <div className='w-full'>
                <h2 className="text-6xl font-bold">Get in touch</h2>
            </div>
            <div className='w-full'>
                <label htmlFor="Name" className='text-sm font-normal mt-4 mb-2 block'>Name<span className="text-red-500">*</span></label>
                <input type="text" name="name" id="Name" className="w-full h-11 rounded-lg border outline-0 px-3 hover:border-primary focus:border-primary focus:shadow-[0_0_0_0.25rem_#0d6efd40]" onChange={handleChange} value={datas.name} autoComplete='off' />
                {errors?.name && <span className="text-red-500 text-xs font-normal">{errors.name}</span>}


                <label htmlFor="email" className='text-sm font-normal mt-4 mb-2 block'>Email<span className="text-red-500">*</span></label>
                <input type="email" name="email" id="email" className="w-full h-11 rounded-lg border outline-0 px-3 hover:border-primary focus:border-primary focus:shadow-[0_0_0_0.25rem_#0d6efd40]" value={datas.email} onChange={handleChange} autoComplete='off' />
                {errors?.email && <span className="text-red-500 text-xs font-normal">{errors.email}</span>}

                <label htmlFor="message" className='text-sm font-normal mt-4 mb-2 block'>Message</label>
                <textarea rows={6} name="message" id="message" className="w-full rounded-lg border outline-0 p-3 resize-none hover:border-primary focus:border-primary focus:shadow-[0_0_0_0.25rem_#0d6efd40]" value={datas.message} onChange={handleChange}></textarea>
                <div className="w-full pt-3">
                    <button className="border border-[#FFDD00] text-center text-black px-5 py-2 rounded-4xl cursor-pointer" onClick={hanldeClear}>Clear All</button>
                    <button className="shine ml-4 border border-transparent bg-primary text-center text-white px-5 py-2 rounded-4xl cursor-pointer hover:bg-[#03387e]" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            {
                toaststatus && <Toast autoClose={3000} toastMessage="Submitted Successfully 🎈" onClose={(status) => { setToastStatus(status) }} />
            }

        </section>
    )
}

export default Contact

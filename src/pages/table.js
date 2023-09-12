import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useState } from 'react'

export default function Table() {
    const [check, setCheck] = useState(false)
    const [button, setButton] = useState(false)
    const [field, setField] = useState({
        first_name: '',
        last_name: '',
        checkbox_val: check
    })
    const handelChange = (e) => {
        let setvalue = e.target.name;
        setCheck(!check)
        setField((prev) => ({...prev, [setvalue]: e.target.value}))
        console.log(field);
        if(field.checkbox_val === "true"){
            setButton(!button)
        }
        
    }
    
    const handelSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <>
        <Head>
            <title>SandDigital | About Page</title>
        </Head>
        <main className="flex w-full flex-col items-center justify-center">
            <Layout className="pt-16">
                <AnimatedText text="Table formatter Fuels Purpose!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
                <div className="formatter">
                    <form onSubmit={handelSubmit}>
                        <input type="text"
                            name="first_name"
                            value={field.first_name}
                            onChange={handelChange}
                        /><br/><br/>
                        <input type="text"
                            name="last_name"
                            value={field.last_name}
                            onChange={handelChange}
                        /><br/><br/>
                        <input type="checkbox"
                            name="checkbox_val"
                            value={check}
                            onChange={handelChange}
                        />
                        {button ? <button>Button2</button> : <button>Button1</button>}
                        {console.log(button)}
                    </form>
                </div>
            </Layout>
        </main>
    </>
  )
}

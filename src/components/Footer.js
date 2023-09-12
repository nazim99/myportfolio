import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t-[1px] border-solid border-dark font-medium text-lg dark:border-light sm:text-base">
        <Layout className="py-8 flex items-center justify-between dark:text-light lg:flex-col lg:py-6">
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className="flex items-center dark:text-light lg:py-2">
                Build By <span className="text-primary text-2xl px-1 dark:text-primaryDark">&#9825;</span>
                <Link href="/" className="underline underline-offset-2 ">CodeFrezeer</Link>
            </div>
            <Link href="/" className="underline underline-offset-2">Say Hello</Link>
        </Layout>
    </footer>
  )
}

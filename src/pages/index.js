import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import "../styles/global.css"
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing for next chapter.{' '}
              <Link href="/blog" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              My Life. My Story
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I'm just an amateur author that kill time with story.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/blog"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Read Now <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page"/>

export default IndexPage
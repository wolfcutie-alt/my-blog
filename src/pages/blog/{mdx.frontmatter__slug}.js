import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'

const BlogPost = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx
  return (
    <Layout>
      <div className='container mx-auto px-4 py-8'>
        <article className='prose lg:prose-xl'>
          <h1 className='text-4xl font-bold mb-4'>{frontmatter.title}</h1>
          <p className='text-gray-600 mb-8'>{frontmatter.date}</p>
          {body}
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`

export const Head = () => <Seo title=" Blog Post" />

export default BlogPost
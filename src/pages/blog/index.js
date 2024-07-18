import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql, Link } from 'gatsby'
import "../../styles/global.css"

const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <div className='conntainer mx-auto px-4 py-8'>
        <h1 className='text-4xl font-bold mb-8'>Blog</h1>
        <ul className='space-y-4'>
          {posts.map(post => (
            <li key={post.id} className='bg-white shadow-md rounded-lg p-6'>
                <Link to={`/blog/${post.frontmatter.slug}`}>
                  <h2 className='text-2xl font-semi bold text-blue-500 hover:underline'>{post.frontmatter.title}</h2>
                </Link>
              <p className='text-gray-600'>Posted: {post.frontmatter.date}</p>
          </li>
        ))
      }
      </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
        }
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
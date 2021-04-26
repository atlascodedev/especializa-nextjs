import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import TestimonialSlider from "./TestimonialSlider"

const TestimonialsRoot = styled("div")`
  background-color: #fbfbfb;
  padding-top: 5vh;
  padding-bottom: 5vh;

  @media (min-width: 1024px) {
    padding-top: 10vh;
    padding-bottom: 10vh;
  }
`

const TestimonialsTitle = styled("div")`
  text-align: center;
  font-size: 30px;
  font-family: "Suez One";
  font-weight: 600;
  /* margin-bottom: 100px; */
`

type Props = {}

export type Testimonial = {
  testimonialPicture: string
  testimonialText: string
  testimonialName: string
}

const TestimonialsSection: React.FC<Props> = () => {
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>([])

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentType: { eq: "testimonials" } } }
      ) {
        edges {
          node {
            frontmatter {
              testimonialPicture
              testimonialText
              testimonialName
            }
          }
        }
      }
    }
  `)

  React.useEffect(() => {
    let testimonialsArrayLocal: Array<Testimonial> = []

    data.allMarkdownRemark.edges.forEach((testimonialNode: any) => {
      let testimonialLocal: Testimonial = {
        testimonialPicture: testimonialNode.node.frontmatter.testimonialPicture,
        testimonialText: testimonialNode.node.frontmatter.testimonialText,
        testimonialName: testimonialNode.node.frontmatter.testimonialName,
      }

      testimonialsArrayLocal.push(testimonialLocal)
    })

    setTestimonials(testimonialsArrayLocal)
  }, [])

  return (
    <div>
      {testimonials.length > 0 ? (
        <TestimonialsRoot>
          <TestimonialsTitle>Depoimentos</TestimonialsTitle>

          <TestimonialSlider testimonials={testimonials} />
        </TestimonialsRoot>
      ) : null}
    </div>
  )
}

export default TestimonialsSection

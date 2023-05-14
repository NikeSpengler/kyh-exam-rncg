import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            EduArt.
          </h3>
          <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          EduArt is a platform for inspiration and further education. 
          Every day a new work of art is posted. Where you can read about the artist, 
          when the artist lived and was active, and what inspired the artist.
          We aim for learning to be joyful and easy to read. User-friendliness is important to us. 
          If you have any questions or feedback, please contact us!
          </h4>
          <div className="py-28 flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.linkedin.com/in/nikespengler/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Contact us
            </a>
            <a
              href="https://www.linkedin.com/in/nikespengler/"
              className="mx-3 font-bold hover:underline"
            >
              View on Linkedin
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-column items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center">
            EduArt.
          </h3>
          <h4 className="py-6 text-center text-lg mt-5 md:pl-12">
          EduArt is a platform for inspiration and further education. <br/>
          Every day a new work of art is posted.<br/>
          Where you can read about the artist, when the artist lived and was active, <br/>
          and what inspired the artist.<br/> <br/>
          We aim for learning to be joyful and easy to read. Usability is important to us. <br/>
          If you have any questions or feedback, please contact us!
          </h4>
          <div className="py-6 flex flex-col lg:flex-column justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.linkedin.com/in/nikespengler/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/nikespengler/"
              className="py-6 mx-3 font-bold hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

import { SiFacebook, SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'
import { SocialMediaLinks } from '../utils/socialMedia.enum'
import Card from './Card'
import Container from './container'
import Header from './header'
import { FaUserGraduate } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { ScrollLinkId } from '../utils/scrollLinkId.enum'

const Contact = () => {
  return (
    <Container scrollLinkId={ScrollLinkId.Contact}>
      <Header title="Contact Me" description="Get in touch!" />
      <Card>
        <div className="flex flex-col items-center justify-center gap-y-6 py-10">
          <h2 className="card-title text-center text-3xl">
            Let&apos;s get connected!
          </h2>
          <p className="text-center font-semibold">
            Do follow me on the following social platforms or contact me if you
            have any questions!
          </p>
          <div className="flex items-center">
            <FaUserGraduate size={24} className="mr-2" />
            <h4>Nanyang Technologoical University</h4>
          </div>
          <div className="flex items-center">
            <FiMail size={24} className="mr-2" />
            <h4>{SocialMediaLinks.Email}</h4>
          </div>

          <div className="flex gap-x-6">
            <SiGithub
              size={24}
              className="cursor-pointer"
              onClick={() =>
                window.open(SocialMediaLinks.Github, '_blank')?.focus()
              }
            />
            <SiLinkedin
              size={24}
              className="cursor-pointer"
              onClick={() =>
                window.open(SocialMediaLinks.LinkedIn, '_blank')?.focus()
              }
            />
            <SiInstagram
              size={24}
              className="cursor-pointer"
              onClick={() =>
                window.open(SocialMediaLinks.Instagram, '_blank')?.focus()
              }
            />
            <SiFacebook
              size={24}
              className="cursor-pointer"
              onClick={() =>
                window.open(SocialMediaLinks.Facebook, '_blank')?.focus()
              }
            />
          </div>
        </div>
      </Card>
      <h2 className="my-10 text-center">Copyright &copy; 2022 Lim Kian Yee</h2>
    </Container>
  )
}

export default Contact

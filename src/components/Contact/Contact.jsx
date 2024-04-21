import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCodeBranch, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="max-w-[20vw] min-w-fit flex justify-between border border-amber-100 space-y-6 border-solid rounded-2xl flex-col sm:min-h-[78vh] bg-white">
      {/*//header*/}
      <div className="flex flex-col justify-between h-full items-center py-8 rounded-2xl space-y-2">
        <img className="w-20 h-[6rem]" src={'/vite.svg'} alt={'vite-image'} />
        <h1 className="text-xl">
          Hamza <strong>Darej</strong>
        </h1>
        <span className="text-sm leading-3 text-center p-3 rounded-2xl bg-gray-100">Web Developer</span>
        <span className="space-x-4">
          <a target="_blank" href="https://www.instagram.com/hamzadarej1/" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2xl" color="gray" className="hover:text-sky-500" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/hamza-darej-068365210/" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" color="gray" className="hover:text-sky-500" />
          </a>
        </span>
      </div>
      {/*//deatils*/}
      <div className="text-center bg-gray-50">
        <div className="flex flex-col mx-20 space-y-5  justify-center py-3 items-start border-gray-400">
          <span className="flex-row flex text-sm space-x-2.5 w-full">
            <FontAwesomeIcon icon={faCalendarCheck} color="gray" size="xl" />
            <p>September 17, 1993</p>
          </span>
          <span className="flex-row flex text-sm space-x-2.5 w-full">
            <FontAwesomeIcon icon={faLocationDot} color="gray" size="xl" />
            <p>Leipzig,Germany</p>
          </span>
          <a
            target="_blank"
            href="https://github.com/hamzadarej"
            className="flex-row flex text-sm space-x-2.5 w-full hover:fill-sky-500"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faCodeBranch} color="gray" size="xl" className="hover:text-sky-500" />
            <p className="hover:text-sky-500">Gituhb</p>
          </a>
        </div>
      </div>
      {/*//footer email me*/}
      <div className="flex items-center justify-center min-h-[9rem] rounded-2xl flex-col gap-2">
        <a href="mailto:darejhamza@gmail.com" className="bg-sky-500 py-2 px-10 rounded-2xl text-white hover:bg-sky-400">
          Email me
        </a>
        <a
          href="/CV.pdf"
          download="Hamza_darej_cv.pdf"
          className="text-sky-500 hover:text-sky-400 cursor-pointer text-[12px]"
        >
          DownLoad My CV
        </a>
      </div>
    </div>
  );
};

export default Contact;

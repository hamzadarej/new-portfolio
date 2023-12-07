import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faPaperPlane, faMobile, faHeadset } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
  const boxData = [
    {
      icon: <FontAwesomeIcon icon={faLaptopCode} size="2xl" className="hover:text-sky-500 text-sky-500" />,
      title: 'Web development',
      desc: 'Able to create beautiful sites by using',
      tools: 'HTML.CSS.JS',
    },
    {
      icon: <FontAwesomeIcon icon={faPaperPlane} size="2xl" color="blue" className="hover:text-sky-500 text-sky-500" />,
      title: 'React development',
      desc: 'Able to create HTML EMAILS quickly and effective',
      tools: null,
    },
    {
      icon: <FontAwesomeIcon icon={faMobile} size="2xl" color="blue" className="hover:text-sky-500 text-sky-500" />,
      title: 'Responsive design',
      desc: 'Able to create mobile responsible sites at professional level',
      tools: null,
    },
    {
      icon: <FontAwesomeIcon icon={faHeadset} size="2xl" color="blue" className="hover:text-sky-500 text-sky-500" />,
      title: 'Strong support',
      desc: 'Able to communicate ideas in a brief way',
      tools: null,
    },
  ];

  return (
    <div className="bg-white flex-col flex justify-between rounded-2xl">
      <p className="mt-3 mb-2 mx-1">
        I describe my self as somone whos persiastant, a quik lerner and loves probem solving by using simple and
        scrable solutions.
      </p>
      <div className="bg-gray-50 h-full pb-6 rounded-2xl">
        <h2 className="text-xl font-bold p-8">What I'm doing</h2>
        <div className="flex flex-row flex-wrap gap-6 justify-center items-center">
          {boxData.map((box) => (
            <div
              className="border bg-white items-center justify-evenly flex flex-row border-solid border-solid w-[22rem] h-[9rem] rounded-3xl"
              key={box.desc}
            >
              <div className="pb-5">{box.icon}</div>
              <div className="flex flex-col text-sm">
                <span className="">{box.title}</span>
                <div className="text-gray-600 max-w-[15rem]">{box.desc}</div>
                {box.tools && <strong>{box.tools}</strong>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

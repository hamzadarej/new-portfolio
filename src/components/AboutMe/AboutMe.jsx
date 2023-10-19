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
      desc: 'Able to create beautiful sites by using',
      tools: 'HTML.CSS.JS',
    },
    {
      icon: <FontAwesomeIcon icon={faMobile} size="2xl" color="blue" className="hover:text-sky-500 text-sky-500" />,
      title: 'Responsive design',
      desc: 'Able to create beautiful sites by using',
      tools: 'HTML.CSS.JS',
    },
    {
      icon: <FontAwesomeIcon icon={faHeadset} size="2xl" color="blue" className="hover:text-sky-500 text-sky-500" />,
      title: 'Strong support',
      desc: 'Able to create beautiful sites by using',
      tools: 'HTML.CSS.JS',
    },
  ];

  return (
    <div className="bg-white flex-col flex justify-between rounded-2xl">
      <p className="m-5">
        I describe my self as somone whos persiastant, a quik lerner and loves probem solving by using simple and
        scrable solutions.
      </p>
      <div className="bg-gray-50 h-full pb-6 rounded-2xl">
        <h2 className="text-xl font-bold p-8">What I'm doing</h2>
        <div className="flex flex-row flex-wrap gap-6 justify-center items-center">
          {boxData.map((box) => (
            <div
              className="border bg-white items-center justify-evenly flex flex-row border-solid border-solid w-[22rem] h-[9rem] rounded-3xl"
              key={box}
            >
              <div className="pb-5">{box.icon}</div>
              <div className="flex flex-col text-sm">
                <span className="">{box.title}</span>
                <span className="text-gray-600">{box.desc}</span>
                <strong>{box.tools}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

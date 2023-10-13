

const AboutMe = () => {


    return (
        <div className="bg-white">
            <p className="m-5">I describe my self as somone whos persiastant, a quik lerner and loves probem solving by using simple and scrable solutions.</p>
<div className="bg-gray-50">
    <h2 className="text-xl font-bold p-10">What I'm doing</h2>
    <div className='flex flex-row flex-wrap gap-6 justify-center items-center'>
    {['1', '2', '3', '4'].map((box)=>(<div className='border bg-white border-solid border-solid w-[22rem] h-[9rem] rounded-3xl' key={box} >{box}</div>))}

    </div>
</div>
        </div>
    )

}

export default AboutMe
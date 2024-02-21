
const Course = ({course}) => {
    console.log(course);
    const {title,description, img, price, credit} = course;
    return (
        <div className="border rounded-lg bg-white p-3 space-y-2 md:space-y-4">
            <img className="w-full" src={img} alt="" />
            <div className="md:h-32">
            <h2 className="font-semibold">{title} </h2>
            <p className="text-sm text-gray-400	 font-light">{description}</p>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <p>Price: <span>{price}</span></p>
                </div>
                <div>
                    <p>Credit: <span>{credit}</span>hr</p>
                </div>
            </div>
        </div>
    );
};

export default Course;
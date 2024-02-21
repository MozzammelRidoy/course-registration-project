import { FiDollarSign} from "react-icons/fi";
import { RxStopwatch } from "react-icons/rx";
import PropTypes from 'prop-types';


const Course = ({course, handleSelectCourse}) => {
    // console.log(course);
    const {title,description, img, price, credit} = course;
    return (
        <div className="border rounded-lg bg-white p-3 space-y-3 md:space-y-4">
            <img className="w-full rounded-lg" src={img} alt="" />
            <div className="md:h-32">
            <h2 className="font-semibold">{title} </h2>
            <p className="text-sm text-gray-400	 font-light">{description}</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex justify-center items-center text-sm">
                  <p className="text-2xl me-1"><FiDollarSign /> </p>  <p>Price : <span>{price}</span></p>
                </div>
                <div className="flex justify-between items-center text-sm" >
                   <p className="text-2xl me-1"><RxStopwatch /></p> <p>Credit : <span>{credit}</span> hr</p>
                </div>
            </div>
            <div className="">
                <button onClick={()=>handleSelectCourse(course)} className="w-full border bg-blue-500 text-center rounded-lg py-1 text-white">Select</button>
            </div>
        </div>
    );
};

Course.propTypes ={
    course: PropTypes.object,
    handleSelectCourse: PropTypes.func
}

export default Course;
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Courrse/Course";

const Courses = () => {
    const [courses, setCourses] = useState([]); 

    useEffect(()=> {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    } , [])
    return (
        <div className="md:w-4/5 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
            
        </div>
    );
};

export default Courses;
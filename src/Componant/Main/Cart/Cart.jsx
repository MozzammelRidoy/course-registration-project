
const Cart = ({courses}) => {
    // console.log(courses)
    return (
        <div className="md:w-1/4 mt-4 md:mt-0 h-1/2  md:ms-4 p-4 rounded-lg bg-white">
            <h3 className="text-blue-500 text-center font-semibold mb-2">Credit Hour Remaining 7 hr </h3>
            <hr />
            <div className="my-4">
                <h3 className="font-semibold">Course Name </h3>

                <div className="mt-4 ms-4">
                <ol className="list-decimal">
                            {
                                courses.map(course => <li key={course.id} className="text-sm text-gray-400">{course.title} </li>)
                            }
                            
                        </ol>
                </div>
            </div>
            <hr />
            <div className="my-2">
                <h3 className="">Total Credit Hour : 13</h3>
            </div>
            <hr />
            <div className="mt-2">
                <h3>Total Price : 48000 Taka</h3>
            </div>
            
        </div>
    );
};

export default Cart;
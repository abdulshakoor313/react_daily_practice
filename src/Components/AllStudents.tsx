import StudentCard from './StudentCard';

const studentData = [
    {
        image: "https://images.unsplash.com/photo-1777975433721-37a919288c7a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Anas",
        age: 10,
        clas: "Two",
        section: "A",
    }
];

const AllStudents= () =>(
    <div>
        {studentData.map((item,index)=>(
            <StudentCard key={index}{...item}/>
        ))}
    </div>

)
export default AllStudents;


















// const AllStudents= () =>(
//     <div>
//         {studentData.map((item,index)=>(
//             <StudentCard key={index}{...item}/>
//         ))}
//     </div>
// )
// export default AllStudents;

// const AllStudents = () => (
//     <div>
//         {studentData.map((item,index)=>(
//             <StudentCard key={index}{...item}/>
//         ))}
//     </div>
// );

// export default AllStudents;



    // <div>
    //     {studentData.map((item, index) => (
    //         <StudentCard key={index}{...item} />
    //     ))}
    // </div>
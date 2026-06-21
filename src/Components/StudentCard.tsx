type StudentDataTypes = {
    image: string;
    name: string;
    age: number;
    clas: string;
    section: string;
}


function StudentCard({ image, name, age, clas, section }: StudentDataTypes) {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg p-6 border-2 justify-around">
            <img 
            className="w-full h-48 object-cover rounded-lg"
            src={image} />
            <h1 className="text-3xl font-bold ">Name{name}</h1>
            <h2>Age {age}</h2>
            <h3>Class {clas}</h3>
            <h3>Section {section}</h3>
        </div>
    )
}

export default StudentCard

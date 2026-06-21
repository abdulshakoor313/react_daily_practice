import AllMembers from './Components/AllMembers'
import AllProducts from './Components/AllProducts'
import AllStudents from './Components/AllStudents'
import MyCard from './Components/MyCard'



function App() {
  return (
    <div className="flex justify-center items-center gap-6 bg-gray-100">
      <MyCard
      name="Abdul Shakoor"
      description="Frontend developer learning React"
      image="https://plus.unsplash.com/premium_photo-1781045230686-3b199165e902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"
      designation='CEO'
      email='dsd@gmail.com'
      />

       <MyCard
      name="Mehran"
      description="Class: 02"
      image="https://images.unsplash.com/photo-1780764895105-ea3037466236?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      designation='CEO'
      email='abc@gmail.com'
      />
      <AllProducts/>
      <AllStudents/>
      <AllMembers/>

    </div>
  )
}

export default App
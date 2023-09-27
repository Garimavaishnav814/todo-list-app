import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import TaskList from "../taskList/TaskList"
import bg from "../../../images/gv-logo2.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function SignUp() {
  const navigate=useNavigate()
    const [isSignUp,setIsSignUp]=useState(false)
    // const [userDataHold,setUserDataHold]=useState(null)
    const [inputSignUp,setInputSignUp]=useState({

    })
    useEffect(() => {
      const CheckUserAlreadyLoginOrNot=localStorage.getItem("Token")
      console.log(CheckUserAlreadyLoginOrNot,"CheckUserAlreadyLoginOrNot")
      if(CheckUserAlreadyLoginOrNot){
        navigate("/todo")
      }
    }, []);
    // const [inputLogin,setInputLogin]=useState({
    //   email:" ",
    //   password:" "
    // })

// console.log(inputLogin,"inputlogin")
const UserSignHandler=(e)=>{
  console.log(e.target.name,e.target.value,"sign Imformation")
  // if(isSignUp){
  //   setInputSignUp({
  //     ...inputSignUp,
  //     [e.target.name]: e.target.value
  //   })
  // }else{
  //   setInputLogin({
  //     ...inputLogin,
  //     [e.target.name]: e.target.value
  //   })
  // }
  setInputSignUp({
    ...inputSignUp,
    [e.target.name]: e.target.value
  })

}
const submitHandler= async()=>{
  try {
    if(isSignUp){
      const saveSignUpData= await fetch("http://localhost:5000/api/v1/signup",{
        method:"POST",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify(inputSignUp)
      }
      )
      toast.success("SignUp Successfully !")
      console.log(saveSignUpData,"save signup")
      
    }else{
      const saveLoginData=await fetch("http://localhost:5000/api/v1/login ",{
        method:"POST",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify(inputSignUp)
      }
      )
      const result=await saveLoginData.json()
      console.log(result.user, "user")
      // const userData=result.user
      localStorage.setItem("Token" , result.Token)
      localStorage.setItem("User" , JSON.stringify(result.user))
      navigate("/todo")
      toast.success(result ? "Login Successfull !":"Retry Again")
      // if(result){
        
      // }
      console.log(navigate("/todo"),"save login")
    }
    // setInputSignUp({
    //   // name:" ",
    //   email:" ",
    //   password:" "
    // })
    // const signUpData= await fetch('http://localhost:5000/signup',{
    //   method:"POST",
    //   headers:{
    //     Accept: 'application.json',
    //     'Content-Type': 'application/json'
    //   },
    //   body:JSON.stringify(inputSignUp)
    // })
    // console.log(signUpData,"fetch data")
    // await getData(),
    
    // console.log(inputSignUp,"data ")
    // if(userDataHold){
    //   console.log(userDataHold)
    // }else{
    //   console.log("data not found")
    //   setUserDataHold()
    // }

  } catch (error) {
    console.log(error)
  }


}
// const getData = async ()=>{
//   const response =await fetch('http://localhost:5000/');
//   const taskData=await response.json();
//   console.log(taskData , "taskData")
//   setAllTaskData(taskData);
// }

const signUpHandeler=()=>{
    setIsSignUp(!isSignUp)
    setInputSignUp({

    })
    // console.log("signUp")
}



    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-28 w-auto"
              src={bg}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              {isSignUp ? "Sign up your account":"Sign in to your account"}
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <form className="space-y-6" onSubmit={submitHandler} > */}
            { isSignUp &&
            <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>

                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={inputSignUp?.name}
                    onChange={(e)=>UserSignHandler(e)}
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
                }

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={inputSignUp?.email}
                    onChange={(e)=>UserSignHandler(e)}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={inputSignUp?.password}
                    onChange={(e)=>UserSignHandler(e)}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={submitHandler}
                >
                  {isSignUp ? "Sign-Up"  : "Sign in"}
                  {/* {isSignUp ? <TaskList/>:<SignUp/>} */}
                </button>
              </div>
            {/* </form> */}
  
            <p className="mt-10 text-center text-sm text-gray-500">
             {isSignUp ? "You have an account ?": "Don't have an account?" } <span className="underline cursor-pointer " onClick={signUpHandeler}> {isSignUp ? "Sign-in" :"Sign up"} </span>
            </p>
          </div>
        </div>
        <ToastContainer/>
      </>
    )
  }
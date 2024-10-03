import React, { useState } from "react"
import Text1 from "./Text1";
import axios from "axios";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Make sure to import CSS
const Main = ()=>{

  

  const [clicked, setClicked] = useState(false); // Initialize as a boolean

 const[name , setName] = useState();
 const[email , setEmail] = useState();
 const[data , setData] = useState();
  const handleClicked = () => {
    setClicked(prevClicked => !prevClicked); // Toggle the state
  };

  


  const HandleSubmit = async()=>{
      if(!name || !email || !data){
           if(!name){
               alert('Please write your name');

           }else if(!email){
               alert("Please write your email");
           }else{
               alert("Please write some messgae");
           }
           return;
      }

      try {
        const response = await axios.post("https://my-portfolio-gl02.onrender.com/api/sendMail", { name, email, data });
      
        if (response.status === 200) {  // Check for a successful status code
          alert("Mail has been sent successfully");
        } else {
          alert("Error in sending the mail, you can email to mahendra09022001@gmail.com");
        }
      } catch (error) {
        // Handle error if axios fails or an error response is returned
        alert("Error in sending the mail, you can email to mahendra09022001@gmail.com");
        console.error("Mail send error:", error);
      }
      
  }
     return (
        <>
        {/* <div  className="h-50 w-19 bg-green-500">
          <Text1 />
         </div> */}
         <div class=" top-10 right-20 animate-float bg-cover w-100vw h-auto" style={{backgroundImage: "url('https://img.freepik.com/premium-photo/cyberpunk-forest-futuristic-neon-forest-generative-ai-technology_899928-5.jpg')"}}>

         
           <section class="text-gray-600 body-font h-90">
  <div class="container mx-auto flex px-5 py-15 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <div class="flex-col items-start ml-4 my-10">
   
          <Text1 />
         

  <br className="hidden lg:inline-block" />

  <p className="mb-6 leading-relaxed text-xl text-white ">
    Hello! My name is Mahendra Singh. I have a strong interest in the fields of web development and competitive programming.
  </p>
  
</div>

      <div class="flex justify-center item-center">
      
        {/* <button class="inline-flex text-blue  border-0 py-2 px-6 drop-shadow-xl focus:outline-none  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300  hover: rounded text-lg"
        > 
        hire Me!</button> */}
        <button
  className="ml-0 inline-flex text-white border-0 py-2 px-6 rounded text-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
  onClick={handleClicked}
>
  Hire Me!
</button>

        <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">

    {clicked ? (
  <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Want to Contact Me
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
          Send me details with your name, email, and we will contact you soon...
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e)=>setName(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={(e)=>setData(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={HandleSubmit}>
              Send
            </button>
            <ToastContainer/>
          </div>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a className="text-xl text-white">
              Or Email at{' '}
              <span className="text-green-500">mahendra09022001@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
) : (
  <img
  className="w-50 h-50 ml-0 mt-10 sm:ml-0 md:item-center md:mt-10 rounded-full object-cover drop-shadow-lg" // Different sizes for mobile and desktop
  alt="hero"
  src="/myImg2.png"
  style={{ filter: 'drop-shadow(10px 7px 20px orange)' }}
/>

)}

   

    </div>
  </div>
</section>
 <div class="flex items-center justify-center mt-20 mb-10">
  <svg class="  animate-bounce w-10 h-20 my-3 mx-20" fill="blue" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
  </svg>
</div>
<div class="relative bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white rounded-lg p-6 w-4/5">
  <h1 class="text-2xl font-bold">My Profile's</h1>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="/resume_short.png" alt="blog"/>
          <div class="p-6">
            {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Resume</h2> */}
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3 text-white">My Resume</h1>
            <p class="leading-relaxed mb-10 text-white">Want to get my resume click on the below link.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href="https://drive.google.com/file/d/1YH3Ja0SaL2ps8BiM54Eyp9cFkOLFwLzr/view?usp=sharing">click here 
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="/github.png" alt="blog"/>
          <div class="p-6">
            
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3 text-white">My GitHub profile</h1>
            <p class="leading-relaxed mb-10 text-white">Want to  explore my github account click on the below link</p>
            <div class="flex items-center flex-wrap">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href="https://github.com/0mahendra">click here
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
             
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="/leetcode.jpg" alt="blog"/>
          <div class="p-6">
         
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3 text-white">My Leetcode profile</h1>
            <p class="leading-relaxed mb-3 text-white">I have solved 900+ problem and my rating is 1720 .want to know more .</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href="https://leetcode.com/u/mahendra_singh/">click here
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>


<div className=" border-t-10 border-lightBlue-500 mt-20"></div>

<div class="relative bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white rounded-lg p-6 w-4/5">
  <h1 class="text-2xl font-bold">My Project's</h1>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col">
      <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-24 h-full bg-indigo-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
        <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 text-white">Tech Used</h1>
        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 text-white">HTML , CSS , JavaScript , React , NodeJs , ExpressJs , MongoDB , Chakra UI , TailWind CSS , Socket.io , Botpress </p>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9GO2Q3uNbrAicw6gAO330-lexRVesuwLQHzvRYmTO9oxOB24Kwn7F8o_n38a6pA-_6U&usqp=CAU"/>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5 text-white">MedLinker</h2>
        <p class=" text-base leading-relaxed mt-2 text-white"> MedLinker is a  web application that focus on enhancing the interface between patients and healthcare providers.
        <br className="mb-3" ></br>
         Its multifaceted functionalities streamline the process of connecting patients with doctors, ensuring a seamless healthcare experience.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3" href="https://github.com/0mahendra/MedLinker">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full " src="https://blog.solguruz.com/wp-content/uploads/2023/11/How-to-develop-a-Meditation-App-like-Calm-and-Headspace.png"/>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5 text-white">Delight</h2>
        <p class="text-base leading-relaxed mt-2 text-white">It is overall Personaility development App. 
        <br className="mb-3"></br>
        It consist of chatting App ,Todo List for Daily works ,Meditation page for mental growth,Audio page to stroe and listen your audio It consist of contactUs page for any complains regarding the website .</p>
        <a class="text-indigo-500 inline-flex items-center mt-3" href="https://github.com/0mahendra/Delight">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fkjggdpr4b0mowtytta3p.png"/>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5 text-white" href="https://github.com/itsManish01/Snippeter">Snippter</h2>
        <p class="text-base leading-relaxed mt-2 text-white">Snippeter is a web-based application
         <br className="mb-3"></br>.It is aimed towards helping the developers to create & use their snippets across any platform like leetcode, Atcoder, GeekForGeeks, Codechef,etc. An AI assistant to help the new coders to help them in generating snippets for algorithms.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
</div>


<section class="text-gray-600 body-font  ">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20 text-white">
      <h1 class="sm:text-3xl text-2xl font-medium text-center title-font mb-4 text-white">My Skills</h1>
      
    </div>
    <div class="ml-11 flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full text-white">
        <h2 class="font-medium title-font tracking-widest  mb-4 text-xl text-center sm:text-left">Programming Languages</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span> c 
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>c++
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>JavaScript
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>python
          </a>
        
        </nav>
      </div>
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full text-white">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-xl text-center sm:text-left text-white">Frontend</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>HTML/CSS/JavaScript
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>React
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Chakra UI
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>TailWind CSS
          </a>
         
        </nav>
      </div>
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full text-white">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-xl text-center sm:text-left text-white">Backend</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>NodeJs
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>ExpressJs
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Socket.io
          </a>
        </nav>
      </div>
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full text-white">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-xl text-center sm:text-left text-white">Database</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>MongoDB
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Moongose
          </a>
          <a >
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>MySql
          </a>
        </nav>
      </div>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Want to  Contact Me </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">send me details with your name ,email and we will contact you soon .. .</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-white">Name</label>
            <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-white">Email</label>
            <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-white">Message</label>
            <textarea id="message" name="message" onChange={(e)=>setData(e.target.value)} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={HandleSubmit}>Send</button>
        </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-xl text-white">Or Email at <span class="text-green-500">mahendra09022001@gmail.com</span> </a>
       
        </div>
      </div>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 text-white">My Hobbies</h1>
    </div>
    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Play Volleyball</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">play badminton</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">play cricket</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">listen music during my free time</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Watching horror movies</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">learning about new Technologies</span>
        </div>
      </div>
    </div>

  </div>
</section>

</div>

        </>
     )
}

export default Main;
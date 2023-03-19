import { useState } from "react"
import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiOutlineBehance, AiOutlineGithub, AiOutlineWhatsApp} from "react-icons/ai"
import add from "../public/face.png"
import design from "../public/design.png"
import thumbs from "../public/thumbs.png"
import code from "../public/code.png"
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"




function App() {
  const [darkmode, setDarkmode] =useState(false);

  return (
    <div className={darkmode ? "dark" : ""}>
      <main className=" bg-white px-10 md:px-20 lg:px-30 dark:bg-gray-800 ">

        <section className="min-h-screen">

          <nav className=" py-10 mb-12 flex justify-between">
            {/* flex is naturally in column, so the flex on the parent above makes the children which are h1 and ul to align in column then later on the flex in the ul make the elements of the ul to align in a column*/}
            <h1 className=" text-xl font-Monteserat">Developed by Shalom</h1>
            <ul className="flex items-center">

              <li><BsFillMoonStarsFill onClick={() => setDarkmode(!darkmode)} className=" cursor-pointer text-2xl"/></li>

              <li><a href="#" className=" bg-teal-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li>
              {/* <li><a href="#" className=" bg-gradient-to-r from-cyan-500 to-yellow-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li> */}
            </ul>
          </nav>


          <div className=" text-center p-10">
            <h2 className=" text-5xl py-2 text-teal-500 font-medium">Nze Shalom</h2>
            <h3 className=" text-2xl py-2 md:text-3xl">Developer and designer</h3>
            <p className=" text-md py-5 leading-8 text-gray-800 md:text-l">Freelancer, providing services for programming and design needs.</p>
          </div>


          <div className=" text-5xl flex justify-center gap-14 py-3 text-gray-800">
           <AiOutlineGithub />
           <AiOutlineWhatsApp />
           <AiOutlineBehance />
          </div>

          <div className=" relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto md:w-96 md:h-96">
            <img src={add}/>
          </div>

        </section>


        
        <section>
          <div>
            <h3 className=" text-3xl py-2">Services I offer</h3>
            <p className="  text-md py-2 leading-8 text-gray-800">Since I started my journey as a freelancer developer & designer, I've done remote work for
            <span className=" text-teal-500"> agencies</span> consulted for <span className=" text-teal-500">startups</span> and collaborated with talented people to create digital products for both business and consumer use </p>
            <p className=" text-gray-800">I offer from a wide range of services, including brand design, programming and teaching.</p>
          </div>

          <div className=" lg:flex gap-10">
            <div className=" flex items-center flex-col justify-cente p-10 shadow-lg rounded-xl my-10">
              <img className=" w-20 h-20" src={design}/>
              <h3 className=" text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className=" py-2">Creating elegant designs suited for your needs, following current design theory.</p>
              <h4 className=" py-4 text-teal-600">Design tools I use</h4>
              <p className=" text-gray-800 py-1">Photoshop</p>
              <p className=" text-gray-800 py-1">Illustrator Figma</p>
              <p className=" text-gray-800 py-1">Adobe xd</p>
            </div>

            <div className=" flex items-center flex-col justify-cente p-10 shadow-lg rounded-xl my-10">
              <img className=" w-20 h-20" src={thumbs}/>
              <h3 className=" text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className=" py-2">Creating elegant designs suited for your needs, following current design theory.</p>
              <h4 className=" py-4 text-teal-600">Design tools I use</h4>
              <p className=" text-gray-800 py-1">Photoshop</p>
              <p className=" text-gray-800 py-1">Illustrator Figma</p>
              <p className=" text-gray-800 py-1">Adobe xd</p>
            </div>

            <div className=" flex items-center flex-col justify-cente p-10 shadow-lg rounded-xl my-10">
              <img className=" w-20 h-20" src={code}/>
              <h3 className=" text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className=" py-2">Creating elegant designs suited for your needs, following current design theory.</p>
              <h4 className=" py-4 text-teal-600">Design tools I use</h4>
              <p className=" text-gray-800 py-1">Photoshop</p>
              <p className=" text-gray-800 py-1">Illustrator Figma</p>
              <p className=" text-gray-800 py-1">Adobe xd</p>
            </div>

          </div>

        </section>
          <div>
            <h3 className=" text-3xl py-1">Portfolio</h3>
            <p className="  text-md py-2 leading-8 text-gray-800">Since I started my journey as a freelancer developer & designer, I've done remote work for
            <span className=" text-teal-500"> agencies</span> consulted for <span className=" text-teal-500">startups</span> and collaborated with talented people to create digital products for both business and consumer use </p>
            <p className=" text-gray-800">I offer from a wide range of services, including brand design, programming and teaching.</p>
          </div>
          
          <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap "> 

            <div className=" basis-1/3 flex-1 ">
              <img src={web1} className=" rounded-lg object-cover w-full h-full" />
            </div>

            <div className=" basis-1/3 flex-1 ">
              <img src={web2} className=" rounded-lg object-cover w-full h-full" />
            </div>

            <div className=" basis-1/3 flex-1 ">
              <img src={web3} className=" rounded-lg object-cover w-full h-full" />
            </div>

            <div className=" basis-1/3 flex-1 ">
              <img src={web4} className=" rounded-lg object-cover w-full h-full" />
            </div>

            <div className=" basis-1/3 flex-1 ">
              <img src={web5} className=" rounded-lg object-cover w-full h-full" />
            </div>

            <div className=" basis-1/3 flex-1 ">
              <img src={web6} className=" rounded-lg object-cover w-full h-full" />
            </div>

          </div>
        <section>


        </section>



      </main>


    </div>
  )
}

export default App

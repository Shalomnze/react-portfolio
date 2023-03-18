import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiOutlineBehance, AiOutlineGithub, AiOutlineWhatsApp} from "react-icons/ai"
import add from "../public/face.png"

function App() {

  return (
    <div>
      <main className=" bg-white px-10 ">

        <section className="min-h-screen">

          <nav className=" py-10 mb-12 flex justify-between">
            {/* flex is naturally in column, so the flex on the parent above makes the children which are h1 and ul to align in column then later on the flex in the ul make the elements of the ul to align in a column*/}
            <h1 className=" text-xl font-Monteserat">Developed by Shalom</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill className=" cursor-pointer text-2xl"/></li>
              <li><a href="#" className=" bg-teal-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li>
              {/* <li><a href="#" className=" bg-gradient-to-r from-cyan-500 to-yellow-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li> */}
            </ul>
          </nav>


          <div className=" text-center p-10">
            <h2 className=" text-5xl py-2 text-teal-500 font-medium">Nze Shalom</h2>
            <h3 className=" text-2xl py-2">Developer and designer</h3>
            <p className=" text-md py-5 leading-8 text-gray-500">Freelancer, providing services for programming and design needs.</p>
          </div>


          <div className=" text-5xl flex justify-center gap-14 py-3 text-gray-800">
           <AiOutlineGithub />
           <AiOutlineWhatsApp />
           <AiOutlineBehance />
          </div>

          <div className=" relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto">
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



        </section>



      </main>


    </div>
  )
}

export default App

import { Github, Twitter, Mail,Globe } from "lucide-react";

export default function ProfilePage(){

    const projects = [
        {
          id: 1,
          image: "/webseeer.jpg",
          title: "WebSeer",
          year: "2025",
          description: "You can Chat with any website by just entering it's url.",
          source:'',
          Website:'https://webseer.vercel.app'
        },
        {
          id: 2,
          image: "/openlangg.jpg",
          title: "OpenLang",
          year: "2025",
          description: "Find active repositories and Good-First-Issue's on github"
        },
        {
            id: 3,
            image: "/callio.jpg",
            title: "Call-Io",
            year: "2024",
            description: "Build Video Calling app with many features like screen sharing, recording and chating"
          }
      
      ];

    return (
        <>
        <div className="w-full  text-white  bg-black">
            <div className="sm:mx-60">
            <div className=" py-5 flex justify-between">
<h1 className="font-supply font-bold text-3xl">JAINAM</h1>
<div className="flex gap-4 py-1">
<a href="https://github.com/jainampatel22" target="_blank" rel="noopener noreferrer">
        <Github className="w-5 h-5 text-gray-400 hover:text-white" />
      </a>

      <a href="https://x.com/Jainam___patel" target="_blank" rel="noopener noreferrer">
        <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
      </a>

      {/* Email */}
      <a href="mailto:pateljainams122@gmail.com">
        <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
      </a>
</div>

</div>
<div className="pt-8">
<p className="font-roboto text-sm text-[#ffffffb3]">Hi, I'm <span className="text-[#ffffffe6]">Jainam Patel</span>.  I'm a full-stack developer and B.Tech CSE student with a passion for <span className="text-[#ffffffe6]">ML</span>, <span  className="text-[#ffffffe6]">MERN</span>,and <span  className="text-[#ffffffe6]">open source</span>. Turning ideas into code and contributing to the tech community.</p>
<p className="font-roboto text-sm text-[#ffffffb3] pt-6">You can find me on <span  className="text-[#ffffffe6] underline">
    <a href="https://github.com/jainampatel22">github</a>
    </span>, or DM me on <span  className="text-[#ffffffe6] underline">
    <a href="https://x.com/Jainam___patel">X</a>
    </span>.</p>
</div>
<div className="pt-24">
<div className="font-montreal text-3xl font-bold">Work</div>
<div className="pt-5 flex justify-between">
<div className="flex">
    <div>
        <img src="/earn.webp" alt="" className="w-12 h-12 rounded-full" />
    </div>
    <div>
    <div className="  ml-5 text-xl font-montrealMedium tracking-wide">
        Site Layers
    </div>
    <p className="ml-5 tracking-tight text-sm font-roboto font-extralight text-[#ffffffb3]">Worked on designing and developing the frontend. </p>
    </div>
    
</div>
<div className="mt-3  ml-5 text-md font-roboto tracking-tighter text-[#ffffffb3]">
    Freelance
</div>
</div>
<div className="pt-8 flex justify-between">
<div className="flex">
    <div>
        <img src="/earn.webp" alt="" className="w-12 h-12 rounded-full" />
    </div>
    <div>
    <div className=" ml-5 text-xl font-montrealMedium tracking-wide">
        PostPress
    </div>
    <p className="ml-5 tracking-tight text-sm font-roboto font-extralight text-[#ffffffb3]">Helped Them Revamping thier UI </p>
    </div>
    
</div>
<div className="mt-3  ml-5 text-md font-roboto tracking-tighter text-[#ffffffb3]">
    Freelance
</div>
</div>
</div>
<div className="pt-16">

<div className="font-montreal text-2xl font-bold">Education</div>
<div className="pt-5 flex justify-between">
<div className="flex">
    <div>
        <img src="/lj-lojo.webp" alt="" className="w-14 h-14 rounded-full" />
    </div>
    <div>
    <div className=" mt-1  ml-5 text-lg font-montrealMedium tracking-wide">
    LJ Institute of Engineering and Technology
    </div>
    <p className="ml-5 tracking-tight text-sm font-roboto font-extralight text-[#ffffffb3]">Bachelor of Technology - BTech, Computer Science and Engineering </p>
    </div>
    
</div>
<div className="mt-5  ml-5 text-sm font-roboto tracking-tighter text-[#ffffffb3]">
    2023-2027
</div>
</div>
</div>

<div className="project pt-10">
<div className="font-montreal text-2xl font-bold">Projects</div>
<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
  {projects.map((project) => (
    <div
      key={project.id}
      className="bg-black/50 hover:border hover:border-white p-6 rounded-2xl shadow-lg transition-transform hover:scale-105"
    >
      <img src={project.image} className="rounded-lg w-full" alt="Thumbnail" />
      <div className="flex justify-between items-center mt-5">
        <h1 className="font-montreal text-2xl tracking-wider">{project.title}</h1>
        <p className="text-md font-roboto tracking-tighter text-[#ffffffb3]">{project.year}</p>
      </div>
      <p className="mt-2 tracking-tight text-sm font-roboto font-extralight text-[#ffffffb3]">
        {project.description}
      </p>
      <div className="flex">
      <div className="flex mt-4 ml-10">
        <a href={project.Website} target="_blank">
        <button className="bg-white rounded flex gap-2 text-black p-2 "> <Globe className="w-6 h-6 "/><h1 className="font-montreal tracking-wider">Website</h1></button>

        </a>
      </div>
      <div className="flex mt-4 ml-7">
<button className="bg-white rounded flex gap-2 text-black p-2 "> <Github className="w-6 h-6 "/><h1 className="font-montreal tracking-wider">Source</h1></button>
      </div>
      </div>
     
    </div>
  ))}
</div>

</div>
<div className="pt-10">
<div className="font-montreal text-2xl font-bold">Skills</div>
<p className="font-roboto tracking-tight text-[#ffffffb3] text-sm">Here are some of the skills I have acquired over the years of my journey in the tech industry. I am always looking to learn more and improve my skillset.</p>
<div className="skilss mt-10">
<div className="languages flex gap-3">
<h1 className="font-montrealMedium text-lg tracking-wide">1. Languages</h1>
<button className="border  rounded-xl w-20 text-sm hover:bg-white hover:text-black border-white/50 p-1 font-semibold">Javascript</button>

<button className="border  rounded-xl w-20 text-sm hover:bg-white hover:text-black border-white/50 p-1 font-semibold">TypeScript</button>

<button className="border  rounded-xl w-20 text-sm hover:bg-white hover:text-black border-white/50 p-1 font-semibold">Python</button>

<button className="border  rounded-xl w-20 text-sm hover:bg-white hover:text-black border-white/50 p-1 font-semibold">SQL</button>

</div>
<div className="Frontend mt-7 flex gap-3">
<h1 className="font-montrealMedium text-lg tracking-wide">2. Frontend</h1>
<button className="border  rounded-xl w-20 text-sm hover:bg-white hover:text-black border-white/50 p-1 font-semibold">React</button>

<button className="border  rounded-xl w-20 text-sm hover:bg-white hover:text-black border-white/50 p-1 font-semibold">Next.js</button>

<button className="border rounded-xl w-28 hover:bg-white hover:text-black border-white/50 p-1 font-semibold">Tailwind CSS</button>

<button className="border  rounded-xl w-20 hover:bg-white hover:text-black text-sm border-white/50 p-1 font-semibold">Shadcn</button>

</div>
<div className="Backend mt-8 flex gap-3">
<h1 className="font-montrealMedium text-lg tracking-wide">3. Backend</h1>
<button className="border  rounded-xl w-20 hover:bg-white hover:text-black text-sm border-white/50 p-1 font-semibold">Express.js</button>

<button className="border  rounded-xl w-20 hover:bg-white hover:text-black text-sm border-white/50 p-1 font-semibold">FastAPI</button>

<button className="border rounded-xl w-20 hover:bg-white hover:text-black border-white/50 p-1 font-semibold">RestAPI</button>

<button className="border  rounded-xl w-20 hover:bg-white hover:text-black text-sm border-white/50 p-1 font-semibold">AI SDK</button>

</div>
<div className="Database mt-8 flex gap-3">
<h1 className="font-montrealMedium text-lg tracking-wide">4. Databases</h1>
<button className="border  rounded-xl w-20 hover:bg-white hover:text-black text-sm border-white/50 p-1 font-semibold">MongoDB</button>

<button className="border  rounded-xl w-28 hover:bg-white hover:text-black text-sm border-white/50 p-1 font-semibold">PostgreSQL</button>

<button className="border rounded-xl w-20 hover:bg-white hover:text-black border-white/50 p-1 font-semibold">Redis</button>

<button className="border  rounded-xl w-20 hover:bg-white hover:text-black text-sm border-white/50 p-1 font-semibold">Pinecone</button>

</div>
<div className="Other mt-8 flex gap-3">
<h1 className="font-montrealMedium text-lg tracking-wide">5. Others</h1>
<button className="border  rounded-xl w-20 hover:bg-white hover:text-black text-sm border-white/50 p-1 font-semibold">Git</button>

<button className="border  rounded-xl w-20 hover:bg-white hover:text-black text-sm border-white/50 p-1 font-semibold">REST</button>

<button className="border  rounded-xl w-20 hover:bg-white hover:text-black border-white/50 p-1 font-semibold">gRPC</button>

<button className="border  rounded-xl w-20 hover:bg-white hover:text-black text-sm border-white/50 p-1 font-semibold">Prisma</button>

</div>
</div>
</div>


            </div>
            <div className="footer mx-20 border-t border-white/50 mt-10">
            <div className="flex justify-center gap-6 mt-10  ">
<a target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#EEEEEE] transition-all duration-200 " href="https://github.com/jainampatel22"><svg viewBox="0 0 438.549 438.549" className="h-4 w-4"><path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path></svg> GitHub</a>

<a target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#EEEEEE] transition-all duration-200" href="https://in.linkedin.com/in/pateljainam/"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><title>LinkedIn</title><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg> LinkedIn</a>
<a target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#EEEEEE] transition-all duration-200" href="https://x.com/Jainam___patel"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><title>X</title><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg> Twitter</a>

<a target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#EEEEEE] transition-all duration-200" href="mailto:vaswani.tanay9@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail h-4 w-4"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> Email</a>
            </div>
<p className="text-sm text-[#B4B4B4] text-center mt-5">© 2025 Jainam Patel. All rights reserved.</p>
</div>
        </div>
        </>
    )
}
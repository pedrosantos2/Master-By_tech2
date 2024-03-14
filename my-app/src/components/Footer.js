import insta from '../images/icons8-instagram.svg'
import face from '../images/icons8-facebook-novo.svg'

export default function Footer() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-20">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#000000] to-[#1105f3] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#000000] to-[#0d00ff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl telefone">
        <div className=" flex justify-center mx-auto max-w lg:mx-0 text-center ">
          <h2 className=" font-bold tracking-tight text-white sm:text-3xl mr-8 ">Site Desenvolvido por Master By Tech</h2>
           <a href="https://www.facebook.com/people/Vinicius-Froes/pfbid093Jmpi6zQsa2C5JEEUoqQNqfEUJMXCQzwaihw7yb32ZsW9rwHvqjyJCperDEZfCtl/"><img src={face} className='mr-2 lg:w-9 md:w-8 w-7'/></a>
           <a href="https://www.instagram.com/masterbytech/"><img src={insta} className=' lg:w-9 md:w-8  w-7'/></a>
        </div>
      </div>
    </div>
  )
}


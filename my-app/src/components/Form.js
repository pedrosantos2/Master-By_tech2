import { useState } from "react"
import emailjs from '@emailjs/browser'



export default function Form() {
  const [name,setName] = useState('')
  const [lastName,setLastName] = useState('')
  const [company,setCompany] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  
  function sendEmail(e){
    e.preventDefault()

    if(name === '' || lastName === '' || company === '' || email === '' || message === ''){
      alert("Preencha todos os campos")
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      company: company
    }

    emailjs.send("service_cnn59sr","template_84hj47p", templateParams, "1oViNyyUgCdPGdwSe").then((response) =>{
      console.log("email enviado",response.status,response.text)
      setCompany('')
      setEmail('')
      setLastName('')
      setMessage('')
      setName('')
    },(err) => {
      console.log("Erro: ", err)
    } )
  }

  return (
    <div className="isolate bg-black px-6 py-24 sm:py-32 lg:px-8" id='contato'>
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="py-8 rounded-lg bg-gradient-to-l from-cyan-300 to-blue-500 ">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contato</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Entre em contato conosco para saber mais sobre nossos serviços.
          </p>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            contato@masterbytech.com
          </p>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            +55 47 9 9641 5648
          </p>
        </div>
        <form className="mx-auto  max-w-xl sm:mt-8 telefone" id="contactForm" onSubmit={sendEmail} >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 center px-8">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                Nome:
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="first-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Sobrenome:
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="family-name"
                  className="  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                Empresa:
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  autoComplete="organization"
                  className="  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email:
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="  block w-full  rounded-md border-0 px-3.5 py-2 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Mensagem:
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  />
              </div>
            </div>
          </div>
          <div className="mt-10 px-8">
            <button
              type="submit"
              className="  block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold hover:scale-110 duration-200 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
              Vamos Conversar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

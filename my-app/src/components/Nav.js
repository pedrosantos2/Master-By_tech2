import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../images/logo.png'
import {Link} from 'react-scroll';


export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <div className="bg-white">
      <header className="bg-gray-200 inset-x-0 top-0 z-50 fixed" >
        <nav className="flex items-center justify-between p-4 lg:px-8 shadow-md" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img src={logo} alt="" srcset="" className="w-100 h-10 ml-4 " />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link to='home'  className="text-sm font-semibold leading-6 cursor-pointer text-gray-900" >Home</Link>
            <Link to='featured' className="text-sm font-semibold leading-6 cursor-pointer text-gray-900">Nossos Serviços</Link>
            <Link to='depoimentos' className="text-sm font-semibold leading-6 cursor-pointer text-gray-900">Depoimentos</Link>
            <Link to='contato' className="text-sm font-semibold leading-6 cursor-pointer text-gray-900">Contato</Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src={logo}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 "
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link to='/' className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 cursor-pointer text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                  <Link to='featured' className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 cursor-pointer text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)} >Nossos Serviços</Link>
                  <Link to='depoimentos' className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 cursor-pointer text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Depoimentos</Link>
                  <Link to='contato' className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 cursor-pointer text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Contato</Link>
                  </div>
                </div>
              </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}
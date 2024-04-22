import {WindowIcon, DevicePhoneMobileIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import wordpress from '../images/wordpress.png'

const features = [
  {
    name: 'Web Design.',
    description:
      'Criamos sites impactantes que captam a essência da sua marca, transmitindo uma mensagem clara e atraente para seus clientes.',
    icon: WindowIcon,
  },
  {
    name: 'Desenvolvimento de Aplicativos.',
    description: 'Desenvolvemos aplicativos intuitivos e funcionais que melhoram a experiência do usuário, tornando a interação com sua marca mais fácil e agradável..',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Suporte.',
    description: 'Nosso foco está em proporcionar a melhor experiência possível para os usuários dos seus produtos e serviços, garantindo sua satisfação e fidelidade..',
    icon: UserGroupIcon,
  },
]

export default function Featured() {

  return (
    <div className="overflow-hidden bg-gradient-to-r from-cyan-300 to-blue-500 py-24 sm:py-32  " id='featured'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Nossos Servers
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">Criando experiências digitais memoráveis</p>
              <p className="mt-6 text-lg leading-8">
                Encante seus clientes com designs web que não só impressionam, mas também funcionam. Desenvolvemos soluções digitais que transformam sua visão em realidade, conquistando corações e negócios.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7  lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-bold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={wordpress}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 "
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
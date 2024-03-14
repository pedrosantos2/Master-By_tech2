import foto from '../images/pexels-christina-morillo-1181391.jpg'

export default function Tesmonials() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8" id="depoimentos">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Estamos extremamente satisfeitos com os serviços da Master By Tech na criação do nosso novo site. Desde o início, a equipe demonstrou uma compreensão profunda de nossas necessidades e metas. Eles entregaram um site moderno, responsivo e altamente funcional, que não só reflete a identidade da nossa marca, mas também impulsionou significativamente a nossa presença online. A atenção aos detalhes e o profissionalismo da Master By Tech foram essenciais para o sucesso deste projeto.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Ana Silva</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO da TechInnovate Solutions</div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl mt-16">
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “A parceria com a Master By Tech foi crucial para o crescimento online da EcoGreen Solutions. A equipe dedicada e especializada trabalhou de perto conosco para desenvolver um site que não apenas atraiu nossa base de clientes existente, mas também expandiu nossa presença digital. A abordagem inovadora da Master by Tech e o compromisso com a qualidade são evidentes em cada elemento do nosso novo site. Recomendo vivamente seus serviços para qualquer empresa que busque uma presença online impactante.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src={foto}
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">João Oliveira</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">Gestor da EcoGreen Solutions</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

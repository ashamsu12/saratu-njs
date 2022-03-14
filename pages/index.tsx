import { Disclosure } from "@headlessui/react";
import {
  AtSymbolIcon,
  ChevronUpIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";
import Head from "next/head";
import Image from "next/image";
import { IPortfolio } from "../lib/interfaces";
import { getPortfolioContent } from "../lib/queries";

const articles = [
  {
    name: "Barka da sallah: Felicitation, food or money?",
    link: "https://www.gulftoday.ae/news/2019/06/04/barka-da-sallah-felicitation-food-or-money",
    image:
      "https://www.gulftoday.ae/-/media/gulf-today/images/articles/news/2019/6/5/fireworks-sharjah.ashx?h=450&la=en&w=750&hash=11F7A347EC15124A53A1E47D63F5A7B2",
    org: "Gulf today",
  },
  {
    name: "For independent working females in UAE, staying away from family comes with its baggage of challenges",
    link: "https://www.gulftoday.ae/news/2019/11/05/for-many-youth-freedom-can-be-a-tricky-turf",
    image:
      "https://www.gulftoday.ae/-/media/gulf-today/images/articles/news/2019/11/6/burjkhalifa.ashx?h=450&la=en&w=750&hash=054CC1C4097769CF747C67428CDEF00F",
    org: "Gulf today",
  },
  {
    name: "Genotype incompatibility: Staying versus walking away",
    link: "https://www.gulftoday.ae/lifestyle/2020/09/23/genotype-compatibility-staying-versus-walking-away",
    image:
      "https://www.gulftoday.ae/-/media/gulf-today/images/articles/lifestyle/2020/9/23/couple.ashx?h=450&la=en&w=700&hash=6F0EF63000B8769986461667DEAF92B8",
    org: "Gulf today",
  },
  {
    name: "Writers exult over OED’s honour to Nigerian English",
    link: "https://www.gulftoday.ae/news/2020/02/03/writers-exult-over-oed-honour-to-nigerian-english",
    image:
      "https://www.gulftoday.ae/-/media/gulf-today/images/articles/culture/2019/6/10/40-books.ashx?h=400&la=en&w=750&hash=DA3FD2A8BD95F8D39EAE6DE800687B6D",
    org: "Gulf today",
  },
  {
    name: "Women homemakers can also be called empowered",
    link: "https://www.gulftoday.ae/news/2020/03/07/women-homemakers-can-also-be-called-empowered",
    image:
      "https://www.gulftoday.ae/-/media/test-pics/woman.ashx?h=450&la=en&w=700&hash=C807E508ABAC6E784263B7D4FCD3EB61",
    org: "Gulf today",
  },
];

const research = [
  {
    name: "The Language of African Literature: An Analysis on the Use of English Language in Nigerian Literary Works",
    link: "https://www.academia.edu/39628672/The_Language_of_African_Literature_An_Analysis_on_the_Use_of_English_Language_in_Nigerian_Literary_Works",
    image:
      "https://a.academia-assets.com/assets/academia-logo-redesign-2015-45ae31566d1421084023fae986d81b06469982455d4be698a5226a904e7836a9.svg",
    org: "Academia.org",
  },
];

const fiction = [
  {
    name: "Becoming",
    link: "",
    image: "/becoming.jpeg",
    org: "Saratu Ummul-Iman Abubakar",
  },
];
export default function Home({items}:{items:IPortfolio[]}) {
  return (
    <div className="relative min-h-screen">
      <Head>
        <title>Saratu's portfolio website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="lg:relative bg-gray-50 h-screen">
          <div className="mx-auto max-w-7xl w-full pt-16  text-center lg:pt-48 lg:text-left">
            <div className="px-4 pb-8 lg-pb-0 lg:w-1/2 sm:px-8 xl:pr-16 lg:float-right">
              <span className="text-xl font-light">Hello!</span>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-xl md:text-3xl">
                <span className="block xl:inline">I'm Saratu!</span>{" "}
              </h1>
              <p className="mt-3 max-w-md mx-auto text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl prose-sm">
                I started my storytelling journey while looking for an avenue to
                express my emotions, a lot of times I get caught up in this
                humane situation my words get clogged in my throat. Therefore, I
                took to writing. It was therapeutic and gave me room to say
                everything I couldn’t voice out.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-full shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full md:py-4 md:text-lg md:px-10"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 lg:h-full">
              <Image
                className="absolute inset-0 w-full h-full object-cover"
                src="/herosection.jpg"
                alt=""
                layout={"fill"}
              />
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="gap-8 md:grid-cols-6 flex justify-center items-center">
              <div className="flex justify-center">
                <img className="h-12" src="/gulf_today.svg" alt="Tuple" />
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-screen lg:relative bg-gray-50 ">
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 lg:grid lg:grid-cols-2 text-center lg:pt-32 lg:text-left">
            <div className="px-4 sm:px-8 xl:pr-16">
              {/* <span className="text-xl font-light">Hello!</span> */}
              <div>
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-xl md:text-3xl">
                  <span className="font-bold xl:inline whitespace-pre-wrap">
                    More about me and what I have done
                  </span>
                </h1>

                <div className="h-1 hidden lg:block bg-purple-500 rounded w-20 mt-4"></div>
              </div>

              <p className=" max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl prose-sm">
                I have leveraged that love for storytelling to graduate with a
                mass communication degree and gain employment with a reputable
                Newspaper.
              </p>
              <p className=" max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl prose-sm">
                My favourite thing about storytelling is the platform to
                integrate my other passions. Over the years, my interest in
                psychology has grown and I have used storytelling to create
                awareness about that passion.
              </p>
              <p className=" max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl prose-sm">
                There are stories everywhere and I believe every story deserves
                to be heard. My current medium of storytelling is writing, I
                might be behind the camera tomorrow and maybe in front next
                month. What the story brings determines the medium.
              </p>
            </div>
            <div className="relative bg-gray-50 w-full min-h-[16rem] sm:min-h-[18rem] md:min-h-[24rem] lg:right-0 lg:h-full">
              <h2 className="text-2xl px-4 tracking-tight text-gray-300 mt-8 md:mt-0 sm:text-xl md:text-2xl">
                <span className="font-semibold xl:inline whitespace-pre-wrap">
                  Things I have done
                </span>
              </h2>
              <div className="w-full px-4 pt-8">
                <div className="w-full p-2 mx-auto rounded-2xl">
                  {["feature", "fiction", "research", "podcast"].map((cat) => (
                    <Disclosure as="div" className="mt-2 first:mt-0" key={cat}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className="capitalize">{cat}</span>
                            <ChevronUpIcon
                              className={`${
                                open ? "transform rotate-180" : ""
                              } w-5 h-5 text-purple-500`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            {cat === "feature" ? (
                              <>
                              <div role="list" className="flex flex-col w-full">
                                {items.filter(it=>it.type.toLowerCase()===cat).map((article) => (
                                  <div
                                    key={article.name}
                                    className="relative odd:float-right m-1 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                  >
                                    <div className="flex-shrink-0">
                                      <img
                                        className="h-10 w-10 rounded-full"
                                        src={article.image_url}
                                        alt=""
                                      />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <a
                                        href={article.link}
                                        target={"_blank"}
                                        className="focus:outline-none"
                                      >
                                        <span
                                          className="absolute inset-0"
                                          aria-hidden="true"
                                        />
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                          {article.name}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate">
                                          {article.description}
                                        </p>
                                      </a>
                                    </div>
                                  </div>
                                ))}
                                </div>
                                {items.filter(it=>it.type.toLowerCase()===cat).length===0&&(<div className="py-10">
                                <p className="text-center text-gray-400">
                                  There's nothing here yet, check back in a few
                                  weeks.
                                </p>
                              </div>)}
                              </>
                            ) : null}
                            {cat === "fiction" ? (
                              <>
                              <div className="flex flex-col w-full">
                                {items.filter(it=>it.type.toLowerCase()===cat).map((article) => (
                                  <div
                                    key={article.name}
                                    className="relative odd:float-right m-1 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                  >
                                    <div className="flex-shrink-0">
                                      <img
                                        className="h-10 w-10 rounded-full"
                                        src={article.image_url}
                                        alt=""
                                      />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <a
                                        href={article.link}
                                        target={"_blank"}
                                        className="focus:outline-none"
                                      >
                                        <span
                                          className="absolute inset-0"
                                          aria-hidden="true"
                                        />
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                          {article.name}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate">
                                          {article.description}
                                        </p>
                                      </a>
                                    </div>
                                  </div>
                                ))}
                                </div>
                                {items.filter(it=>it.type.toLowerCase()===cat).length===0&&(<div className="py-10">
                                <p className="text-center text-gray-400">
                                  There's nothing here yet, check back in a few
                                  weeks.
                                </p>
                              </div>)}
                              </>
                            ) : null}
                            {cat === "research" ? (
                              <>
                              <div className="flex flex-col w-full">
                                {items.filter(it=>it.type.toLowerCase()===cat).map((article) => (
                                  <div
                                    key={article.name}
                                    className="relative odd:float-right m-1 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                  >
                                    <div className="flex-shrink-0">
                                      <img
                                        className="h-10 w-10 rounded-full"
                                        src={article.image_url}
                                        alt=""
                                      />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <a
                                        href={article.link}
                                        target={"_blank"}
                                        className="focus:outline-none"
                                      >
                                        <span
                                          className="absolute inset-0"
                                          aria-hidden="true"
                                        />
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                          {article.name}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate">
                                          {article.description}
                                        </p>
                                      </a>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              {items.filter(it=>it.type.toLowerCase()===cat).length===0&&(<div className="py-10">
                              <p className="text-center text-gray-400">
                                There's nothing here yet, check back in a few
                                weeks.
                              </p>
                            </div>)}</>
                            ) : null}
                            {cat === "podcast" ? (
                              <>
                                <div className="flex flex-col w-full">
                                {items.filter(it=>it.type.toLowerCase()===cat).map((article) => (
                                  <div
                                    key={article.name}
                                    className="relative odd:float-right m-1 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                  >
                                    <div className="flex-shrink-0">
                                      <img
                                        className="h-10 w-10 rounded-full"
                                        src={article.image_url}
                                        alt=""
                                      />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <a
                                        href={article.link}
                                        target={"_blank"}
                                        className="focus:outline-none"
                                      >
                                        <span
                                          className="absolute inset-0"
                                          aria-hidden="true"
                                        />
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                          {article.name}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate">
                                          {article.description}
                                        </p>
                                      </a>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              {items.filter(it=>it.type.toLowerCase()===cat).length===0&&(<div className="py-10">
                                <p className="text-center text-gray-400">
                                  There's nothing here yet, check back in a few
                                  weeks.
                                </p>
                              </div>)}
                              </>
                            ) : null}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={"_blank"}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2020. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const navigation = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/m/in/saratu-abubakar-ba9247117",
    icon: (props) => (
      <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:sarauabu@gmail.com",
    icon: (props) => <AtSymbolIcon {...props} />,
  },
];

export async function getStaticProps() {
  const _items = await getPortfolioContent()
  const items = _items.map(item => ({ id: item.id,type:item.type, name: item.name, description: item.description,link:item.link,image_url:item.image_url}))
  console.log(items)
  return {
    props: {
      items,
    },
    revalidate: 10
  }
}
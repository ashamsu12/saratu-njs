import { gql, useApolloClient, useMutation, useQuery } from "@apollo/client"
import { LogoutIcon } from "@heroicons/react/outline"
import { useRouter } from "next/router"
import { useState } from "react"
import CreateItem from "../../components/create-item"
import { IPortfolio } from "../../lib/interfaces"

/* This example requires Tailwind CSS v2.0+ */
const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const router = useRouter()
  const client = useApolloClient()

  const [signOut] = useMutation(gql`
  mutation SignOutMutation {
    signOut
  }`)
  const { data, loading, error,refetch } = useQuery<{items:IPortfolio[]}>(gql`
    query ItemsQuery {
      items {
        name
        description
        type
        link
        image_url
      }
    }
  `)

  async function signout() {
    router.push('/signout')
}
  return (
    <div className="px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="py-10">
        <button onClick={signout} className="inline-flex text-xl items-center font-medium text-gray-800">
          <LogoutIcon className=" w-5 h-5 transform rotate-180" />  Logout
        </button>
      </div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Portlio</h1>
          <p className="mt-2 text-sm text-gray-700">
            Update and manage your portfolio and podcasts.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            onClick={()=>setOpen(true)}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add Item
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                  >
                    Title
                  </th>
                  <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                    Summary
                  </th>
                  <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                    Type
                  </th>
                  <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                    Link
                  </th>
                  <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                    Image Url
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data && data.items.map((item) => (
                  <tr key={item.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                      {item.name}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item.description}</td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item.type}</td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item.link}</td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item.image_url}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {item.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <CreateItem open={open} close={() => setOpen(false)} refresh={refetch}/>
    </div>
  )
}

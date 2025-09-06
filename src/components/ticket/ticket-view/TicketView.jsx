import Container from '@/components/shared/container/Container'
import PrimaryTitle from '@/components/shared/title/PrimaryTitle'
import useAuthAxios from '@/hooks/useAuthAxios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import { IoAddSharp } from 'react-icons/io5'

export default function TicketView({setStep}) {
    const [allTickets, setAllTickets] = useState([])
    const axios = useAuthAxios()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/tickets')
                setAllTickets(res?.data)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])
    return (
        <Container className="bg-white p-8 w-full flex justify-center items-center">
            <div className='w-full max-w-4xl'>
                <div className='flex justify-between items-center w-full mb-4'>
                    <PrimaryTitle title={"Ticket View"} className={"text-center"} />
                    <IoIosAddCircle className='text-red-600 block rounded-full text-4xl cursor-pointer' onClick={() => setStep("create-ticket")} />
                </div>
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-tertiary ">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider"
                                >
                                    #
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider"
                                >
                                    Ticket Id
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider"
                                >
                                    Status
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider"
                                >
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {allTickets?.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {item.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {item.ticket_id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {item.status}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium w-fit">
                                        <Link
                                            href={`/live-chat?ticketId=${item.id}`}
                                            className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
                                        >
                                            Reply
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Container>
    )
}

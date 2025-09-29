import { IMAGE_BASE_URL } from '@/config'
import Image from 'next/image'
import Link from 'next/link'

export default function SearchCard({ data }) {
    return (
        <Link href={`/single-item?&type=${data.type}&id=${data.id}`}>
            <div className="p-4 border-b border-gray-200 hover:bg-gray-100 flex items-center gap-4 cursor-pointer">
                <Image
                    src={IMAGE_BASE_URL + data.image}
                    alt={data.name}
                    width={50}
                    height={50}
                    className="rounded-md aspect-square w-12"
                />
                <div className=''>
                    <p className="text-sm font-medium text-primary text-nowrap">{data.title}</p>
                    <p className="text-sm text-secondary">{data.price}</p>
                </div>
            </div>
        </Link>
    )
}

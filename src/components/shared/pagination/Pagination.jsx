import React from 'react'

export default function Pagination({ totalPages, currentPage, setCurrentPage }) {
    return (
        <div className="flex items-center justify-center gap-2 flex-wrap py-5">
            <button className="px-4 py-2 text-sm">Prev</button>
            <div className='grid gap-4'
                style={{
                    gridTemplateColumns: `repeat(${totalPages}, 1fr)`,
                }}
            >
                {
                    [...Array(totalPages).keys()].map((page, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(page + 1)}
                            className={`${currentPage === page + 1 ? 'bg-black text-white' : 'bg-gray-200 hover:bg-black hover:text-white'} px-4 py-2 text-sm rounded-full aspect-square`}
                        >
                            {page + 1}
                        </button>
                    ))
                }
            </div>

            <button className="px-4 py-2 text-sm">Next</button>
        </div>
    )
}

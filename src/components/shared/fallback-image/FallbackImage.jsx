// 'use client'
// import Image from 'next/image'
// import { useState } from 'react'

// export default function FallbackImage({ src, alt, ...props }) {
//     let imagePath;
//     if (src?.startsWith("http")) {
//         imagePath = src;
//     }
//     else if (src?.startsWith("/")) {
//         imagePath = IMAGE_BASE_URL + src.slice(1);
//     } else {
//         imagePath = IMAGE_BASE_URL + src;
//     }
//     const [imgSrc, setImgSrc] = useState(imagePath)

//     console.log(imagePath, "imagePath")
//     return (
//         <Image
//             {...props}
//             src={imgSrc}
//             alt={alt}
//             onError={() => setImgSrc('/images/default-banner.jpg')}
//         />
//     )
// }


'use client'
import Image from 'next/image'
import { useState } from 'react'
import { IMAGE_BASE_URL } from '@/config'

export default function FallbackImage({ src, alt, ...props }) {
  let imagePath
  if (src?.startsWith('http')) {
    imagePath = src
  } else if (src?.startsWith('/')) {
    imagePath = IMAGE_BASE_URL + src.slice(1)
  } else {
    imagePath = IMAGE_BASE_URL + src
  }

  const fallback = '/images/default-banner.jpg'
  const [imgSrc, setImgSrc] = useState(imagePath)

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (imgSrc !== fallback) {
          setImgSrc(fallback)
        }
      }}
    />
  )
}

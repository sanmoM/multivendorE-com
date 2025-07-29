import { FaCheck, FaShoppingCart, FaStar, FaTags } from "react-icons/fa";
import { FaArrowRotateLeft, FaCircleUser, FaCodeCompare, FaHeart, FaTableColumns, FaTruck } from "react-icons/fa6";

export const categories = [
    {
        image: '/images/product/product-1.svg',
        title: 'Cakes',
    },
    {
        image: '/images/product/product-2.svg',
        title: 'Food',
    },
    {
        image: '/images/product/product-3.svg',
        title: 'Baby & Mom Care',
    },
    {
        image: '/images/product/product-1.svg',
        title: 'Cakes',
    },
    {
        image: '/images/product/product-2.svg',
        title: 'Food',
    },
    {
        image: '/images/product/product-3.svg',
        title: 'Baby & Mom Care',
    },
]

export const navItems = [
    {
        path: '/',
        text: 'Home',
    },
    {
        path: '/shop',
        text: 'Shop',
    },
    {
        path: '/blog',
        text: 'Blog',
    },
    {
        path: '/contactPage',
        text: 'Contacts',
    },
    {
        path: '/aboutPage',
        text: 'About Us',
    },
    {
        path: '/auctionPage',
        text: 'Auction',
    },
]

export const navItems2 = [
    {
        path: '/',
        text: 'TRACK YOUR ORDER',
        icon: FaTruck,
    },
    {
        path: '/',
        text: 'COMPARE (0)',
        icon: FaCodeCompare,
    },
    {
        path: '/',
        text: 'WISHLIST (0)',
        icon: FaHeart,
    },
    {
        path: '/cart',
        text: 'CART (0)',
        icon: FaShoppingCart,
    },

]


export const cartItems = [
    {
        id: 1,
        image: "https://amazcart.ischooll.com/public/uploads/images/16-01-2023/63c4ebab0fcf9.jpeg",
        name: 'Minimalistic Living Room...',
        price: 105,
        quantity: 1,
    },
    {
        id: 2,
        image: "https://amazcart.ischooll.com/public/uploads/images/16-01-2023/63c4ebab0fcf9.jpeg",
        name: 'Minimalistic Living Room...',
        price: 105,
        quantity: 1,
    },
    {
        id: 3,
        image: "https://amazcart.ischooll.com/public/uploads/images/16-01-2023/63c4ebab0fcf9.jpeg",
        name: 'Minimalistic Living Room...',
        price: 105,
        quantity: 1,
    },
    {
        id: 4,
        image: "https://amazcart.ischooll.com/public/uploads/images/16-01-2023/63c4ebab0fcf9.jpeg",
        name: 'Minimalistic Living Room...',
        price: 105,
        quantity: 1,
    },
    {
        id: 5,
        image: "https://amazcart.ischooll.com/public/uploads/images/16-01-2023/63c4ebab0fcf9.jpeg",
        name: 'Minimalistic Living Room...',
        price: 105,
        quantity: 1,
    },
    {
        id: 6,
        image: "https://amazcart.ischooll.com/public/uploads/images/16-01-2023/63c4ebab0fcf9.jpeg",
        name: 'Minimalistic Living Room...',
        price: 105.00,
        quantity: 1,
    },
]

export const orders = [
    {
        id: 1,
        image: "https://amazcart.ischooll.com/public/uploads/images/16-01-2023/63c4ebab0fcf9.jpeg",
        name: 'Minimalistic Living Room...',
        price: 105,
        quantity: 1,
    },
    {
        id: 2,
        image: "https://amazcart.ischooll.com/public/uploads/images/16-01-2023/63c4ebab0fcf9.jpeg",
        name: 'Minimalistic Living Room...',
        price: 105,
        quantity: 1,
    },
    {
        id: 3,
        image: "https://amazcart.ischooll.com/public/uploads/images/16-01-2023/63c4ebab0fcf9.jpeg",
        name: 'Minimalistic Living Room...',
        price: 105,
        quantity: 1,
    },
    {
        id: 4,
        image: "https://amazcart.ischooll.com/public/uploads/images/16-01-2023/63c4ebab0fcf9.jpeg",
        name: 'Minimalistic Living Room...',
        price: 105,
        quantity: 1,
    },
    {
        id: 5,
        image: "https://amazcart.ischooll.com/public/uploads/images/16-01-2023/63c4ebab0fcf9.jpeg",
        name: 'Minimalistic Living Room...',
        price: 105,
        quantity: 1,
    },
    {
        id: 6,
        image: "https://amazcart.ischooll.com/public/uploads/images/16-01-2023/63c4ebab0fcf9.jpeg",
        name: 'Minimalistic Living Room...',
        price: 105.00,
        quantity: 1,
    },
]

export const products = [
    {
        id: 1,
        image: '/images/product/product-1.svg',
        name: 'Decadent Chocolate Cake',
        price: 30,
        discount: 20,
        link: "/single-item"
    },
    {
        id: 2,
        image: '/images/product/product-2.svg',
        name: 'Delicious Pizza',
        price: 30,
        discount: 20,
        link: "/single-item"
    },
    {
        id: 3,
        image: '/images/product/product-3.svg',
        name: 'Freshly Baked Bread',
        price: 30,
        discount: 20,
        link: "/single-item"
    },
    {
        id: 1,
        image: '/images/product/product-1.svg',
        name: 'Decadent Chocolate Cake',
        price: 30,
        discount: 20,
        link: "/single-item"
    },
    {
        id: 2,
        image: '/images/product/product-2.svg',
        name: 'Delicious Pizza',
        price: 30,
        discount: 20,
        link: "/single-item"
    },
    {
        id: 3,
        image: '/images/product/product-3.svg',
        name: 'Freshly Baked Bread',
        price: 30,
        discount: 20,
        link: "/single-item"
    },
]

export const statistics = [
    {
        title: 'Total Order',
        value: 347,
        icon: FaStar,
    },
    {
        title: 'My Wishlist',
        value: 14,
        icon: FaHeart,
    },
    {
        title: 'Refund Success',
        value: 7,
        icon: FaArrowRotateLeft,
    },
    {
        title: 'Completed Order',
        value: 5,
        icon: FaCheck,
    },
    {
        title: 'Coupon Used',
        value: 3,
        icon: FaTags,
    },
    {
        title: 'Product in Cart',
        value: 3,
        icon: FaShoppingCart,
    },
]

export const purchaseHistory = [
    {
        id: 1,
        orderId: '20250616001110',
        packageId: '20250616001110',
        date: '22 June 2025',
        amount: '$40.22',
        status: 'Processing',
        paymentStatus: 'Unpaid',
    },
    {
        id: 2,
        orderId: '20250616001110',
        packageId: '20250616001110',
        date: '22 June 2025',
        amount: '$40.22',
        status: 'Completed',
        paymentStatus: 'Paid',
    },
    {
        id: 3,
        orderId: '20250616001110',
        packageId: '20250616001110',
        date: '22 June 2025',
        amount: '$40.22',
        status: 'Cancelled',
        paymentStatus: 'Unpaid',
    },
    {
        id: 4,
        orderId: '20250616001110',
        packageId: '20250616001110',
        date: '22 June 2025',
        amount: '$40.22',
        status: 'Pending',
        paymentStatus: 'Unpaid',
    },
    {
        id: 5,
        orderId: '20250616001110',
        packageId: '20250616001110',
        date: '22 June 2025',
        amount: '$40.22',
        status: 'Cancelled',
        paymentStatus: 'Unpaid',
    },
    {
        id: 6,
        orderId: '20250616001110',
        packageId: '20250616001110',
        date: '22 June 2025',
        amount: '$40.22',
        status: 'Processing',
        paymentStatus: 'Unpaid',
    }
]

export const wishlist = [
    {
        id: 1,
        image: 'https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399b91de39f1.webp',
        name: 'Living Room',
        price: 30,
    },
    {
        id: 2,
        image: 'https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399b91de39f1.webp',
        name: 'Living Room',
        price: 30,
    },
    {
        id: 3,
        image: 'https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399bc9d00979.webp',
        name: 'Living Room',
        price: 30,
    },
    {
        id: 4,
        image: 'https://amazcart.ischooll.com/public/uploads/images/15-12-2022/639aaa2bce23a.webp',
        name: 'Living Room',
        price: 30,
    },
    {
        id: 5,
        image: 'https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399c876defe6.webp',
        name: 'Living Room',
        price: 30,
    },
    {
        id: 6,
        image: 'https://amazcart.ischooll.com/public/uploads/images/14-12-2022/6399b882ce24f.webp',
        name: 'Living Room',
        price: 30,
    },
]

export const accountSideBarItems = [
    {
        path: '/dashboard',
        label: 'Dashboard',
        icon: FaTableColumns,
    },
    {
        path: '/purchase-history',
        label: 'Purchase History',
        icon: FaTableColumns,
    },
    {
        path: '/my-wishlist',
        label: 'My Wishlist',
        icon: FaHeart,
    },
    {
        path: '/my-order',
        label: 'My Order',
        icon: FaStar,
    },
    {
        path: '/user-profile',
        label: 'My Account',
        icon: FaCircleUser,
    },
]

export const shops = [
    {
        id: 1,
        image: '/images/product/product-1.svg',
        name: 'Sweet Delights Bakery',
        subtitle: '4.8 • 1.2 mi',
    },
    {
        id: 2,
        image: '/images/product/product-2.svg',
        name: 'Mom & Baby Essentials',
        subtitle: '4.6 • 2.5 mi',
    },
    {
        id: 3,
        image: '/images/product/product-3.svg',
        name: 'Tech Gadget Store',
        subtitle: '4.7 • 3.1 mi',
    },
    {
        id: 1,
        image: '/images/product/product-1.svg',
        name: 'Sweet Delights Bakery',
        subtitle: '4.8 • 1.2 mi',
    },
    {
        id: 2,
        image: '/images/product/product-2.svg',
        name: 'Mom & Baby Essentials',
        subtitle: '4.6 • 2.5 mi',
    },
    {
        id: 3,
        image: '/images/product/product-3.svg',
        name: 'Tech Gadget Store',
        subtitle: '4.7 • 3.1 mi',
    },
]
export const resellers = [
    {
        id: 1,
        image: '/images/product/product-1.svg',
        name: 'Sweet Delights Bakery',
        subtitle: 'Food',
    },
    {
        id: 2,
        image: '/images/product/product-2.svg',
        name: 'Mom & Baby Essentials',
        subtitle: 'cake',
    },
    {
        id: 3,
        image: '/images/product/product-3.svg',
        name: 'Tech Gadget Store',
        subtitle: 'cake',
    },
    {
        id: 1,
        image: '/images/product/product-1.svg',
        name: 'Sweet Delights Bakery',
        subtitle: 'cake',
    },
    {
        id: 2,
        image: '/images/product/product-2.svg',
        name: 'Mom & Baby Essentials',
        subtitle: 'cake',
    },
    {
        id: 3,
        image: '/images/product/product-3.svg',
        name: 'Tech Gadget Store',
        subtitle: 'cake',
    },
]
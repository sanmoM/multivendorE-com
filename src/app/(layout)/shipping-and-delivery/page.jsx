// components/OrderTrackingSection.jsx
import MobileHeader from '@/components/root-layout/header/components/mobile-header/MobileHeader';
import Button from '@/components/shared/button/Button';
import Container from '@/components/shared/container/Container';
import SectionTitle from '@/components/shared/section-title/SectionTitle';
import PrimaryTitle from '@/components/shared/title/PrimaryTitle';
import SecondaryTitle from '@/components/shared/title/SecondaryTitle';
import Image from 'next/image';

const products = [
  {
    id: 'BJ8364850',
    quantity: 1,
    price: 1499,
    title: 'PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, macOS Sonoma, Blue, Keyboard layout INT',
    imgLight: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg',
    imgDark: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg',
  },
  {
    id: 'BJ8364850',
    quantity: 2,
    price: 598,
    title: 'Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band',
    imgLight: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg',
    imgDark: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg',
  },
  {
    id: 'BJ8364850',
    quantity: 1,
    price: 799,
    title: 'Sony Playstation 5 Digital Edition Console with Extra Blue Controller, White PULSE 3D Headset and Surge Dual Controller',
    imgLight: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg',
    imgDark: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg',
  },
  {
    id: 'BJ8364850',
    quantity: 1,
    price: 699,
    title: 'Xbox Series X Diablo IV Bundle + 2 Xbox Wireless Controller Carbon Black + Controller Charger',
    imgLight: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg',
    imgDark: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg',
  },
  {
    id: 'BJ8364850',
    quantity: 3,
    price: 2997,
    title: 'APPLE iPhone 15 5G phone, 256GB, Gold',
    imgLight: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg',
    imgDark: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg',
  },
];

const orderSummary = {
  originalPrice: 6592,
  savings: -299,
  storePickup: 99,
  tax: 799,
  total: 7191,
};

const orderHistoryItems = [
  {
    date: '24 Nov 2023',
    title: 'Estimated delivery in 24 Nov 2023',
    description: 'Products delivered',
    icon: (
      <svg
        className="h-4 w-4 text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
        />
      </svg>
    ),
    isActive: false,
  },
  {
    date: 'Today',
    title: 'Today',
    description: 'Products being delivered',
    icon: (
      <svg
        className="h-4 w-4 text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
        />
      </svg>
    ),
    isActive: false,
  },
  {
    date: '23 Nov 2023, 15:15',
    title: "Products in the courier's warehouse",
    description: "Products in the courier's warehouse",
    icon: (
      <svg
        className="h-4 w-4 text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 11.917 9.724 16.5 19 7.5"
        />
      </svg>
    ),
    isActive: true,
  },
  {
    date: '22 Nov 2023, 12:27',
    title: 'Products delivered to the courier - DHL Express',
    description: 'Products delivered to the courier - DHL Express',
    icon: (
      <svg
        className="h-4 w-4 text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 11.917 9.724 16.5 19 7.5"
        />
      </svg>
    ),
    isActive: true,
  },
  {
    date: '19 Nov 2023, 10:47',
    title: 'Payment accepted - VISA Credit Card',
    description: 'Payment accepted - VISA Credit Card',
    icon: (
      <svg
        className="h-4 w-4 text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 11.917 9.724 16.5 19 7.5"
        />
      </svg>
    ),
    isActive: true,
  },
  {
    date: '19 Nov 2023, 10:45',
    title: 'Order placed - Receipt #647563',
    description: 'Order placed - Receipt #647563',
    icon: (
      <svg
        className="h-4 w-4 text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 11.917 9.724 16.5 19 7.5"
        />
      </svg>
    ),
    isActive: true,
    isReceiptLink: true,
  },
];


function ProductItem({ product }) {
  return (
    <div className="space-y-4 p-6">
      <div className="flex items-center gap-6">
        <a href="#" className="h-14 w-14 shrink-0">
          <Image
            width={40}
            height={40}
            className="h-full w-full dark:hidden"
            src={product.imgLight}
            alt="product image"
          />
          <Image
            width={40}
            height={40}
            className="hidden h-full w-full dark:block"
            src={product.imgDark}
            alt="product image"
          />
        </a>
        <SecondaryTitle title={product.title} />
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-normal text-gray-500">
          <span className="font-medium text-primary">
            Product ID:
          </span>{' '}
          <span className='text-secondary'>{product.id}</span>
        </p>

        <div className="flex items-center justify-end gap-4">
          <p className="text-base font-normal text-primary">
            x{product.quantity}
          </p>

          <p className="text-xl font-bold leading-tight text-secondary">
            ${product.price.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

function OrderSummary() {
  return (
    <div className="space-y-4 p-6">
      <div className="space-y-2">
        <dl className="flex items-center justify-between gap-4">
          <dt className="font-normal text-primary">
            Original price
          </dt>
          <dd className="font-medium text-primary">
            ${orderSummary.originalPrice.toLocaleString()}.00
          </dd>
        </dl>

        <dl className="flex items-center justify-between gap-4">
          <dt className="font-normal text-primary">Savings</dt>
          <dd className="text-base font-medium text-green-500">
            ${orderSummary.savings.toLocaleString()}
          </dd>
        </dl>

        <dl className="flex items-center justify-between gap-4">
          <dt className="font-normal text-primary">
            Store Pickup
          </dt>
          <dd className="font-medium text-secondary">
            ${orderSummary.storePickup}
          </dd>
        </dl>

        <dl className="flex items-center justify-between gap-4">
          <dt className="font-normal text-primary">Tax</dt>
          <dd className="font-medium text-red-400">
            ${orderSummary.tax}
          </dd>
        </dl>
      </div>

      <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
        <dt className="text-lg font-bold text-primary">Total</dt>
        <dd className="text-lg font-bold text-primary">
          ${orderSummary.total.toLocaleString()}.00
        </dd>
      </dl>
    </div>
  );
}

function OrderHistoryItem({ item }) {
  return (
    <li
      className={`mb-10 ms-6 ${item.isActive ? 'text-primary-700 dark:text-primary-500' : ''
        }`}
    >
      <span
        className={`absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white ${item.isActive
          ? 'bg-secondary'
          : 'bg-secondary'
          }`}
      >
        {item.icon}
      </span>
      <div>
        <h4
          className={`mb-0.5 ${item.isActive ? 'font-semibold' : 'text-base font-semibold text-primary'
            }`}
        >
          {item.date}
        </h4>
        {item.isReceiptLink ? (
          <a href="#" className="text-sm font-medium hover:underline">
            {item.title}
          </a>
        ) : (
          <p className="text-sm font-normal text-secondary">
            {item.description}
          </p>
        )}
      </div>
    </li>
  );
}

function OrderHistory() {
  return (
    <div className="space-y-6 rounded-lg border border-gray-200  p-6 shadow-sm dark:border-gray-700">

      <PrimaryTitle title={"Order history"} />

      <ol className="relative ms-3 border-s border-gray-200 dark:border-gray-700">
        {orderHistoryItems.map((item, idx) => (
          <OrderHistoryItem key={idx} item={item} />
        ))}
      </ol>

      <div className="grid w-fit grid-cols-2 gap-4">
        <Button text={"Cancel the order"} className={"bg-red-600 text-white"} />
        <Button text={"Order details"} className={"bg-tertiary text-secondary"} />
      </div>
    </div>
  );
}

export default function OrderTrackingSection() {
  return (
    <div>
      <MobileHeader title={"Shipping & Delivery"} />
      <Container className="my-6 antialiased md:py-12">
        <div className="mx-auto">
          <SectionTitle title={"Track the delivery of order #957684673"} />

          <div className="mt-6 sm:mt-8 lg:flex lg:gap-8">
            <div className="w-full divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700 lg:max-w-xl xl:max-w-2xl">
              {products.map((product, idx) => (
                <ProductItem key={idx} product={product} />
              ))}

              <OrderSummary />
            </div>

            <div className="mt-6 grow sm:mt-8 lg:mt-0">
              <OrderHistory />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

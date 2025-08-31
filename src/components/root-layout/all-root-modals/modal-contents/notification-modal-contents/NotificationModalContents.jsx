import React from 'react'
import NotificationModalCard from './components/NotificationModalCard'

const notifications = [
  {
    id: 1,
    title: "New message from John Doe",
    description: "You have a new message from John Doe. Please check it out",
    image: "/images/profile-image.jpg",
    unread: true
  },
  {
    id: 2,
    title: "New comment on your post",
    description: "Someone commented on your post. Check it out!",
    image: "/images/profile-image.jpg",
    unread: true,
  },
  {
    id: 3,
    title: "New follower",
    description: "You have a new follower!",
    image: "/images/profile-image.jpg",
    unread: true
  },
  {
    id: 4,
    title: "New like on your comment",
    description: "Someone liked your comment. Check it out!",
    image: "/images/profile-image.jpg"
  },
  {
    id: 5,
    title: "New mention in a comment",
    description: "You were mentioned in a comment. Check it out!",
    image: "/images/profile-image.jpg"
  },
  {
    id: 6,
    title: "New message from John Doe",
    description: "You have a new message from John Doe. Please check it out",
    image: "/images/profile-image.jpg"
  },
  {
    id: 7,
    title: "New comment on your post",
    description: "Someone commented on your post. Check it out!",
    image: "/images/profile-image.jpg"
  },
]
export default function NotificationModalContents() {
  return (
    <div className='space-y-2 lg:space-y-4'>
      {notifications.map(notification => (
        <NotificationModalCard key={notification.id} data={notification} />
      ))}
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import NotificationModalCard from './components/NotificationModalCard'
import useAuthAxios from '@/hooks/useAuthAxios'
import { useSelector } from 'react-redux'
export default function NotificationModalContents() {
  const user = useSelector(state => state.user?.user)
  const axios = useAuthAxios()

  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    axios.get(`/reseller/notifications-show`).then((res) => {
      setNotifications(res?.data?.notifications)
    })
  }, [user])
  return (
    <div className='space-y-2 lg:space-y-4'>
      {notifications.map(notification => (
        < NotificationModalCard
          key={notification?.id}
          data={{
            id: notification?.id,
            title: notification?.data?.title,
            message: notification?.data?.message,
            isRead: notification?.read_at
          }} />
      ))}
    </div>
  )
}

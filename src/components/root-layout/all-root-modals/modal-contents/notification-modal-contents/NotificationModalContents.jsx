import React, { useEffect, useState } from 'react'
import NotificationModalCard from './components/NotificationModalCard'
import useAuthAxios from '@/hooks/useAuthAxios'
import { useSelector } from 'react-redux'
export default function NotificationModalContents() {
  const user = useSelector(state => state.user?.user)
  const axios = useAuthAxios()

  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    console.log(user, "user")
    axios.get(`/customer/${user?.id}/show`).then((res) => {
      setNotifications(res?.data?.data)
    })
  }, [user?.id])
  console.log(notifications, "notifications")
  return (
    <div className='space-y-2 lg:space-y-4'>
      {/* {notifications.map(notification => (
        <NotificationModalCard key={notification.id} data={notification} />
      ))} */}
    </div>
  )
}

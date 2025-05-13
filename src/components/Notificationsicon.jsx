import React, { useState, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';

function NotificationIcon({ notifications }) {
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const count = notifications.filter(notification => !notification.read).length;
    setUnreadCount(count);
  }, [notifications]);

  return (
    <div className="relative cursor-pointer top-1">
      <span class="material-symbols-outlined ">
     notifications
    </span>
      {unreadCount > 0 && (
        <span className="absolute -top-1.5  -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
          {unreadCount}
        </span>
      )}
    </div>
  );
}

export default NotificationIcon;

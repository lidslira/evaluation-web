import { Toaster } from 'react-hot-toast'
import { device } from '../styles/breakpoints'

export const ToastComponent = () => {
  return (
    <Toaster
      toastOptions={{
        className: '',
        style: {
          background: '#00875f',
          padding: `${device.mobile} ? 10px : 15px`,
          color: 'white',
          width: '20rem',
        },
      }}
    />
  )
}

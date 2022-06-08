import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Toast from '../components/toast/Toast'

function MyApp({ Component, pageProps }: AppProps) {
  const list:any[] = [
    {
      title: "ABCS",
      message: 'This is message',
      status: 'error'
    },
    {
      title: "ABCS",
      message: 'This is message',
      status: 'error'
    },
    {
      title: "ABCS",
      message: 'This is message',
      status: 'error'
    },
  ];
  return (
    <>
      {/* <Toast list={list}/> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

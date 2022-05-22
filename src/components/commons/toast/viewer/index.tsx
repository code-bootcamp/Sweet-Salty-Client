import dynamic from 'next/dynamic'

const ToastViewer = dynamic(() => import('./viewer'), {
  ssr: false,
})

export default function ToastViewerPage(props) {
  return <ToastViewer contents={props.contents} />
}
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
import { Viewer } from '@toast-ui/react-editor';
// import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import { useRef } from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`
export default function PostView(props){
	const editorRef = useRef<Viewer>(null)

	const onClickConsole = () => {
	  const editorInstance = editorRef.current.getInstance()
	  const getContentMarkdown = editorInstance.setMarkdown(props.contents)
	  // const getContentHTML = editorInstance.getHTML()
	  // props.setContents(editorInstance.getHTML())
	  // console.log(props.contents)
	  return getContentMarkdown
	}

	return (
		<Wrapper>
		{props.contents && (
		  <Viewer
			initialValue={props.contents}
			// plugins={[colorSyntax]}
		  />
		)}
	  </Wrapper>
	);
}
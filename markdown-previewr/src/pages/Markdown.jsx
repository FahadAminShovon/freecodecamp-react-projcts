import React, { useEffect, useState } from 'react';
import marked from "marked";
import README from './README.md';

marked.setOptions({
	breaks: true,
	sanitize: true
})

function Markdown() {
	const [editorValue, setEditor] = useState('');
	const [previewValue, setPreviewValue] = useState(editorValue);
	const renderer = new marked.Renderer();

	renderer.link = ( href, title, text ) => {
		return `<a target='_blank' href=${href} title=${title}>${text}</a>`;
	}
	marked.use({renderer})

	useEffect(() => {
		setPreviewValue(marked(editorValue));
	}, [editorValue]);

	useEffect(() => {
		fetch(README)
		.then((res) => res.text())
		.then((md) => {
			setEditor(md)
		})
	}, [])


	return (
		<div className='markdown'>
			<div className='editor-block'>
				<textarea
					id='editor'
					defaultValue={editorValue}
					onChange={(e) => setEditor(e.target.value)}
				></textarea>
			</div>
			<div className='previewer-block markdown-body'>
				<div id='preview'
				dangerouslySetInnerHTML={{__html: previewValue}}
				></div>
			</div>
		</div>
	);
}

export default Markdown;

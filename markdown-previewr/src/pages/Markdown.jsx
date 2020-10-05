import React, { useEffect, useState } from 'react';
import marked from "marked";
import README from './README.md';

function Markdown() {
	const [editorValue, setEditor] = useState('');
	const [previewValue, setPreviewValue] = useState(editorValue);

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
			<div className='previewer-block'>
				<div id='preview'
				dangerouslySetInnerHTML={{__html: previewValue}}
				></div>
			</div>
		</div>
	);
}

export default Markdown;

import React, { useEffect, useState } from 'react';

function Markdown() {
	const [editorValue, setEditor] = useState('');
	const [previewValue, setPreviewValue] = useState(editorValue);

	useEffect(() => {
		setPreviewValue(editorValue);
	}, [editorValue]);

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
				<div id='preview'>{previewValue}</div>
			</div>
		</div>
	);
}

export default Markdown;

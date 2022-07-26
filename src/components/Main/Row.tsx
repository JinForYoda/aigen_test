// import { useAppSelector } from 'app/hooks'
import React from 'react'
import Accordion from 'react-bootstrap/esm/Accordion'
import { MainTypes } from './mainTypes'

interface RowProps {
	doc: MainTypes.DocItem | undefined
}

function Row({ doc }: RowProps) {
	if (!doc) return null
	return (
		<Accordion defaultActiveKey="0">
			<Accordion.Item eventKey={doc.id.toString()}>
				<Accordion.Header>
					<div className="d-flex justify-content-between w-100">
						<span>{doc.title}</span>
						<span>{doc.date}</span>
					</div>
				</Accordion.Header>
				<Accordion.Body>{doc.description}</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	)
}

export default React.memo(Row)

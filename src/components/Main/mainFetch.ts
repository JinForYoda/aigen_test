import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { createServer } from 'miragejs'
import { MainTypes } from './mainTypes'
import MockData from '../../MOCK_DATA.json'

const server = createServer({})
server.get('api/docs', () => MockData)

export namespace MainFetch {
	export const getDocsList = createAsyncThunk(MainTypes.GET_DOCS_LIST, async () => {
		const response = await axios('/api/docs')
		return response.data
	})
}

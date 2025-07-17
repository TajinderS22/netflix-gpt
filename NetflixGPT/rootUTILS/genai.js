import {GoogleGenAI} from '@google/genai'
import { GEN_AI_API_KEY, } from './constants.js';


// const OPEN_AI_API_KEY='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'

const client = new GoogleGenAI({
    apiKey:GEN_AI_API_KEY
})

export default client;
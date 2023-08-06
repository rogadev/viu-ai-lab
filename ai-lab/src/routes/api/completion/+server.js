import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { OPENAI_API_KEY } from '$env/static/private';

// Create an OpenAI API client (that's edge friendly!)
const openAIConfig = new Configuration({
	apiKey: OPENAI_API_KEY
});
const openai = new OpenAIApi(openAIConfig);

// Set the runtime to edge for best performance
export const config = {
	runtime: 'edge'
};

export async function POST({ request }) {
	const { prompt } = await request.json();

	// Ask OpenAI for a streaming completion given the prompt
	const response = await openai.createCompletion({
		model: 'text-davinci-003',
		stream: true,
		temperature: 0.3,
		prompt
	});

	// Convert the response into a friendly text-stream
	const stream = OpenAIStream(response);
	// Respond with the stream
	return new StreamingTextResponse(stream);
}

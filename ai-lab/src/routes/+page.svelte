<script lang="js">
	import { useCompletion } from 'ai/svelte';

	const { input, handleSubmit, completion } = useCompletion({
		api: '/api/completion',
		onError: (err) => {
			console.error(err);
			alert('Something went wrong. Please try again.');
		},
		onFinish: () => {
			console.log('Finished!');
		}
	});

	$: () => {
		console.log(completion);
	};
</script>

<main>
	<form on:submit={handleSubmit}>
		<textarea rows="10" type="text" bind:value={$input} placeholder="Enter your prompt here..." />
		<button type="submit">Send Prompt</button>
	</form>
	<div>{$completion}</div>
</main>

<style>
	textarea {
		width: 100%;
	}
</style>

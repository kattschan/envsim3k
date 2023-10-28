<script>
	// import svelte onmount
	import { onMount } from 'svelte';
	import { pages } from '../pages.ts';
	import Story from '../components/Story.svelte';
</script>

<h4>Welcome to Environment Simulator 3000</h4>
<p>
	This is an interactive simulator designed to show how small actions can add up quickly and have a
	big impact on the environment. You'll be presented with a series of choices and at the end, see a
	summary of your choices and where your behaviours support the environment.
</p>
<a data-ui="#storyPage"><button class="small-round">Start your Journey!</button></a>
<div class="space"></div>
<div class="page right" id="storyPage">
	<Story />
</div>

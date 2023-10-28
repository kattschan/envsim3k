<script>
	import { pages } from '../pages.ts';
    export let page = 'introduction';

</script>
<style>
    .storyImage {
        width: 100%;
    }
</style>
<article class="no-padding">
    <div class="grid no-space">
      <div class="s6">
        <img class="responsive" src="/image/{page}.jpg"><!----><!---->
        <div class="absolute bottom left right padding top-shadow white-text">
          {@html pages[page].image_attribution}
        </div>
      </div>
      <div class="s6">
        <div class="padding">
          <h5>Title</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  </article>
  <div class="space"></div>
  <div class="row center-align">
  <button class="border round">Button</button>
  <button class="border round">Button</button>
  <button class="border round">Button</button>
  <button class="border round">Button</button>
  <button class="border round">Button</button>
</div>
<script>
	import { pages } from '../pages.ts';
    export let page = 'introduction';
</script>
<svelte:head>
    {#each Object.keys(pages) as page}
    <link rel="preload" href="/image/{page}.jpg" as="image">
    {/each}
</svelte:head>
<style>
    .storyImage {
        width: 100%;
    }
</style>
<article class="no-padding">
    <div class="grid no-space">
      <div class="s6">
        <img class="responsive" alt="{page}" src="/image/{page}.jpg">
        <div class="absolute bottom left right padding bottom-shadow white-text">
          {@html pages[page].image_attribution}
        </div>
      </div>
      <div class="s6">
        <div class="padding">
          <h5>{pages[page].text}</h5>
          <p>{pages[page].description !== null ? pages[page].description : "Choose an option below!"}</p>
        </div>
        <nav class="no-space l" style="width:100%">
            {#each pages[page].choices as choice}
            <button class="border no-round max extra tertiary-container"
            on:click={(e) => {
                e.target.blur();
                page = choice.next_identifier;
            }}>
              <span>{choice.text}</span>
            </button>
            {/each}
          </nav>
      </div>
    </div>
  </article>
  <div class="space"></div>
  <div class="row center-align">
  
    <nav class="no-space m s" style="width:100%">
    {#each pages[page].choices as choice}
    <button class="border no-round max extra tertiary-container"
    on:click={(e) => {
        e.target.blur();
        page = choice.next_identifier;
    }}>
      <span>{choice.text}</span>
    </button>
    {/each}
  </nav>
</div>
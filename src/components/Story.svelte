<script>
	import { pages } from '../pages.ts';
    export let page = 'introduction';
    export let path = [];
    let score = 0;
    // clamp socre
    $: if (score > 7) { score = 7; }
    $: if (score < 0) { score = 0; }

    const score_lut = [
      "You are the most environmentally unfriendly you could be.",  /// 0
      "Your actions are quite environmentally unfriendly.", // 1
      "You perform some envirionmentally unfriendly actions, but are somewhat environmentally friendly", // 2
      "You are quite environmentally friendly!", // 3
      "You are environmentally friendly!", // 4
      "You are environmentally friendly!", , //5 
      "Your actions do not harm the environment much!", // 6
      "Your actions do not harm the environment much!", // 7
    ]
</script>

<svelte:head>
    {#each Object.keys(pages) as page}
    <link rel="preload" href="/image/{page}.jpg" as="image">
    {/each}
</svelte:head>
<style>
    .storyImage {
        /* width: 00%; */
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
        <!-- desktop -->
        <nav class="no-space l" style="width:100%">
            {#each pages[page].choices as choice}
            <button class="border no-round max extra tertiary-container"
            on:click={e => {
              const chosen = {
                  question: pages[page].text,
                  answer: choice.text,
                  note: choice.note,
                  image_attribution: pages[page].image_attribution,
                  page: page
              }
              // path.push(chosen);
              path = [...path, chosen];
              e.target.blur();
              page = choice.next_identifier;
              score += choice.score_modifier;
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
  <!-- mobile -->
    <nav class="no-space m s" style="width:100%">
    {#each pages[page].choices as choice}
    <button class="border no-round max extra tertiary-container"
    on:click={(e) => {
        const chosen = {
            question: pages[page].text,
            answer: choice.text,
            note: choice.note,
            image_attribution: pages[page].image_attribution,
            page: page
        }
        // path.push(chosen);
        path = [...path, chosen];
        // scuffed af
        score += choice.score_modifier;
        e.target.blur();
        page = choice.next_identifier;
    }}>
      <span>{choice.text}</span>
    </button>
    {/each}
  </nav>
</div>

{#if page === "outro"}
<h1>Score: {Math.floor((score / 7) * 100)}%</h1>
<h5>{score_lut[score]}</h5>
<h5>Now, imagine if everybody in your school did the same thing as you. How do you think the world would look like?</h5>
<h6>Maybe something like this?</h6>
{#each path as step}
{#if step.page != "introduction"}
<article class="no-padding">
    <div class="grid no-space">
      <div class="s6">
        <img class="responsive storyImage" src="/image/{step.page}.jpg" style="height: 300px;">
        <div class="absolute bottom left right padding bottom-shadow white-text">
          {@html step.image_attribution}
        </div>
      </div>
      <div class="s6">
        <div class="padding">
          <h5>{step.question}</h5>
          <p>{step.note}</p>
        </div>
      </div>
    </div>
  </article>
{/if}
  {/each}
{/if}
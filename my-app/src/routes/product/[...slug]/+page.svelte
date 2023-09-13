<svelte:head>
	<title>food app</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<script>
    import { page } from '$app/stores'
    
    console.log($page.params.slug);

    const slugArr = $page.params.slug.split('/');
    console.log(slugArr);
</script>

<h1>슬러그 페이지</h1>

{#if slugArr.length === 1}
<h1>슬러그 페이지 ; 주제 {slugArr[0]}</h1>
{:else if slugArr.length === 2}
<h1>슬러그 페이지 ; 주제 {slugArr[0]} - 소주제 {slugArr[1]}</h1>
{/if}
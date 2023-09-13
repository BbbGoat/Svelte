
<script>
// @ts-nocheck

    import { page } from '$app/stores'
    import { categoryOrder, categories } from '../../store';
    
    // 파라미터값
    let param = $page.params.slug;
    console.log($page.params.slug);

    // URL 파라미터 배열에 담기
    const slugArr = $page.params.slug.split('/');
</script>

<svelte:head>
	<title>food app</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if slugArr.length === 1}
    <h1>슬러그 페이지 ; 주제 {slugArr[0]}</h1>

    
        <h1>{ categories[param].name}</h1>
    
        {#if categories[param].description }
            <h1>{ categories[param].description}</h1>
            {:else if  categories[param].description === undefined}
            <div class="text-center">
                설명란이 비어있는 경우 노출됨
            </div>
        {/if}
    
        <h1>{ categories[param].id}</h1>
        <img src={categories[param].picture} alt="prd-img">
    
        <!-- 맵 돌려야함 -->
        <h1>{ categories[param].productOrder}</h1>
{:else if slugArr.length === 2}

{/if}
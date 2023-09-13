<script>
	// @ts-nocheck
	import { page } from '$app/stores';
	import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'sveltestrap';
	import { categoryOrder, categories, products } from '../../store';

	// 파라미터값
	console.log($page.params.slug);
    
	// URL 파라미터 배열에 담기
	const slugArr = $page.params.slug.split('/');
	let param = slugArr[1];

    // each 반복시킬 상품 배열
    let prdArr = categories[param].productOrder;

</script>

<svelte:head>
	<title>food app</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if slugArr.length === 1}
    <h4>프로덕트 페이지</h4>

{:else if slugArr.length === 2}

    <Container fluid>
        <Breadcrumb divider="・" class="okok">
            <BreadcrumbItem>
                <h3><a href="#home">{categories[param].name}</a></h3>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <h4>
                    <a href="#library">
                        {#if categories[param].description}
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <h4><a href="#">{categories[param].description}</a></h4>
                        {:else if categories[param].description === undefined}
                            <div class="text-center" />
                        {/if}
                    </a>
                </h4>
            </BreadcrumbItem>
        </Breadcrumb>

        <Row cols={{ lg: 3, md: 2, sm: 1, xs: 1 }}>
            {#each prdArr as item, i (i)}
                <Col class="position-relative">
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a class="wrap" href="#">
                        <div class="img-box">
                            <img src={products[item].picture} alt="ct-img" class="rounded-circle shadow" />
                            <h3>{products[item].name}</h3>
                        </div>
                        <!-- <h4>{categories[item].name}</h4> -->
                    </a>
                    <div class="bg" />
                </Col>
            {/each}
        </Row>
    </Container>

    <!-- <h1>{categories[param].productOrder}</h1> -->

    <!-- <h1>{categories[param].id}</h1> -->
    <!-- <img src={categories[param].picture} alt="prd-img" /> -->


	
{/if}

<style>
	h3 {
		font-size: 2rem;
	}
	h4 {
		display: inline;
		font-size: 1rem;
	}
	:global(.breadcrumb) {
		align-items: center;
	}
	a {
		color: #000;
		text-decoration: none;
	}
	.bg {
		display: block;
		position: relative;
		top: -90%;
		height: 90%;
		width: 100%;
		background-color: #f7f6f2;
		border-radius: 10px;
		z-index: -1;
	}
    img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.img-box {
		display: block;
		margin: 0 auto;
		width: 150px;
		height: 150px;
	}
	.wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 9px;
		padding: 10px;
		border-radius: 10px;
	}
</style>

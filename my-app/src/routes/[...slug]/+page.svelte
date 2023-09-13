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

    // 정규식 이용한 2자리수 점 찍기
    function chgCents(price) {
        return price.toString().replace(/\B(?=(\d{2})+(?!\d))/g, '.');
    }

</script>

<svelte:head>
	<title>food app</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if slugArr.length === 1}
    <h4>프로덕트 페이지</h4>

{:else if slugArr.length === 2}

  
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

        <Container fluid>
        <Row cols={{ lg: 3, md: 2, sm: 1, xs: 1 }}>
            {#each prdArr as item, i (i)}
            <Col class="p-0 mb-3 position-relative">
                <small>{i} : {item}</small>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="wrap" href="#">
                    <div class="img-box">
                        <img src={products[item].picture} alt="ct-img" />
                    </div>
                    <div class="txt-box text-center">
                        <h5>{products[item].name}</h5>
                        <p class="desc">{products[item].description}</p>
                        <span>${chgCents(products[item].price)}</span>
                    </div>
                </a>
            </Col>
            {/each}
        </Row>
    </Container>
	
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
    img {
		width: 100%;
		height: 100%;
		object-fit: cover;
        border-radius: 10px;
	}
	.img-box {
		display: block;
		margin: 0 auto;
	}
	.wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 9px;
		padding: 10px;
	}
    .desc {
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>

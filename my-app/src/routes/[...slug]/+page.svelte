<script>
	// @ts-nocheck
	import { page } from '$app/stores';
    import { goto } from '$app/navigation';
	import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Button } from 'sveltestrap';
	import { categoryOrder, categories, products } from '../../data';    


	// 파라미터값
	console.log($page.params.slug);
    
	// URL 파라미터 배열에 담기
	const slugArr = $page.params.slug.split('/');
	console.log(slugArr);
	let param = slugArr[1];

    // each 반복시킬 상품 배열
    let prdArr = categories[param].productOrder;

    // 정규식 이용한 2자리수
    function chgCents(price) {
        return price.toString().replace(/\B(?=(\d{2})+(?!\d))/g, '.');
    }

    

</script>

<svelte:head>
	<title>Foodly | product</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if slugArr.length === 1}
    <h4>프로덕트 페이지</h4>

{:else if slugArr.length === 2}


    <Breadcrumb divider="・">
        <button class="shadow-sm" on:click={()=>{goto("/", { replaceState: true});}}>아이콘
        </button>
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
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="wrap" href="#">
                    <small>{i} - {item}</small>
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
	
{:else if slugArr.length === 3}
    <div>잘못된 경로입니다.</div>

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
        margin-top: 10px;
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
    .txt-box {
        display: block;
        width: 300px;
    }
	.wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		padding: 10px;
	}
    .desc {
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    small {
        display: block;
        text-align: center;
        margin: 10px 0;
        /* margin-left: 15px; */
        color: #ccc;
    }
    button {
        display: inline-block;
        height: 50px;
        width: 70px;
        border: 1px solid #f1f1f1;
        border-radius: 10px;
        background-color: #fff;
        margin-right: 30px;
        margin-left: 15px;
    }
</style>

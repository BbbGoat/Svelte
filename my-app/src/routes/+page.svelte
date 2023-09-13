<script>
	import { Container, Row, Col } from "sveltestrap";
	import { categoryOrder } from "../store";
</script>

<svelte:head>
	<title>food app</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

	<Container fluid>
		<Row cols={{ lg: 4, md: 2, sm: 2, xs:1 }}>
			{#each categoryOrder as item, i (i) }
			<Col class="position-relative">
				<a class="wrap" href="/product">
					<div class="img-box">
						<img src="https://picsum.photos/300/200.webp" alt="ct-img" class="rounded-circle">
					</div>
					<h4>{item}</h4>
				</a>
				<div class="bg">
				</div>
			</Col>
			{/each}
		</Row>
	</Container>
	
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
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
		/* outline: 1px dotted red; */
		border-radius: 10px;
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
	a {
		color: #000;
		text-decoration: none;
	}
</style>

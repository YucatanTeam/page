<script>
	export let page = "main";
</script>

<style>
	h1 {
		color: rgba(138, 70, 138, 0.726);
	}
	.tab-link {
		color: rgba(138, 70, 138, 0.726);
		border: 1px solid rgba(138, 70, 138, 0.726);
		border-radius: 7px;
		padding: 5px 5% 5px 5%;
		margin: 12px 0px 5px 3%;
	}
	.header ,.content {
		box-sizing: border-box;
		padding: 15px;
		display: block;
		width: 40%;
		margin: 10px 30% 0px 30%;
		text-align: center;
	}
</style>

<div class="header">
	<span>Yucatan .</span>
	<a href="!#" class="tab-link" on:click={e=>page="main"}>Home</a>
	<a href="!#" class="tab-link" on:click={e=>page="about"}>About us</a>
</div>
{#if page == "main"}
	<div class="content">
		<h1>Yucatan</h1>
		<p>Yucatan dev team</p>
	</div>
{:else if page == "about"}
	<div class="content">
		<p>University of Mazandaran. Babolsar. Mazandaran</p>
		<p>Asadi: 0911 897 1878</p>
		<p>Arefi: 09 ...</p>
		<p>Mafi:  09 ...</p>
	</div>
{/if}




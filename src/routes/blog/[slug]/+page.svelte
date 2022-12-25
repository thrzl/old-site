<script>
  export let data;
  import "../prisma.css"
</script>

<div style="background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(0,0,0,1) 100%), url({data.image}); background-position: center" class="bg-no-repeat bg-cover h-180 absolute w-screen -ml-2 -mt-2 -z-20"></div>

<article class="md:w-prose p-10 text-white mx-auto">
    <div class="bg-no-repeat bg-cover py-5 rounded-lg">
      <a
								href="/blog"
								class="print:border-none group text-white font-bold mb-2"
								><span
									class="decoration-none inline-block print:hidden text-gray-550 print:text-black font-normal group-hover:-translate-x-1 transition duration-500 ease-in-out"
									>←</span
								> back</a
							>
        <h1 class="text-5xl mt-0 mb-5 leading-none font-bold">{ data.title }</h1>
        <h2 class="text-xl mt-0 mb-0 leading-none">published: {data.date}</h2>
    </div>
    <div class="prose text-lg">
      <svelte:component this={data.content} />
    </div>
</article>
<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="flex flex-col min-h-screen justify-center bg-red-600">
    <h1 class="text-white font-bold text-lg text-center py-2">{data.title}</h1>
    <p class="text-white text-sm text-center">{@html data.content}</p>

    <a href="/home" class="text-white font-bold text-lg hover:scale-125 transition-all duration-300 text-center ml-auto mr-auto py-4">back</a>
</div>
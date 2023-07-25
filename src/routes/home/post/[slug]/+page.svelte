<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="flex flex-col min-h-screen justify-center bg-red-600">
    <h1 class="text-white font-bold text-lg text-center py-2">{data.title}</h1>
    <p class="text-white text-sm text-center">{@html data.content}</p>
    <div class="align-bottom">
        <a class="text-white text-sm text-center flex justify-center" href="https://github.com/calciumista/switchsite">github.com/calciumista/switchsite</a>
    </div>
</div>

<template>
    <div>
        <embed class="pdf" src="../../../../docs/user-manuals/sdor-user-manual.pdf" width="800" height="500">
        <!-- </iframe> -->
    </div>
</template>
<script>
import Utilities from '../../../libraries/utilities.js';
import HttpRequest from '../../../libraries/request.js';
export default {
    mixins: [
        HttpRequest,
        Utilities
    ],
    data() {
        return {
            }
    },
    mounted() {
        
    },
    methods: {
       
    }
}
</script>
<style scoped>
    .pdf {
        width: 100%;
        aspect-ratio: 4 / 3;
    }

    .pdf,
    html,
    body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    h1,
    h3 {
        text-align: center;
    }

    h1 {
        color: green;
    }
</style>
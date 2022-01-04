<template>
    <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name: 'entry', params: { id: 10} })">

        <!-- Titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold"> 4 </span>
            <span class="mx-1 fs-5">enero</span>
            <span class="mx-2 fw-light">2022</span>
        </div>

        <div class="entry-description">
            Laborum elit ea ad ipsum aliquip officia sint nisi pariatur et ut esse veniam. Ut occaecat in qui mollit. Officia adipisicing proident reprehenderit fugiat. Dolor officia officia consequat nulla est et nisi enim laborum irure. Exercitation ipsum minim Lorem laboris duis laborum quis eiusmod velit dolore voluptate.
        </div>

    </div>
</template>

<style lang="scss" scoped>

.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description{
        font-size: 12px;
    }

}


</style>
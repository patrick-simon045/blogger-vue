<template>
    <div class="cheat-sheet">
        <div class="title-section">
            <p>Cheat sheet</p>
        </div>
        <div class="content-section">
            <p>Press<strong>Ctrl + /</strong>to sjow or hide dialog</p>
            <br>
            <p>Type <strong>title or t:</strong>then<strong>Enter</strong>to create a title</p>
            <br>
            <p>Type <strong>paragraph or p:</strong>then<strong>Enter</strong>to create a paragraph</p>
            <br>
            <p>Press<strong>Escape key</strong>to clear input</p>
            <br>
            <p>Use<strong>double click</strong>on a section to remove it</p>
        </div>
    </div>
</template>
<style scoped>
strong {
    font-weight: 800;
    margin: 0 10px;
}

p{
    font-size: 15px;
}
.cheat-sheet {
    width: 200px;
    top: 10px;
    right: 10px;
    border-radius: 10px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    /* background-color: red; */
    border: 1px solid wheat;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.title-section {
    width: 100%;
    padding: 20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: wheat;
}

.content-section {
    width: 100%;
    padding: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    text-align: left;
    background-color: whitesmoke;
}
</style>
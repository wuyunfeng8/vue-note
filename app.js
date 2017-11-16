const Note = {
    template: `
        <div>笔记</div>
    `
}
const Notes = {
    components: {
        'note': Note
    },
    template: `
        <div class='ui container notes'>
            <h4 class='ui horizontal divider header'>
                <i class='paw icon'></i>
                uranplus Notes App _ Vue.js
            </h4>
            <a>添加笔记</a>
            <note></note>
            <note></note>
            <note></note>
        </div>
    `
}

const app = new Vue({
    el: '#app',
    components: {
        'notes': Notes
    },
    template: `
        <notes></notes>
    `
})

const accHeader = document.querySelectorAll('.accordin-header').forEach(header => {
    header.addEventListener('click', event => {
        let content = header.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.paddingTop = '0px'
            content.style.paddingBottom = '0px'
        } else {
            content.style.maxHeight =
                content.scrollHeight + 64 + 'px';
            content.style.paddingBottom = '24px'
        }
    })
})

const btn = document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', event => {
        let content = button.parentElement;
        let currentHeader = content.previousElementSibling;
        let nextHeader = content.nextElementSibling;
        let nextContent = nextHeader.nextElementSibling;

        content.style.maxHeight = null;
        content.style.paddingTop = '0px';
        content.style.paddingBottom = '0px';

        currentHeader.classList.toggle('active');
        nextHeader.classList.toggle('active');


        nextContent.style.maxHeight =
            content.scrollHeight + 64 + 'px';
        nextContent.style.paddingBottom = '24px';
    })
})
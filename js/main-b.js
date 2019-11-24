// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array:
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// After the loop print the HTML into <ul> element using innerHTML.

const ul = document.querySelector('ul');

const showImages = (code) => {
    ul.innerHTML = code;
};

const getFetchData = async (url) => {
    const response = await fetch(url);
    return await response.json();
};
const code = getFetchData('images.json').then(data =>{
    for (let i= 0; i < data.length; ++i)
    {
        ul.innerHTML +=
            `<figure>
        <a href="img/original/${data[i].mediaUrl}"><img src="img/thumbs/${data[i].mediaThumb}"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>`
    }
});
showImages(code);
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
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element
'use strict'
const ul = document.querySelector('ul');
const showImages = (code) => {
    ul.innerHTML = code;
};
const getFetchData = async (url) => {
    const response = await fetch(url);
    return await response.json();
};
const code = getFetchData('images.json').then(data =>{
    const image = document.createElement('img');
    image.innerHTML
});
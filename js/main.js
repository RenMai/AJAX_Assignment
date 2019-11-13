const ul = document.querySelector('ul');

const showImages = (code) => {
    ul.innerHTML = code;
};

const getFetchData = async (url) =>
{
    const response = await fetch(url);
    
};
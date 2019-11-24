

const ul = document.querySelector('ul');

const showImages = (code) => {
    ul.innerHTML = code;
};

const getFetchData = async (url) =>
{
    const response = await fetch(url);
    const result = await response.text();
    ul.innerHTML = result;
    return result;
};;

const code = getFetchData('./images.html');
showImages(code);
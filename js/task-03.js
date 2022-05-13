const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery");

// A function that creates tags of list items that contain images from an array of images objects
const markupsOfImages = (arrayOfImagesObjects) => arrayOfImagesObjects.map(({url, alt}) => `<li><img src="${url}" alt="${alt}"></li>`).join("");

// Adding images to the gallery
gallery.insertAdjacentHTML("afterbegin", markupsOfImages(images));

// Image list styling function
const imageListStyling = (list) => {
  const ul = list.style;
  ul.padding = "20px";
  ul.display = "flex";
  ul.flexWrap = "wrap";
  ul.marginTop = "-30px";
  ul.marginLeft = "-30px";

  list.childNodes.forEach(item => {
    const li = item.style;
    li.listStyleType = "none";
    li.flexBasis = "calc((100% / 3) - 30px)";
    li.marginTop = "30px";
    li.marginLeft = "30px";

    item.childNodes.forEach(image => {
      const img = image.style;
      img.display = "block";
      img.width = "100%";
      img.height = "100%";
    });
  });
};

// Styling the list of ul.gallery
imageListStyling(gallery);
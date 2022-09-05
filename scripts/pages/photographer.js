//Mettre le code JavaScript lié à la page photographer.html
//variable portée global
let lightboxImg;

async function getphotographer(id) {
  const result = await fetch('/data/photographers.json');
  const data = await result.json();
  return data.photographers.filter((photographer) => photographer.id == id);
}

async function getMedias(id) {
  const result = await fetch('/data/photographers.json');
  const detail = await result.json();
  return detail.media.filter((media) => media.photographerId == id);
}

function selectOption(option, media) {
  if (option == 'Popularité') {
    return media.sort(function (a, b) {
      return b.likes - a.likes;
    });
  } else if (option == 'Date') {
    return media.sort(function (a, b) {
      return a.date.localeCompare(b.date);
    });
  } else {
    return media.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
  }
}

function setlightbox(title, newImage, index, type) {
  lightboxImg = index;
  if (type == 'video') {
    document.querySelector('.lightbox-img').innerHTML = `
        <video class="lightbox" controls>
        <source src="${newImage}" type="video/mp4">
        </source>
        </video>`;
  } else {
    document.querySelector('.lightbox-img').innerHTML = `
        <img class="lightbox" 
        src="${newImage}"></img>`;
  }
  document.getElementById('lightbox-title').textContent = title;
}

async function init() {
  const url = new URL(window.location.href);
  const id = url.searchParams.get('id');
  const photographer = await getphotographer(id);
  const media = await getMedias(id);
  const filterByOption = document.getElementById('filterByOption');
  let newDiv = document.createElement('div');
  newDiv.className = 'filterOption';
  let newList = document.createElement('div');
  newList.className = 'sortList';
  newDiv.innerHTML =
    "<span>Popularité</span> <img src='assets/icons/Vectorhaut.png' class='open-filter rotate' />";
  newDiv.addEventListener('click', function () {
    newList.classList.toggle('active');
    document.querySelector('.filterOption img').classList.toggle('rotate');
  });
  newList.innerHTML =
    "<hr>  <span class='item'>Date</span> <hr> <span class='item'>Titre</span>";
  const listItems = newList.querySelectorAll('.item');
  listItems.forEach(function (span) {
    span.addEventListener('click', function () {
      const newText = span.textContent;
      span.textContent =
        document.querySelector('.filterOption span').textContent;
      document.querySelector('.filterOption span').textContent = newText;
      displayPage(photographer[0], selectOption(newText, media));
      newList.classList.toggle('active');
    });
  });
  filterByOption.appendChild(newDiv);
  filterByOption.appendChild(newList);
  displayPage(photographer[0], selectOption('Popularité', media));
  document.querySelector('.previous').addEventListener('click', function () {
    if (lightboxImg == media.length - 1) {
      if (media[0].video != undefined) {
        setlightbox(
          media[0].title,
          `/assets/sample_photos/${photographer[0].name}/${media[0].video}`,
          0,
          'video'
        );
      } else {
        setlightbox(
          media[0].title,
          `/assets/sample_photos/${photographer[0].name}/${media[0].image}`,
          0,
          'image'
        );
      }
    } else {
      if (media[lightboxImg + 1].video != undefined) {
        setlightbox(
          media[lightboxImg + 1].title,
          `/assets/sample_photos/${photographer[0].name}/${
            media[lightboxImg + 1].video
          }`,
          lightboxImg + 1,
          'video'
        );
      } else {
        setlightbox(
          media[lightboxImg + 1].title,
          `/assets/sample_photos/${photographer[0].name}/${
            media[lightboxImg + 1].image
          }`,
          lightboxImg + 1,
          'image'
        );
      }
    }
  });

  if (media[0].video != undefined) {
    setlightbox(
      media[0].title,
      `/assets/sample_photos/${photographer[0].name}/${media[0].video}`,
      0,
      'video'
    );
  } else {
    setlightbox(
      media[0].title,
      `/assets/sample_photos/${photographer[0].name}/${media[0].image}`,
      0,
      'img'
    );
  }

  document.querySelector('.previous').addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
      if (lightboxImg == media.length - 1) {
        if (media[0].video != undefined) {
          setlightbox(
            media[0].title,
            `/assets/sample_photos/${photographer[0].name}/${media[0].video}`,
            0,
            'video'
          );
        } else {
          setlightbox(
            media[0].title,
            `/assets/sample_photos/${photographer[0].name}/${media[0].image}`,
            0,
            'image'
          );
        }
      } else {
        if (media[lightboxImg + 1].video != undefined) {
          setlightbox(
            media[lightboxImg + 1].title,
            `/assets/sample_photos/${photographer[0].name}/${
              media[lightboxImg + 1].video
            }`,
            lightboxImg + 1,
            'video'
          );
        } else {
          setlightbox(
            media[lightboxImg + 1].title,
            `/assets/sample_photos/${photographer[0].name}/${
              media[lightboxImg + 1].image
            }`,
            lightboxImg + 1,
            'image'
          );
        }
      }
    }
  });

  if (media[0].video != undefined) {
    setlightbox(
      media[0].title,
      `/assets/sample_photos/${photographer[0].name}/${media[0].video}`,
      0,
      'video'
    );
  } else {
    setlightbox(
      media[0].title,
      `/assets/sample_photos/${photographer[0].name}/${media[0].image}`,
      0,
      'img'
    );
  }

  document.querySelector('.next').addEventListener('click', function () {
    if (lightboxImg == media.length - 1) {
      if (media[0].video != undefined) {
        setlightbox(
          media[0].title,
          `/assets/sample_photos/${photographer[0].name}/${media[0].video}`,
          0,
          'video'
        );
      } else {
        setlightbox(
          media[0].title,
          `/assets/sample_photos/${photographer[0].name}/${media[0].image}`,
          0,
          'image'
        );
      }
    } else {
      if (media[lightboxImg + 1].video != undefined) {
        setlightbox(
          media[lightboxImg + 1].title,
          `/assets/sample_photos/${photographer[0].name}/${
            media[lightboxImg + 1].video
          }`,
          lightboxImg + 1,
          'video'
        );
      } else {
        setlightbox(
          media[lightboxImg + 1].title,
          `/assets/sample_photos/${photographer[0].name}/${
            media[lightboxImg + 1].image
          }`,
          lightboxImg + 1,
          'image'
        );
      }
    }
  });

  document.querySelector('.next').addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
      if (lightboxImg == media.length - 1) {
        if (media[0].video != undefined) {
          setlightbox(
            media[0].title,
            `/assets/sample_photos/${photographer[0].name}/${media[0].video}`,
            0,
            'video'
          );
        } else {
          setlightbox(
            media[0].title,
            `/assets/sample_photos/${photographer[0].name}/${media[0].image}`,
            0,
            'image'
          );
        }
      } else {
        if (media[lightboxImg + 1].video != undefined) {
          setlightbox(
            media[lightboxImg + 1].title,
            `/assets/sample_photos/${photographer[0].name}/${
              media[lightboxImg + 1].video
            }`,
            lightboxImg + 1,
            'video'
          );
        } else {
          setlightbox(
            media[lightboxImg + 1].title,
            `/assets/sample_photos/${photographer[0].name}/${
              media[lightboxImg + 1].image
            }`,
            lightboxImg + 1,
            'image'
          );
        }
      }
    }
  });

  document
    .querySelector('.close-lightbox')
    .addEventListener('keyup', function (event) {
      if (event.key == 'Enter') {
        closeLightbox();
      }
    });
  closeLightbox();

  // ajouter un evenment qui incrémente le like
  const spans = document.querySelectorAll('.like');
  let clicks = 0;
  spans.forEach(function (span) {
    span.addEventListener('click', function () {
      clicks += 1;
      span.innerHTML = `${
        parseInt(span.textContent) + 1
      } <img src="assets/icons/Vector-like.png" class="iconLike">`;
      document.getElementById('likeCounter').textContent =
        parseInt(document.getElementById('likeCounter').textContent) + 1;
    });
  });

  document
    .getElementById('submit_button')
    .addEventListener('click', function (e) {
      e.preventDefault();
      closeModal();
    });
}

function displayPage(photographer, medias) {
  const getPageDom = pageFactory({ photographer, medias });
  getPageDom();
  const photos = document.querySelectorAll('.photos');
  const videos = document.querySelectorAll('video');
  photos.forEach((photo) => {
    photo.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        setlightbox(
          photo.getAttribute('alt'),
          photo.getAttribute('src'),
          0,
          'image'
        );
        displayLightbox();
      }
    });
  });
  videos.forEach((video) => {
    console.log(video.children[0].src);
    video.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        setlightbox(
          video.children[0].getAttribute('aria-title'),
          video.children[0].src,
          0,
          'video'
        );
        displayLightbox();
      }
    });
  });
}

init();

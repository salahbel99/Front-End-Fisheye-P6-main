function pageFactory(data) {
  //destructuration photographer (extraire les données du tableau photogarpher et media separement)
  const { photographer, medias } = data;
  // utilisation du DOM pour la création des classes.
  function getPageDom() {
    const name = document.createElement('h2');
    const location = document.createElement('p');
    const tagline = document.createElement('span');
    const src = document.createElement('img');
    name.textContent = photographer.name;
    location.textContent = photographer.city + ' ' + photographer.country;
    tagline.textContent = photographer.tagline;
    src.src = 'assets/photographers/' + photographer.portrait;
    document.getElementById('contact').textContent = photographer.name;
    const photographerData = document.getElementById('photographer-data');
    photographerData.innerHTML = '';
    photographerData.appendChild(name);
    photographerData.appendChild(location);
    photographerData.appendChild(tagline);
    document.querySelector('.photographer_image').innerHTML = '';
    document.querySelector('.photographer_image').appendChild(src);
    document.getElementById(
      'price'
    ).textContent = `${photographer.price}€/jour`;
    document.getElementById('likeCounter').textContent = medias.reduce(
      function (previous, current) {
        return previous + current.likes;
      },
      0
    );

    //restructuration
    let photographerMedia = document.getElementById('photographer-medias');
    photographerMedia.innerHTML = '';
    medias.forEach((media, index) => {
      const div = document.createElement('div');
      if (media.video != undefined) {
        const video = document.createElement('video');
        video.setAttribute('controls', true);
        video.setAttribute('tabindex', '0');
        const source = document.createElement('source');
        source.src = `assets/sample_photos/${photographer.name}/${media.video}`;
        source.setAttribute('type', 'video/mp4');
        source.setAttribute('aria-title', media.title);
        video.appendChild(source);
        div.appendChild(video);
        video.addEventListener('click', function () {
          displayLightbox();
          setlightbox(
            media.title,
            `assets/sample_photos/${photographer.name}/${media.video}`,
            index,
            'video'
          );
        });
      } else {
        const img = document.createElement('img');
        img.setAttribute('tabindex', '0');
        img.setAttribute('alt', media.title);
        img.className = 'photos';
        img.src = `assets/sample_photos/${photographer.name}/${media.image}`;
        div.appendChild(img);
        img.addEventListener('click', function () {
          displayLightbox();
          setlightbox(
            media.title,
            `assets/sample_photos/${photographer.name}/${media.image}`,
            index,
            'image'
          );
        });
      }
      const title = document.createElement('p');
      const lineLike = document.createElement('span');
      const icon = document.createElement('img');
      icon.setAttribute('src', 'assets/icons/Vector-like.png');
      lineLike.innerHTML = `${media.likes}`;
      title.textContent = media.title;
      lineLike.className = 'like';
      icon.className = 'iconLike';
      div.appendChild(title);
      div.appendChild(lineLike);
      photographerMedia.appendChild(div);
      lineLike.appendChild(icon);
    });
  }
  return getPageDom;
}

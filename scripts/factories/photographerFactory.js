function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;
    //manipulation du dom create element
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.addEventListener("keyup", function(e){
            if (e.key=="Enter"){
            window.location.href = "photographer.html?id="+id;
    }
 })
        article.setAttribute("tabindex", "0");
        const img = document.createElement( 'img');
        img.setAttribute("tabindex", "0");
        img.setAttribute("alt", name);
        img.setAttribute("src", picture)
        img.addEventListener("click", function () {
        window.location.href = "photographer.html?id="+id;
  });

        const h2 = document.createElement( 'h2' );
        h2.setAttribute("tabindex", "0");
        h2.textContent = name;
        const location = document.createElement( 'location' );
        location.setAttribute("tabindex", "0");
        location.textContent = `${city}, ${country}`;
        const p2 = document.createElement( 'p' );
        p2.setAttribute("tabindex", "0");
        p2.textContent = tagline;
        const p3 = document.createElement( 'p' );
        p3.setAttribute("tabindex", "0");
        p3.textContent = price + ' € / jour';

        
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(p2);
        article.appendChild(p3);

        return (article);
        
    }
    return { name, picture, getUserCardDOM }
}
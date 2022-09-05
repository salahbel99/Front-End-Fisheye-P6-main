     //j'étulise la fonction asynchrone pour exécuter de façon asynchrone.
    async function getphotographers() {
        //L'opérateur await permet d'attendre la résolution d'une promesse (Promise)
        //j'utilise ici la methode fetch() pour récupérer — et retourne une promesse.
        const result = await fetch ("/data/photographers.json")
        const data = await result.json()
        return data.photographers
    }
    // pour definir l'afficahge et la disposition des element fils
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
    //la fonction de callback a pour paramettre photographer 
        photographers.forEach((photographer) => {
            //la fonction factory créer la carte du photographe
            const photographerModel = photographerFactory(photographer);
            //c'est la fonction getUserCardDOM qui permet d'affiché le contenu
            const userCardDOM = photographerModel.getUserCardDOM();
            //sert a ajouter
            photographersSection.appendChild(userCardDOM);
        });
    };
    // 
    async function init() {
        // Récupère les datas des photographes
        const  photographers = await getphotographers();
        displayData(photographers);
    };
    
    init();

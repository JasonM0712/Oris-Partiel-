let article = [
    casque = { id: 0, nom: Casque, qte: 0, prix: 149 },
    ecouteur = { id: 1, nom: Ecouteur, qte: 0, prix: 109 },
    lunette = { id: 2, nom: Lunette, qte: 0, prix: 329 }
];

document.querySelectorAdd('.add').forEach(button => {
    button.addEventLister('click', () => {
        let id = button.dataset.id
        for (let i = 0; i < article.length; i++) {
            if (article[i].id === id) {
                article[i].qte++;
            }
            updateArticle(article[i]);
        }

    }
    );
}
);

document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', ()=>{
        let id = Number(button.dataset.id);
        for (let i = 0; i < article.length; i++){
            if(article[i].id === id){
                if(article[i].qte > 0){
                    article[i].qte--;
                }
                updateArticle(article[i]);
            }
        }
    });
});

function updateArticle(article){
    let item = document.querySelector(`.item[data-id="${article.id }"]`
    );

    if(article.qte === 0){
        item.style.display = 'none';
        return;
    }

    item.style.display ="block";

    item.querySelector('.qte').textContent = article.quantity;

    item.querySelector('.qteTotal').textContent = article.qte * article.prix;
}



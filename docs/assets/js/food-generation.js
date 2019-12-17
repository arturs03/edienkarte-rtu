var recepies =
    [
        {
            "recepieTitle": "Omlete ar tostermaizi un sulu",
            "recepieDescription": "3 olas, piens 100ml, 2 tostermaizes + sviests, sula pēc jūsu izvēles",
            "recepieBenefits": {
                "gains": 90,
                "vitamins": 0,
                "fats": 10
            },
            "recepieImage": "https://cdn.santa.lv/media/2019/01/0/large/774f613b276e.jpg",
            "isVegan": false,
        },
        {
            "recepieTitle": "Saldskābā vistas fileja ar rīsiem",
            "recepieDescription": "200 g vistas filejas, 2 ēd. k. sojas mērces, 1 ēd. k. kartupeļu cietes, saldskābā mērce, pēc izvēles 1 paciņa rīsu",
            "recepieBenefits": {
                "gains": 70,
                "vitamins": 20,
                "fats": 10
            },
            "recepieImage": "https://www.medicalnewstoday.com/content/images/articles/324/324956/close-up-of-a-plate-of-food.jpg",
            "isVegan": true,
        },
        {
            "recepieTitle": "Vistas karbonāde ar griķiem un zaļumiem",
            "recepieDescription": "200 g vistas filejas, 1 olas, 2 ēd. k. miltu, krējums, pēc izvēles 1 paciņa griķu, salātlapas ar tomātiem un gurķiem",
            "recepieBenefits": {
                "gains": 70,
                "vitamins": 0,
                "fats": 30
            },
            "recepieImage": "http://media.gardedis.lv/cache/eb/f6/ebf6b337d75256431b4f76d4061177d4.jpg",
            "isVegan": true,
        },
        {
            "recepieTitle": "Biezpiena plācenīši",
            "recepieDescription": "biezpiens 500g, 2 olas, kviešu milti, 6 ēd.k. miltu, 2 ēd.k. cukura,5 ēd.k. saulespuķu eļļas",
            "recepieBenefits": {
                "gains": 85,
                "vitamins": 5,
                "fats": 10
            },
            "recepieImage": "http://www.brown-sugar.lv/images/products/kulinarija/pankukas/biezpiena-placenisi-ar-ievarijumu-un-krejumu-2-gab/th/700x700_6/biezpienaplacenisi1.jpg",
            "isVegan": false,
        },
        {
            "recepieTitle": "Franču siera zupa ar vistu",
            "recepieDescription": "vistas fileja 500g, kausētais siers 200g, kartupeļi 400g, sīpoli 150g, burkāni 180g, sviests pēc garšas, sāls pēc garšas, maltie pipari pēc garšas, zaļumi pēc garšas, lauru lapa 3gab, sausiņi 100g",
            "recepieBenefits": {
                "gains": 70,
                "vitamins": 0,
                "fats": 30
            },
            "recepieImage": "http://media.gardedis.lv/cache/b0/ab/b0ab7eacb24001015dc120a180e2f342.jpg",
            "isVegan": false,
        },
        {
            "recepieTitle": "Klasiskie grieķu salāti",
            "recepieDescription": "3 ēd.k. olīveļļa, 1,5 ēd.k. citronu sula, ķiploki 1 daiviņa, 1/2 tēj.k. sausie oregano, 1/4 tēj.k. jūras sāls, 1/4 tēj.k. maltie pipari, tomāti 3gab, sarkanie sīpoli 1gab, gurķi 2gab, paprika 2gab, siers feta 120g ,olīvas 150g",
            "recepieBenefits": {
                "gains": 90,
                "vitamins": 0,
                "fats": 10
            },
            "recepieImage": "http://www.dzivei.lv/wp-content/uploads/2018/06/grieku_salati.jpg",
            "isVegan": true,
        }
    ];


function generateRecepie() {
    let dati = [];

    console.log($('#generator-params'));

    for (let i = 0; i < 4; i++) {
        let formValue = $('#generator-params')[0][i].value;

        if (formValue === "") {
            $('.form-error').html('Lūdzu aizpildiet visus laukus');
            return;
        }
        dati[i] = $('#generator-params')[0][i].value;
    }

    $('#generatorModal').modal('hide');

    var recepieNode = '';


    for(var x = 0; x < recepies.length; x++){
        console.log(recepies[x].recepieBenefits);
    }

    for (let i = 0; i < recepies.length; i++) {
        let id = recepies[i].recepieTitle.replace(/[^a-zA-Z ]/g, "").replace(/ /g,"-");
        recepieNode += `
            <section class="section py-3">
                <div class="container">
                    <div class="card bg-gradient-white shadow-lg border-0">
                        <div class="p-5">
                            <div class="row align-items-center">
                                <div class="col-12 col-md-8">
                                    <h3 class="m-0">${recepies[i].recepieTitle}</h3>
                                    <a class="btn btn-primary btn-sm mt-4" data-toggle="collapse" href="#${id}" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        Sastāv daļas  <i class="fa fa-plus"></i>
                                    </a>
                                    <div class="collapse" id="${id}">
                                        <ol class="lead">
                                            <li>
                                               ${recepies[i].recepieDescription.replace(/\, /g,"</li><li>")} 
                                            </li>
                                        </ol>
                                    </div>
                                    <div class="my-4 my-md-0 mt-md-4">
                                        <div class="progress-wrapper pt-1">
                                            <div class="progress" style="height: 20px;">
                                                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ${recepies[i].recepieBenefits.gains}%;">Masai uzņemšanai</div>
                                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ${recepies[i].recepieBenefits.vitamins}%;">Vitamīni</div>
                                                <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ${recepies[i].recepieBenefits.fats}%;">Tauki u.c.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <div class="card bg-default shadow border-0">
                                        <img src="${recepies[i].recepieImage}" rel="noopener nofollower" class="card-img-top" alt="image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    $('#generatorModal').on('hidden.bs.modal', function (e) {
        $('#recepies').html(recepieNode);
        $(window).scrollTop($('#recepies').offset().top);
    });


    // localStorage.setItem("dati", dati);
}

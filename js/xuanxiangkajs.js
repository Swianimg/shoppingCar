window.onload = function () {
    let ohotClassification = document.getElementById('hotClassification');

    function creat() {
        let order = '';
        ajax({
            type: 'post',
            url: '../server/algliebiao.php',
            data: {
                order: order
            },
            success: str => {
                let arr = JSON.parse(str);
            

                let html = arr.data.map(function (item, index) {

                    return `<div class="categoryBoxItem">
                                <p class="categoryBoxItemTitle">
                                    <a href="../liebiao/liebiao.html?index=${index}">${item.title1}</a> </p>
                                <p>
                                    <a href="###">${item.title12}></a>
                                    <a href="###">${item.title13}></a>
                                    <a href="###">${item.title14} <br>></a>
                                </p>
                                <div class="fr">
                                    <img src="${item.imgs}" alt="">
                                </div>
                            </div>`

                }).join('');
                ohotClassification.innerHTML = html;
            
            }
        });
    }
    creat();
 function creats() {
         let ohotHands = document.getElementById('hotHands');
     
         let orders = '';
         ajax({
             type: 'post',
             url: '../server/algliebiaoimg.php',
             data: {
                 orders: orders,
             },
             success: str => {
                 let arrs = JSON.parse(str);
                 let html = arrs.data.map((items) => {
                     return `<a href="###">
                                <img src="${items.imgs}" alt="">
                            </a>`;

                 }).join('');
                 ohotHands.innerHTML = html;
             }
         });

     }
     creats();

}
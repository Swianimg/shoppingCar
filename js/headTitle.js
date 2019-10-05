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
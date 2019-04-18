var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannersSlogan = ["Promoção: Big City Night", "Promoção: Sunny Days"]
var Atual = 0;

function trocaBanner()
{
    Atual = (Atual + 1) % 2;
    banner = document.querySelector(".banner-destaque img");
    banner.src = banners[Atual];
    banner.alt = bannersSlogan[Atual];
}

setInterval(trocaBanner, 4000);
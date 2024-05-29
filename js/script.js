const chName = document.querySelector(".name-container");
const chAvator = document.querySelector(".character-avators");
const avators = Array.from(chAvator.children);
const infoContainer = document.querySelector(".character-info");
const infos = Array.from(infoContainer.children);
const characterSwiper = document.querySelector('.character-swiper-wrapper');
const characterPics = Array.from(characterSwiper.children);
const characters = {
    names: {
        laios: {
            name: "莱欧斯"
        },
        marcille: {
            name: "玛露西尔"
        },
        chilchuck: {
            name: "齐尔查克"
        },
        senshi: {
            name: "森西"
        },
        izutsumi: {
            name: "菀苞"
        }
    }
}

// 更新名字
function chageInfo(swiper) {
    // swiper.realIndex 当前轮播图真下标
    let currentName = Object.values(characters.names)[swiper.realIndex];
    chName.textContent = currentName.name;
    // 遍历头像，更新活跃头像class，下同
    avators.forEach(item => {
        if (item.classList.contains('active')) item.classList.remove('active');
    })
    avators[swiper.realIndex].classList.add('active');
    infos.forEach(item => item.className = "info-container")
    infos[swiper.realIndex].className = "info-container active";
    characterPics.forEach(item => item.className = "character-swiper-slide swiper-slide");
    characterPics[swiper.realIndex].className = "character-swiper-slide swiper-slide active";
}

// 初始化swiper
var swiper2 = new Swiper(".character-swiper", {
    // autoplay: true,
    // pagination: {
    //     el: '.swiper-pagination',
    // },
    on: {
        slideChangeTransitionEnd: function () {
            // alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            // let currentName = Object.values(characters.names)[this.realIndex];
            // chName.textContent = currentName.name;
            chageInfo(swiper2);
        },
    },
    effect: 'fade',
    // rewind: true,
    // loop: true,
});

async function switchSwiper(swiper, i) {
    // console.log(swiper.realIndex);
    await swiper.slideTo(i, 500, false);//切换到第一个slide，速度为1秒
}

chAvator.addEventListener('click', (e) => {
    let el = e.target.parentElement;
    if (el.classList.contains('avator-laios')) {
        switchSwiper(swiper2, 0);
        chageInfo(swiper2);
    }
    else if (el.classList.contains('avator-marcille')) {
        switchSwiper(swiper2, 1);
        chageInfo(swiper2);
    }
    else if (el.classList.contains('avator-chilchuck')) {
        switchSwiper(swiper2, 2);
        chageInfo(swiper2);
    }
    else if (el.classList.contains('avator-senshi')) {
        switchSwiper(swiper2, 3);
        chageInfo(swiper2);
    }
    else {
        switchSwiper(swiper2, 4);
        chageInfo(swiper2);
    }
})

// 食谱部分
const recipes = document.querySelector(".recipe-list");

function displayRecipe(e) {
    const recipe = e.target.closest('.recipe-container');
    console.log(recipe);
    const img = recipe.children[0];
    const details = recipe.children[1];
    if (img.style.display == "block") {
        img.style.display = "none";
        details.style.display = "block";
    }
    else {
        img.style.display = "block";
        details.style.display = "none";
    }
}

recipes.addEventListener("click", (e) => displayRecipe(e));
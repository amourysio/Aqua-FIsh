// Varriable for cleaning meaning on code
const fish = Array()
const rotY = "rotateZ(360deg)"
const rotZ = "rotateY(180deg)"

const setRandom = (min, max) => Math.floor(Math.random() * max) + min;

const swim = (fish) => { // multi level function
    let speed = setRandom(1000, 1000);
    let top = setRandom(0, $(document).height() - 150);
    let left = setRandom(0, $(document).width() - 150);
    motion(fish, top, left, speed);
}

const motion = (fish, top, left, speed) => {
    $(`#${fish}`).css({transform: rotZ // left side rotating
    });
    if (parseInt($(`#${fish}`).css("left")) < left) {
        $(`#${fish}`).css({transform:rotY // rotating side from left to right
        });
    }
    $(`#${fish}`).animate({
        left,
        top
    }, speed, () => {
        swim(fish);
    });
}
$(window).ready(() => {
    window.onresize = swim;
    for (i = 0; i < setRandom(4, 7); i++) {
        fish[i] = `<img id='fish${i}' src="images/fish1.png">` // Append in fish Array
        $("body").append(fish[i]); // Append in html index page
        swim(`fish${i}`); // using appended fish element to function
        $(window).click((ev) => {
            $("img").each(function() { // for each fish img in html
                $(this).stop();
                setTimeout(motion($(this).attr("id"), ev.pageY, ev.pageX, setRandom(500, 500)));
            });
        });
    }
});
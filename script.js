// document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById('go-button').addEventListener('click', function(e) {
        //video.play();
        console.log('click');
        let videos = document.querySelectorAll(`a-video`);
        videos.forEach(function(v){
            v.play();
        });
    });

    let groups = ['group1', 'group2', 'group4']

    groups.forEach(function(g) {

        let groupId = '#' + g;
        let thumb = document.querySelector(`${groupId} a-image`);
        let video = document.querySelector(`${groupId} a-video`);

        if (thumb) {

            thumb.addEventListener('click', function(e) {
                video.setAttribute('visible', 'true');
                video.emit('show');
                video.play();
            });

            thumb.addEventListener('mouseleave', function(e) {
                video.emit('hide');
                video.setAttribute('visible', 'false');
                video.pause();
            });
        }
    });

// });

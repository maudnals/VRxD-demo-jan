let groups = ['group1', 'group2', 'group4']

groups.forEach(function(g) {

    let groupId = '#' + g;
    let thumb = document.querySelector(`${groupId} a-image`);
    let video = document.querySelector(`${groupId} a-video`);

    if (thumb) {

        thumb.addEventListener('click', function(event) {
            video.setAttribute('visible', 'true');
            video.emit('show');
            video.play();
        });

        thumb.addEventListener('mouseleave', function(event) {
            video.emit('hide');
            video.setAttribute('visible', 'false');
            video.pause();
        });
    }

});


var ParentViewerId = null,
    EditorContent = null;

function setParentViewerId(id) {
    ParentViewerId = id;
}

function saveClick() {
    parent.$('#' + ParentViewerId).parents('.editor-iframe-box').find('.btn-save').click();
}

function valueEditor(source) {
    if (source) {
        var sourceToUrls = function (source) {
            let urls = [];

            if (source.base64) {
                urls.push(source.base64);
            }
            if (source.path) {
                urls.push(API_UPLOAD_URL + source.path.replace(/^\//, ''));
                urls.push(ROOT_URL + source.path.replace(/^\//, ''));
            }
            if (source.url) {
                if (source.url.match(/http(s)?\:\/\//) || source.url.match(/data:[^;]+;base64,/)) {
                    urls.push(source.url);
                }
                else {
                    urls.push(API_UPLOAD_URL + source.url.replace(/^\//, ''));
                    urls.push(ROOT_URL + source.url.replace(/^\//, ''));
                }
            }
            return urls;
        };

        let urls = sourceToUrls(source);
        if (urls.length > 0) {
            let img = new Image();
            img.onload = function () {
                $('#imageBox img').attr({
                    src: img.src || null,
                    path: source.path || null
                });
                if (typeof window.cropperReInit == "function") {
                    window.cropperReInit();
                }
            };
            img.onerror = function () {
                if (urls.length > 0) {
                    img.src = urls.shift();
                }
            };
            img.src = urls.shift();
        }
    }
    else if ($('#imageBox img').attr('ondrop') || $('#imageBox img').attr('oncrop') == 'true') {

        var data = {
            url: $('#imageBox img').attr('src'),
            path: $('#imageBox img').attr('path')
        };

        if (typeof window.cropperIsCropped == "function" && window.cropperIsCropped() && typeof window.cropperApply == "function") {
            window.cropperApply();

            data = {
                url: $('#imageBox img').attr('src'),
                path: $('#imageBox img').attr('path')
            };
        }

        if (data.url.match(/data:[^;]+;base64,/)) {
            //
            try {
                var file = new File([data.url], (Math.random() * 999999999).toFixed() + '.txt', { type: 'text/plain', lastModified: new Date() }),
                    options = {
                        subFolder: 'material/cropper',
                        fileType: 'image',
                        base64: true,
                        async: false
                    },
                    callback = function (res) {
                        if (res && res.file && res.file.name) {
                            var FilePathName = `${res.path}/${res.file.name}`;

                            data.path = FilePathName;
                            data.url = res.root + FilePathName;
                        }
                    };

                $(document).uploadApi(file, $('<div/>'), callback, options);
            }
            catch (e) {
                console.error(e);
            }
        }

        return data;
    }
}

document.getElementById('img-cropper').addEventListener('load', function () {
    if (typeof window.cropperReInit == "function") {
        window.cropperReInit();
    }
});

window.addEventListener('load', function () {
    $('#imageBox img').css({
        'max-width': window.innerWidth,
        'max-height': window.innerHeight - 90
    });
});

window.addEventListener('resize', function () {
    $('#imageBox img').css({
        'max-width': window.innerWidth,
        'max-height': window.innerHeight - 90
    });
    if (typeof window.cropperReInit == "function") {
        window.cropperReInit();
    }
});
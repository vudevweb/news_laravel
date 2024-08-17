(function ($) {
    "use strict";
    var HT = {};

    HT.setupCkeditor = () => {
        if ($(".ck-editor")) {
            $(".ck-editor").each(function () {
                let editor = $(this);
                let elementId = editor.attr("id");
                let elementHeight = editor.attr("data-height");
                HT.ckeditor4(elementId, elementHeight);
            });
        }
    };

    HT.uploadAlbum = () => {
        $(document).on("click", ".upload-picture", function (e) {
            HT.browseServerAlbum();
            e.preventDefault();
        });
    };

    HT.multipleUploadImageCkeditor = () => {
        $(document).on("click", ".multipleUploadImageCkeditor", function (e) {
            let object = $(this);
            let target = object.attr("data-target");
            HT.browseServerCkeditor(object, "Images", target);
            e.preventDefault();
        });
    };

    HT.ckeditor4 = (elementId, elementHeight) => {
        if (typeof elementHeight == "undefined") {
            elementHeight = 500;
        }
        CKEDITOR.replace(elementId, {
            height: elementHeight,
            removeButtons: "",
            entities: true,
            allowedContent: true,
            toolbarGroups: [
                {
                    name: "editing",
                    groups: ["find", "selection", "spellchecker", "undo"],
                },
                { name: "links" },
                { name: "insert" },
                { name: "forms" },
                { name: "tools" },
                { name: "document", groups: ["mode", "document", "doctools"] },
                { name: "others" },
                {
                    name: "basicstyles",
                    groups: [
                        "basicstyles",
                        "cleanup",
                        "colors",
                        "styles",
                        "indent",
                    ],
                },
                {
                    name: "paragraph",
                    groups: ["list", "", "blocks", "align", "bidi"],
                },
            ],
            removeButtons:
                "Save,NewPage,Pdf,Preview,Print,Find,Replace,CreateDiv,SelectAll,Symbol,Block,Button,Language",
            removePlugins: "exportpdf",
        });
    };

    HT.uploadImageToInput = () => {
        $(".upload-image").click(function () {
            let input = $(this);
            let type = input.attr("data-type");
            HT.setupCkFinder2(input, type);
        });
    };

    HT.uploadImageAvatar = () => {
        $(".image-target").click(function () {
            let input = $(this);
            let type = "Images";
            HT.browseServerAvatar(input, type);
        });
    };

    HT.setupCkFinder2 = (object, type) => {
        if (typeof type == "undefined") {
            type = "Images";
        }
        var finder = new CKFinder();
        finder.resourceType = type;
        finder.selectActionFunction = function (fileUrl, data) {
            object.val(fileUrl);
            console.log(fileUrl);
            $(".value_post_thumbnail").val(fileUrl)
            $(".img_demo").attr("src", fileUrl);
        };
        finder.popup();
    };

    HT.browseServerAvatar = (object, type) => {
        if (typeof type == "undefined") {
            type = "Images";
        }
        var finder = new CKFinder();
        finder.resourceType = type;
        finder.selectActionFunction = function (fileUrl, data) {
            $(".img_demo").attr("src", fileUrl);
            object.find("img").attr("src", fileUrl);
            object.siblings("input").val(fileUrl);
        };
        finder.popup();
    };

    HT.browseServerCkeditor = (object, type, target) => {
        if (typeof type == "undefined") {
            type = "Images";
        }
        var finder = new CKFinder();

        finder.resourceType = type;
        finder.selectActionFunction = function (fileUrl, data, allFiles) {
            let html = "";
            for (var i = 0; i < allFiles.length; i++) {
                var image = allFiles[i].url;
                html += '<div class="image-content"><figure>';
                html += '<img src="' + image + '" alt="' + image + '">';
                html += "<figcaption>Nhập vào mô tả cho ảnh</figcaption>";
                html += "</figure></div>";
            }
            CKEDITOR.instances[target].insertHtml(html);
        };
        finder.popup();
    };

    HT.browseServerAlbum = () => {
        var type = "Images";
        var finder = new CKFinder();

        finder.resourceType = type;
        finder.selectActionFunction = function (fileUrl, data, allFiles) {
            let html = "";
            for (var i = 0; i < allFiles.length; i++) {
                var image = allFiles[i].url;
                html = `
                    <div class="col-xxl-3 col-xl-6 col-lg-12 mb-2 img-album-vip">
                        <div class="card mb-4 mb-xl-0 card-hover border">
                                <img src="${image}" alt="${image}"
                                    class="img-fluid w-100 rounded-top-3">
                                    <input type="hidden" name="album[]" value="${image}">
                                <button type="button" class="delete-image btn btn-light-danger text-danger" style="border-top-left-radius:0; border-top-right-radius:0"><i class="fe fe-trash"></i></button>
                        </div>
                    </div>
                `;
            }

            $(".click-to-upload").addClass("hidden");
            $("#sortable").append(html);
            $(".upload-list").removeClass("hidden");
        };
        finder.popup();
    };

    HT.deletePicture = () => {
        $(document).on("click", ".delete-image", function () {
            let _this = $(this);
            _this.parents(".img-album-vip").remove();
            // if ($(".img-album-vip").length == 0) {
            //     $(".click-to-upload").removeClass("hidden");
            //     $(".upload-list").addClass("hidden");
            // }
        });
    };

    $(document).ready(function () {
        HT.uploadImageToInput();
        HT.setupCkeditor();
        HT.uploadImageAvatar();
        HT.multipleUploadImageCkeditor();
        HT.uploadAlbum();
        HT.deletePicture();
    });
})(jQuery);

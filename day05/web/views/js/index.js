$(function () {

    //页面加载完成之后发送请求，获取所有英雄
    getAllHero()





    $("#addBtn").on("click", function () {
        $('.ui.modal').modal("show");
    })

    $("#sure").on("click", function () {
        //获取表单数据
        let data = $("form").serialize()
        $.ajax({
            type: "post",
            data,
            url: "http://127.0.0.1:5001/addHero",
            dataType: "json",
            beforeSend() {
                if ($("#name").val().trim() == "") {
                    $(".message").html("请输入新英雄姓名").css("color", "red").show(500).delay(500).hide(500)
                    return false
                }
            },
            success(res) {
                if (res) {
                    $(".message").html("添加新英雄成功").css("color", "blue").show(500).delay(500).hide(500)
                    getAllHero()
                } else {
                    $(".message").html(res.msg).css("color", "red").show(500).delay(500).hide(500)
                }
                console.log(res);
            }
        })
    })

    $(".table").on("click", "#del", function (e) {
        // console.log(e.target);
        // console.log($(this).parents("tr"));
        let dataid = $(this).parents("tr").attr("data-id")
        // console.log(dataid);
        let url = `http://127.0.0.1:5001/delHero/${dataid}`
        console.log(url);

        $.ajax({
            url,
            type: "get",
            success(res) {
                if (res) {
                    getAllHero()
                }

            },

        })



    })





    //获取全部英雄
    function getAllHero() {
        $.ajax({
            url: "http://127.0.0.1:5001/getAllHero",
            type: "get",
            dataType: "json",
            success: function (res) {
                console.log(res.data);

                let html = template("heroTemp", res)
                // console.log(html);
                $("#hero-box").html(html)

            }

        })
    }
})
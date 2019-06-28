$(function () {
    //获取全部英雄
    let page = 1
    let pagesize = 7
    let maxPage = 0
    //页面加载完成之后发送请求，获取所有英雄
    getAllHero()

    //点击添加英雄初始化模态框
    $("#addBtn").on("click", function () {
        $('.ui.modal.addHero').modal("show");
    })
    //点击确认按钮提交表单数据，发送ajax请求，后台操作数据
    $("#addSure").on("click", function () {
        //获取表单数据
        let data = $("form.addHero").serialize()
        $.ajax({
            type: "post",
            data,
            url: "http://127.0.0.1:5001/addHero",
            dataType: "json",
            beforeSend() {
                if ($("#addName").val().trim() == "") {
                    $(".message").html("请输入新英雄姓名").css("color", "red").show(500).delay(500).hide(500)
                    return false
                }
            },
            success(res) {
                if (res) {
                    console.log(res);

                    $(".message").html(res.msg).css("color", "blue").show(500).delay(500).hide(500)
                    getAllHero()
                } else {
                    $(".message").html(res.msg).css("color", "red").show(500).delay(500).hide(500)
                }
                console.log(res);
            }
        })
    })

    //点击删除按钮改变
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

    //点击启用按钮改变
    $(".table").on("click", "#up", function (e) {
        // console.log(e.target);
        // console.log($(this).parents("tr"));
        let dataid = $(this).parents("tr").attr("data-id")
        // console.log(dataid);
        let url = `http://127.0.0.1:5001/upHero/${dataid}`
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

    //点击编辑按钮初始化模态框   事件委托
    $(".table").on("click", "#edit", function () {

        $('.ui.modal.editHero').modal("show");

        let dataid = $(this).parents("tr").attr("data-id")
        let url = `http://127.0.0.1:5001/getHero/${dataid}`
        $("form.editHero").attr("data-id", dataid)

        //获取当前英雄的数据
        $.ajax({
            url,
            type: "get",
            dataType: "json",
            success(res) {
                if (res) {
                    console.log(res);
                    $("#editName").val(res.data[0].name)
                    $("#editGender").val(res.data[0].gender)
                    $("#editIsdel").val(res.data[0].isdel)
                }
            }
        })

    })

    //点击确认按钮提交表单数据，发送ajax请求，后台操作数据
    $("#editSure").on("click", function () {
        //获取表单数据
        let data = $("form.editHero").serialize()
        let dataid = $("form.editHero").attr("data-id")
        let url = `http://127.0.0.1:5001/updateHero/${dataid}`
        $.ajax({
            type: "post",
            data,
            url,
            dataType: "json",
            beforeSend() {
                if ($("#editName").val().trim() == "") {
                    $(".message").html("请输入新英雄姓名").css("color", "red").show(500).delay(500).hide(500)
                    return false
                }
            },
            success(res) {
                if (res) {
                    $(".message").html(res.msg).css("color", "blue").show(500).delay(500).hide(500)
                    getAllHero()
                } else {
                    $(".message").html(res.msg).css("color", "red").show(500).delay(500).hide(500)
                }
                console.log(res);
            }
        })
    })

    //点击下一页
    $("#pageBox").on("click", "#next", () => {
        // console.log("next");
        page++


        if (page <= maxPage) {
            getAllHero()
        } else {
            page = maxPage
            return
        }
        console.log(page);


    })
    //点击上一页
    $("#pageBox").on("click", "#prev", () => {
        // console.log("next");
        page--
        if (page >= 1) {
            getAllHero()
        } else {
            page = 1
            return
        }

    })

    //点击分页器上的按钮进行跳转
    $("#pageBox").on("click", "a[class='item']", function (e) {
        console.log($(this).html());
        page = $(this).html()
        getAllHero()




    })
    console.log(page);

    function getAllHero() {

        $.ajax({
            url: "http://127.0.0.1:5001/getAllHero",
            type: "get",
            dataType: "json",
            data: {
                page,
                pagesize,
            },
            success: function (res) {
                console.log(res.data);
                console.log(res.dataLength);
                //最大分页数
                maxPage = Math.ceil(res.dataLength / pagesize)
                let pageStr = "<a class='icon item' id='prev'><i class='left chevron icon'></i></a>"
                if (page < 3) {
                    for (let i = 1; i <= maxPage && i <= 3; i++) {
                        pageStr += `<a class = "item" >${i}</a>`
                    }
                    if (page == maxPage) {
                        pageStr += "<a class='icon item' id='next' data-tooltip = '最后一页了' ><i class='right chevron icon'></i></a>"
                    } else {
                        pageStr += "<a class='icon item' id='next' ><i class='right chevron icon'></i></a>"
                    }


                }
                if (page >= 3) {
                    if (page == maxPage) {
                        for (let i = page - 2; i <= page; i++) {
                            pageStr += `<a class = "item" >${i}</a>`
                        }
                        pageStr += "<a class='icon item' id='next' data-tooltip = '最后一页了' ><i class='right chevron icon'></i></a>"
                    } else {
                        for (let i = page - 1; i <= maxPage && i <= page + 1; i++) {
                            pageStr += `<a class = "item" >${i}</a>`
                        }
                        pageStr += "<a class='icon item' id='next' ><i class='right chevron icon'></i></a>"
                    }

                }


                // console.log(pageStr);
                $("#pageBox").html(pageStr)

                let html = template("heroTemp", res)
                // console.log(html);
                $("#hero-box").html(html)

            }

        })
    }
})
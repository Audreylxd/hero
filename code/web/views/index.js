// import { equal } from "assert";

// 发送ajax请求。获取数据动态渲染页面
$(function () {
    // 页面一加载生成页面
    $('#btnEdit').hide();
    getallhero();
    // 获取所有英雄信息，并渲染页面
    function getallhero() {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:5001/getallhero',
            success: (res) => {
                // console.log(res);
                if (res.status === 200) {
                    const html = template('template', res);
                    // console.log(html);
                    $('#herolist').html(html);
                }
            }
        })
    }

    // 为添加英雄按钮绑定点击事件，显示添加对话框
    $('#addhero').on('click', () => {
        $('.ui.modal')
        .modal('show');
        //清空表单内容
        $('#heroname').val("");
        $('.text').text("男");
        $('#heroGender').val("男");
    })

    // 初始化下拉框按钮
    $('.ui.dropdown').dropdown();

    // 点击添加按钮，获取表单元素，发送ajax请求，实现添加英雄
    $('#btnAdd').on('click', () => {
        let heroname = $('#heroname').val();
        let herogender = $('#heroGender').val();
        if(!heroname || heroname.trim() === " "){
            return;
        }
        if(!herogender || herogender.trim() === " "){
            return;
        }
        $.ajax({
            type:"POST",
            url:"http://127.0.0.1:5001/addhero",
            data:{'name':heroname,'gender':herogender},
            success: (res) => {
                console.log(res);
                if(res.status === 200){
                    getallhero();
                }
            }
        })
    })
    var editId = null;
    var deleteId = null;
    // 点击编辑按钮弹出编辑对话框
    $('#herolist').on('click','.btnEdit', function(){
        editId = $(this).attr('data-id');
        // 获取表单内容
        let heroName = $(this).parents('tr').children('td.heroName').text();
        let herogender = $(this).parents('tr').children('td.herogender').text();
        // console.log(herogender);
        // 赋值
        $('#heroname').val(heroName);
        $('.text').text(herogender);

        // 显示编辑对话框 
        $('.ui.modal').modal('show');
        $('#btnEdit').show();
        $('#btnAdd').hide();
    })
    // 点击添加按钮，发送ajax请求实现英雄更新
    $('#btnEdit').on('click', function(){
        // 获取表单元素,验证表单内容
        let heroname = $('#heroname').val();
        let herogender = $('#heroGender').val();
        if(!heroname || heroname.trim() === " "){
            return;
        }
        if(!herogender || herogender.trim() === " "){
            return;
        }
        $.ajax({
            type:"POST",
            url:"http://127.0.0.1:5001/updatahero/"+editId,
            data:{'name':heroname,'gender':herogender},
            success:function(res){
                if(res.status === 200){
                    getallhero();
                    $('#btnAdd').show();
                    $('#btnEdit').hide();
                }
            }
        })

    })

    // 点击删除按钮，发送ajax请求实现英雄数据软删除
    $('#herolist').on('click', '.btnDeleta',function(){
        // 获取删除id
        deleteId = $(this).attr('data-id')
        $.ajax({
            type:"GET",
            url:"http://127.0.0.1:5001/deletahero/" + deleteId,
            success:function(result){
                // console.log(result);
                getallhero();
            }
        })
    })
})
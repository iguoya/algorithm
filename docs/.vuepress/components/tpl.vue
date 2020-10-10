<template>
<div id="tpl">
    <br />
    <h3 v-text="message">是是是</h3>
    <h3 v-text="info">试试</h3>
    <input type="button" value="打算做什么？" v-on:click="doSth" />
    <p v-show="isShow">
        {{profession}}
    </p>

    <h3 @click="changeFood">{{food}}</h3>

    <h3 v-if="num>110">你点出了隐藏的我！！！！</h3>
    <input type="button" value="显影" @click="try_show" />

    <ul>
        <li v-for="(item, index) in books">
            {{index}} 书名：{{ item.name}} ---------- 售价：{{item.price}}
        </li>

    </ul>

    <input type="text" v-model="message" />

</div>
</template>

<script>
export default {
    name: 'tpl',
    data() {
        return {
            message: "Hello 雪虎 ！！！",
            info: "一些介绍",
            food: "西蓝花炒蛋",
            isShow: false,
            profession: "优秀的程序员！！！",
            num: 100,
            books: [{
                    name: "微积分",
                    price: 33
                },
                {
                    name: "线性代数",
                    price: 53
                },
                {
                    name: "抽象代数",
                    price: 323
                },
                {
                    name: "高等几何",
                    price: 133
                },
                {
                    name: "群论",
                    price: 233
                },
                {
                    name: "数论",
                    price: 383
                },

            ]

        };
    },
    methods: {
        doSth: function () {
            this.isShow = true
        },
        changeFood: function () {
            // console.log(this.food);
            this.food += "好好吃！！"
        },
        try_show: function () {
            this.num += 2
        }
    },
};
</script>

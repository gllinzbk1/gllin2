/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      color: {
        'brand': '#0066ee',  //品牌色，官网主色，可造作按钮，链接等
        'visited': '#660099',//官网文字链接点击后颜色
        'warning': '#e30000',//警示色，主要用于一些操作错误以及显示信息错误等
        'danger': '#bf4800', //警示色，主要用于一些谨慎操作、自动填写框等
        'success': '#008009',//提示色，主要用于操作成功
        'primary': {
           333: '#333', //官网文字的主色，用于大部分标题，内容信息，线框
           666: '#666', //首次出现于首页新闻卡片
           999: '#999' //用于导航跳转
        },   
        'tip': '#727272',    //标注性颜色，用于提示信息或者备注信息等
        'cutborder': '#d1d1d1', //用于表格线框，分割线等样式
        'background': '#f1f1f1', //用于网站背景色，表格背景色
      }
    },
  },
  plugins: [],
}


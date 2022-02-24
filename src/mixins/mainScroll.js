
// 处理滚动区域的mixins函数

export default function(scrollDom){
    return {
        mounted() {
            this.$bus.$on("setMainScroll", this.handleSetMainScroll);
            this.$refs[scrollDom].addEventListener("scroll", this.handleScroll);
          },
          methods: {
            handleScroll() {
                this.$bus.$emit("mainScroll", this.$refs[scrollDom]);
              },
              handleSetMainScroll(scrollTop) {
                this.$refs[scrollDom].scrollTop = scrollTop;
              },
          },
          beforeDestroy() {
            this.$bus.$emit("mainScroll", undefined); // 滚动的dom元素，如果是undefined，则表示dom元素已经不存在了
            this.$refs[scrollDom].removeEventListener("scroll", this.handleScroll);
            this.$bus.$off("setMainScroll", this.handleSetMainScroll);
          },
    }
}
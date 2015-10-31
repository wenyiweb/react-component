const ScrollMixin = {
    componentDidMount() {
        document.addEventListener('scroll', this.onScroll);
    },

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll);
    },

    windowScrollOffset(){
        let doc = document.documentElement;
        let left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
        let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        return {
            _left: left,
            _top: top,
        }
    },

}

export default ScrollMixin;
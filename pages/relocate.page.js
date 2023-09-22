class RelocatePage {
    get newsBtn() {return $('a[href="https://dou.ua/lenta/news/?from=fpnews"]')}
    get blogsBtn() {return $('a[href="https://relocate.dou.ua/blogs/?from=fpcol"]')}
    get popularOnForumBtn() {return $('a[href="https://dou.ua/forums/?from=fptopics"]')}
}

export default new RelocatePage
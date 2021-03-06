/**
 * Created by Administrator on 2017/11/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import AdminModule from './admin'
import UserModule from './user'
import BookModule from './book'
import SystemModule from './system'
import CensusModule from './census'

import service from '../api'
Vue.use(Vuex)

const state = {
//   userInfo: {},
  message: {},
  count: 0,
  hasNotice: false,
  bookAuthorization: null,
  date: '',
  
}

const mutations = {

  keep_bookAuthorization(state, num) {
    state.bookAuthorization = num
  },


}

const actions = {



 
  async getChapterSensitiveWords({}) {
    const res = await service.getChapterSensitiveWords().catch(err => console.error(err))
    console.log(res.data)
    if (res.returnCode === 200) return res.data
  },

  async book_EditBookEcho({}, data) {
    const res = await service.book_EditBookEcho(data).catch(err => console.error(err))
    if (res.returnCode === 200) return res.data
  },

  async book_showBookInfo({ commit }, data) {
    const res = await service.bookShowBookInfo(data).catch(err => console.error(err))
    if (res.returnCode === 200) {
      commit('keep_bookAuthorization', res.data.bookAuthorization)
      return res.data
    }
  },

  async getBookDataView({}, data) {
    const res = await service.getBookDataView(data).catch(err => console.error(err))
    if (res.returnCode === 200) return res.data
  },

  async sysBookUpdate({}, data) {
    const res = await service.sysBookUpdate(data).catch(err => console.error(err))
    if (res.returnCode === 200) return res.data
  },

  async getDataPosition({}) {
    const res = await service.getDataPosition().catch(err => console.error(err))
    if (res.returnCode === 200) return res.data
  },

  async generateMonthlyreport({}, data) {
    const res = await service.generateMonthlyreport(data).catch(err => console.error(err))
    if (res.returnCode === 200) return res.data
  },

    /**
     * 当日数据统计
     */
  async getControlPanel() {
    const res = await service.getControlPanel().catch(err => console.error(err))
    return res
  },

    /**
     * 获取访问日志
     */
  async getSiteaccessrecordsInfo() {
    const res = await service.getSiteaccessrecordsInfo().catch(err => console.error(err))
    return res
  },

   

    /**
     * 书籍导出
     */
  async chapterZipDownload({}, data) {
    const res = await service.chapterZipDownload(data).catch(err => console.error(err))
    return res
  },

    /**
     * 修改书籍信息
     */
  async sysbookupdate({}, data) {
    const res = await service.sysbookupdate(data).catch(err => console.error(err))
    return res
  },

    /**
     * 检查发布的章节是否满足两章
     */
  async getChapterCount({}, data) {
    const res = await service.getChapterCount(data).catch(err => console.error(err))
    return res
  },

    /**
     * 作者业绩审核
     */
  async getAuthorPerformanceReview({}, data) {
    const res = await service.getAuthorPerformanceReview(data).catch(err => console.error(err))
    return res
  },

    /**
     * 某个时间段的章节更新详细信息
     */
  async getChapterInfoByTime({}, data) {
    const res = await service.getChapterInfoByTime(data).catch(err => console.error(err))
    return res
  },

  

    
    

}





export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {
        admin: AdminModule,
        user: UserModule,
        book: BookModule,
        system: SystemModule,
        census: CensusModule
    }
})

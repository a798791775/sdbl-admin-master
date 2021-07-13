import {deletes, get, post, put} from './http'
import store from "@/store";


//Swagger文档：http://rmt.alpactech.com:8081/swagger/swagger-ui/


//--------认证模块--------------------------------------------------------

/**
 * 用户登录
 * @param data
 * @returns {Promise}
 */
export const login = (data) => post(`sdbl-auth/tokens/admins`, data)
    .then((res) => {
        store.commit("cleanSaToken")
        if (store.getters.getSaToken.tokenName === res.data.tokenName) {
            store.commit("setSaToken", res.data)
        }
        return res;
    })

/**
 * 用户注销登录
 * @returns {Promise}
 */
export const logout = () => get(`auth/logout/${store.getters.getSaToken.loginId}`)
    .then((res) => {
        store.commit("cleanSaToken")
        return res;
    })

/**
 * 用户注册
 * @param userVO
 * @returns {Promise}
 */
export const register = (userVO) => post(`auth/register`, userVO)


//--------作者模块--------------------------------------------------------
/**
 * 查询所有文献作者列表
 * @returns {Promise}
 */
export const literatureAuthor = () => get(`author/literature`)

/**
 * 查询指定文献作者列表
 * @param literatureId
 * @returns {Promise}
 */
export const listAuthorByLiterature = (literatureId) => get(`author/literature/${literatureId}`)

/**
 * 查询当前用户指定稿件作者列表
 * @param contributionId
 * @returns {Promise}
 */
export const listAuthorByIdCurrent = (contributionId) => get(`author/contribution/${contributionId}/current`)


//--------关键字模块--------------------------------------------------------
/**
 * 查询指定文献关键字列表
 * @param literatureId
 * @returns {Promise}
 */
export const listKeywordByLiterature = (literatureId) => get(`keyword/literature/${literatureId}`)


//--------国家模块--------------------------------------------------------
/**
 * 查询所有国家列表
 * @returns {Promise}
 */
export const listCountry = () => get(`country`)

/**
 * 查询指定国家
 * @param id
 * @returns {Promise}
 */

export const getCountryById = (id) => get(`country/${id}`)

/**
 * 查询指定用户国家
 * @param userId
 * @returns {Promise}
 */
export const getCountryByUser = (userId) => get(`country/user/${userId}`)


//--------学历模块--------------------------------------------------------
/**
 * 查询所有学历列表
 * @returns {Promise}
 */
export const listEducation = () => get(`education`)

/**
 * 查询指定学历
 * @param id
 * @returns {Promise}
 */
export const getEducation = (id) => get(`education/${id}`)

/**
 * 查询指定作者学历
 * @param authorId
 * @returns {Promise}
 */
export const getEducationByAuthor = (authorId) => get(`education/author/${authorId}`)


//--------文献模块--------------------------------------------------------
/**
 * 查询所有文献
 * @returns {Promise}
 */
export const listLiterature = () => get(`literature`)

/**
 * 投稿文献
 * @param literatureVO
 * @returns {Promise}
 */
export const postLiterature = (literatureVO) => post(`literature`, literatureVO)

/**
 * 审批通过指定文献
 * @param id
 * @returns {Promise}
 */
export const putLiteratureById = (id) => put(`literature/${id}`)

/**
 * 查询指定作者文献
 * @param authorId
 * @returns {Promise}
 */
export const listLiteratureByAuthorId = (authorId) => get(`literature/author/${authorId}`)

/**
 * 查询指定用户文献
 * @param userId
 * @returns {Promise}
 */
export const listLiteratureByUserId = (userId) => get(`literature/user/${userId}`)


//--------稿件模块--------------------------------------------------------

/**
 * 查询所有稿件
 * @returns {Promise}
 */
export const listContribution = () => get(`contribution`)

/**
 * 提交稿件
 * @param contributionVO
 * @returns {Promise}
 */
export const postContribution = (contributionVO) => post(`contribution`, contributionVO)

/**
 * 查询当前用户稿件
 * @returns {Promise}
 */
export const  getUserContribution = () => get(`contribution/current`)

/**
 * 查询指定稿件
 *  * @param id
 * @returns {Promise}
 */
export const getContributionById = (id) => get(`contribution/${id}`)


/**
 * 查询指定阶段待审稿件
 * @param stageId
 * @returns {Promise}
 */
export const getContributionByStageId = (stageId) => get(`contribution/stage/${stageId}/pass`)

//--------期刊模块--------------------------------------------------------
/**
 * 查询所有期刊
 * @returns {Promise}
 */
export const listJournal = () => get(`journal`)

/**
 * 新建期刊
 * @returns {Promise}
 */
export const postJournal = () => post(`journal`)

/**
 * 查询指定期刊
 * @param id
 * @returns {Promise}
 */
export const getJournalById = (id) => get(`journal/${id}`)


//--------用户模块--------------------------------------------------------
/**
 * 查询所有用户信息列表
 * @returns {Promise}
 */
export const listUser = () => get(`user`)

/**
 * 查询指定用户信息
 * @param id
 * @returns {Promise}
 */
export const getUserById = (id) => get(`user/${id}`)

/**
 * 修改指定用户信息
 * @param id
 * @param userVO
 * @returns {Promise}
 */
export const putUserById = (id, userVO) => put(`user/${id}`, userVO)

/**
 * 删除指定用户
 * @param id
 * @returns {Promise}
 */
export const deleteUserById = (id) => deletes(`user/${id}`)

/**
 * 修改指定用户权限
 * @param id
 * @param roleId
 * @returns {Promise}
 */
export const putUserRoleById = (id, roleId) => put(`user/${id}/role/${roleId}`)

/**
 * 查询指定国家用户信息列表
 * @param countryId
 * @returns {Promise}
 */
export const listUserByCountryId = (countryId) => get(`user/country/${countryId}`)

/**
 * 查询当前用户信息
 * @returns {Promise}
 */
export const getUserCurrent = () => get(`user/current`)

/**
 * 修改当前用户信息
 * @param userVO
 * @returns {Promise}
 */
export const putUserCurrent = (userVO) => put(`user/current`, userVO)

/**
 * 查询指定文献用户信息
 * @param literatureId
 * @returns {Promise}
 */
export const getUserByLiteratureId = (literatureId) => get(`user/literature/${literatureId}`)

/**
 * 查询指定权限用户信息
 * @param roleId
 * @returns {Promise}
 */
export const listUserByRoleId = (roleId) => get(`user/roles/${roleId}`)

/**
 * 查询指定审核阶段用户信息
 * @param stageId
 * @returns {Promise}
 */
export const listUserByStageId = (stageId) => get(`user/stage/${stageId}`)


//--------研究领域模块--------------------------------------------------------
/**
 * 查询所有研究领域列表
 * @returns {Promise}
 */
export const listField = () => get(`field`)

/**
 * 查询指定研究领域
 * @param id
 * @returns {Promise}
 */
export const getFieldById = (id) => get(`field/${id}`)

/**
 * 查询指定文献研究领域
 * @param literatureId
 * @returns {Promise}
 */
export const getFieldByLiteratureId = (literatureId) => get(`field/literature/${literatureId}`)


//--------阶段模块--------------------------------------------------------
/**
 * 查询所有阶段列表
 * @returns {Promise}
 */
export const listStage = () => get(`stage`)

/**
 * 查询指定阶段
 * @param id
 * @returns {Promise}
 */
export const getStageById = (id) => get(`stage/${id}`)

/**
 * 查询指定文献审核阶段记录列表
 * @param literatureId
 * @returns {Promise}
 */
export const listStageByLiteratureId = (literatureId) => get(`stage/literature/${literatureId}`)

/**
 * 查询指定文献当前审核阶段
 * @param literatureId
 * @returns {Promise}
 */
export const getStageCurrentByLiteratureId = (literatureId) => get(`stage/literature/${literatureId}/current`)

//--------身份模块--------------------------------------------------------
/**
 * 查询所有权限列表
 * @returns {Promise}
 */
export const listRole = () => get(`role`)


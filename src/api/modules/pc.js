import { mock } from "@/utils/network.js"
import { convertUrlToBase64 } from "@/common.js"

// 获取详情数据
export const getPrintDetails = async function () {
  const mockData = {
    hospital: '新北区三井人民医院',
    examNo: '2020042600007',
    name: '薛凤兰',
    genderText: '女',
    age: 69,
    address: '世茂香槟湖17栋',
    reportName: '超声医学影像报告单',
    icon1: await convertUrlToBase64('https://health.gagctv.com/wechat/jjzs/static/wechat_icon.png'),
    icon2: await convertUrlToBase64('https://health.gagctv.com/wechat/jjzs/static/man_icon.png'),
    icon3: await convertUrlToBase64('https://health.gagctv.com/wechat/jjzs/static/summary.png'),
    icon4: await convertUrlToBase64('https://health.gagctv.com/wechat/jjzs/static/common_cjeck.png'),
    icon5: await convertUrlToBase64('https://health.gagctv.com/wechat/jjzs/static/biochemistry.png'),
    icon6: await convertUrlToBase64('https://health.gagctv.com/wechat/jjzs/static/b_sound.png'),
    icon7: await convertUrlToBase64('https://health.gagctv.com/wechat/jjzs/static/female_icon.png'),
    icon8: await convertUrlToBase64('https://health.gagctv.com/wechat/jjzs/static/common_cjeck.png'),
    icon9: await convertUrlToBase64('https://health.gagctv.com/wechat/jjzs/static/urinalysis.png'),
    icon10: await convertUrlToBase64('https://health.gagctv.com/wechat/jjzs/static/man_white_border.png'),
    icon11: await convertUrlToBase64('https://health.gagctv.com/wechat/jjzs/static/share.png'),
    icon12: await convertUrlToBase64('https://health.gagctv.com/wechat/jjzs/static/female_icon.png'),
    icon13: await convertUrlToBase64('https://health.gagctv.com/wechat/jjzs/static/empty_list.png'),
    icon14: await convertUrlToBase64('https://health.gagctv.com/wechat/jjzs/static/disable.png'),
    icon15: await convertUrlToBase64('https://health.gagctv.com/wechat/jjzs/static/cyan_bg.png'),
    
  }
  return mock('/getPrintDetails', {}, mockData)
}
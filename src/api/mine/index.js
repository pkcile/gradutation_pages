/*
 * @Author: 王朋坤
 * @Date: 2022-04-21 15:59:53
 * @LastEditors: 王朋坤
 * @LastEditTime: 2022-04-22 23:31:00
 * @FilePath: /graduation-project-master/src/api/mine/index.js
 * @Description: 
 */
import request from "@/api/request.js";
import {conventStartEndStamp}  from "@/utils/date.js"

export function getResultClockLog(personalData) {
  console.log(conventStartEndStamp(personalData.currentStamp)[0]);
  return new Promise((resolve) => {
    // http://localhost:9000/result/personalLog?studynth=1&startStamp=1649134584145&endStamp=1749134584145
    request
      .get(`${process.env.VUE_APP_POSITION_PATH}/result/personalLog`, {
        params: {
          studynth: personalData.studynth,
          startStamp: conventStartEndStamp(personalData.currentStamp)[0],
          endStamp: conventStartEndStamp(personalData.currentStamp)[1]
        },
        
      })
      .then((returnData) => {
        resolve(returnData);
      })
      .catch(data => {
        resolve("服务器错误，请稍后访问");
      })
  });
}
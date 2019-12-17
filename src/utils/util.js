import axios from 'axios'
export function timeFix () {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : (hour <= 11 ? '上午好' : (hour <= 13 ? '中午好' : (hour < 20 ? '下午好' : '晚上好')))
}

export function welcome () {
  const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 DOTA', '我猜你可能累了']
  const index = Math.floor((Math.random() * arr.length))
  return arr[index]
}

/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent () {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */
export function removeLoadingAnimate (id = '', timeout = 1500) {
  if (id === '') {
    return
  }
  setTimeout(() => {
    document.body.removeChild(document.getElementById(id))
  }, timeout)
}

export function getChannelList(token, online) {
  return axios({
    method: 'get',
    url: '/ddkj/api/v1/channel/list',
    params: {
      token,
      online
    },
  });
}
export function Login(username, password) {
  console.log("Login")
  return axios({
      method: 'get',
      url: '/ddkj/api/v1/login',
      params: {
          username,
          password
      },
  });
}
export function streamStart(serial, code,token) {
  return axios({
      method: 'get',
      url: '/ddkj/api/v1/stream/start',
      params: {
          serial,
          code,
          token
      },
  });
}
export function controlPtz(serial, code, command, token) {
  return axios({
      method: 'get',
      url: '/ddkj/api/v1/control/ptz',
      params: {
          serial,
          code,
          command,
          token
      },
  });
}
export function streamStop(serial, code, token) {
  return axios({
      method: 'get',
      url: '/ddkj/api/v1/stream/stop',
      params: {
          serial,
          code,
          token
      },
  });
}
export function recordlist(serial, code, token,timeout,starttime,endtime) {
  return axios({
      method: 'get',
      url: '/ddkj/api/v1/playback/recordlist',
      params: {
          serial,
          code,
          token,
          timeout,
          starttime,
          endtime
      },
  });
}
export function playbackStop(streamid, token) {
  return axios({
      method: 'get',
      url: '/ddkj/api/v1/playback/stop',
      params: {
          streamid,
          token
      },
  });
}
export function playbackStart(serial, code, token,starttime,endtime) {
  return axios({
      method: 'get',
      url: '/ddkj/api/v1/playback/start',
      params: {
        serial,
        code,
        token,
        starttime,
        endtime
      },
  });
}



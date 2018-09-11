export default function ({redirect, req}) {
  let userAgent = process.server ? req.headers['user-agent'] : navigator.userAgent
  let isChrome = userAgent.includes('Chrome')
  console.log('userAgent: ', userAgent, '; isChrome: ' ,userAgent.includes('Chrome'))
  if (!isChrome) {
    return redirect('/noIE')
  }
}
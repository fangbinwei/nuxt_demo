module.exports = function (req, res, next) {
  console.log('server side middleware')
  let userAgent = req.headers['user-agent']
  let isChrome = userAgent.includes('Chrome')
  if (!isChrome) {
    res.writeHead(200, {
      'Content-Type': 'text/html;charset=utf-8',
      'Cache-Control': 'no-cache'
    })
    let body = `<h1>请使用chrome浏览器</h1>
    <h2>use serverside middleware</h2> 
    `
    return res.end(body)
  }
  next()
}
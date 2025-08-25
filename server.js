const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const path = require('path')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      const { pathname } = parsedUrl

      // Handle static files
      if (pathname.startsWith('/_next/') || 
          pathname.includes('.') || 
          pathname.startsWith('/images/') || 
          pathname.startsWith('/public/')) {
            
        // Check if file exists in public directory
        const publicFile = path.join(process.cwd(), 'public', pathname)
        if (fs.existsSync(publicFile)) {
          const stat = fs.statSync(publicFile)
          res.writeHead(200, {
            'Content-Type': 'image/' + path.extname(publicFile).substring(1),
            'Content-Length': stat.size,
            'Cache-Control': 'public, max-age=31536000, immutable'
          })
          const readStream = fs.createReadStream(publicFile)
          readStream.pipe(res)
          return
        }
      }

      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('Internal Server Error')
    }
  })
  .once('error', (err) => {
    console.error(err)
    process.exit(1)
  })
  .listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})

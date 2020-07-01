const http = require('http')

http.createServer((req, res) => {
    if (req.url === '/home') {
        res.write('<!DOCTYPE html>')
        res.write('<html>')
        res.write('<head>')
        res.write('<title>fuck you</title>')
        res.write('<meta charset="UTF-8">')
        res.write('</head>')
        res.write('<body>')
        res.write('<h1>Hello blya</h1>')
        res.write('</body>')
        res.write('</head>')
        res.write('</html>')
        res.end('lsdjfskdfjks')

    }
    console.log(`Запрошенный адрес: ${req.url}`)
}).listen(3000)
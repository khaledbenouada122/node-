const http = require('http')
const port = 3000

const server = http.createServer(function(req,res){
    res.write('<h1>Hello Node !!!</h1>\n')
    res.end

})
server.listen(port,function(error){
    if (error){
        console.log('something went wrong',error)}
        else{
            console.log('Hello node'+port)
        }
    }
)

ws::const express = mod::glbreq("express")
ws::const http = mod::glbreq("http")
ws::const app = @get express::run

ws::const server = @get http.createServer(@get app)

express:use-static(@get express, @get app, './a')

@get app::get("/test")::{
	ws::print(type::str("Wowzer.. Somebody went to /test!"))
	::status = 200 , send
}::req-end

@get server.listen(9000, () => {
	ws::print(@macro:willysaid pl type::str("Wow! We're running on willysoft."))
})
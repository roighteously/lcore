ws::print(type::str("Testing require of childproc.."))

child::init

ws::const scriptToRun = type::str("echo HELLO WORLD!")
ws::const scriptOutput = child::run(@get scriptToRun)::var

ws::print(type::str(@get scriptOutput))

ws::print(type::str("Attempting to start HTTP server.."))

mod::locreq(srv)::get
@c WOW WILLY SOFT HARD EDITION!

@cs Wow
a multiline
COMMENT!
@ce

@set ws::var mod = mod::locreq(modone)::get

wfs::init

@set ws::var testname = type::str("String")
@set ws::var testnum = type::num("12")
@set ws::var testobj = type::obj(_ws:true+)

@set ws::var test = "test"

@import:global

@set ws::global varname @= type::str("Willy soft is the HARDEST!")

ws::print(type::str("Testing gloabls:" pl @get:global varname@!))

ws::print(type::str("String test.") pl @get testname)
ws::print(type::str("Number test.") pl @get testnum)
ws::print(type::str("Obj test.") pl ws::json::stringify(@get testobj))

wfs::write("test.txt", @get testname)

ws::printonln(wfs::read("test.txt") pl type::str("\n"))

check @get testname equals type::str("String") !_
	ws::print(type::str("Yes, testname equals String"))
+

ws::printonln(@macro:willysaid)
ws::print(@macro:willysaid)
ws::print("Wowzer! An amazing programming languag.")
@get mod::run
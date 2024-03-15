@c WOW WILLY SOFT HARD EDITION!

@cs Wow
a multiline
COMMENT!
@ce

@set ws::var mod = mod::locreq(modone)::get
f.init

@set ws::var testname = type::str("String")
@set ws::var testnum = type::num("12")
@set ws::var testobj = type::obj(_ws:true+)

@set ws::var test = "test"

@import:global

@set ws::global varname@= type::str("Willy soft is the HARDEST!")

ws::print(type::str("Testing gloabls:" pl @get:global varname@!))

ws::print(type::str("String test.") pl @get testname)
ws::print(type::str("Number test.") pl @get testnum)
ws::print(type::str("Obj test.") pl @get ws::json::stringify(testobj))

f.wfs("test.txt", @get testname)

check @get testname equals type::str("String") !_
	ws::print(type::str("Yes, testname equals String"))
+

ws::printonln(@macro:willysaid)
ws::print(@macro:willysaid)
ws::print("Wowzer! An amazing programming languag.")
mod::run
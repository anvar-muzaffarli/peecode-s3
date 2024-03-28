function hesabla(birinciEded, ikinciEded) {
    return birinciEded + ikinciEded
}

// paramterli parametrsiz

const eded1 = Number(prompt("Birinci ededi daxil edin"))
const eded2 = Number(prompt("Ikinci ededi daxil edin"))

const ededlerinCemi = hesabla(eded1,eded2) //
console.log("Ededlerin cemi", ededlerinCemi)

function salamla() {
    console.log("Hello there!")
}

const emailjs  = {
    ad:"emailjs",
    author:"Rashid",
    sendForm: function() {
        console.log("Gonderildi")
    }
}

emailjs.sendForm




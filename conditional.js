let mhs = {
    name:"Fulan",
    age:20,
    major:'TRPL',
    skill:['sysadmin','OPP','Design'],
    poor: true, //MISKIN
    //camelcase yaitu penggunaan huruf besar pada kata yg berbeda
    // console.log('Mahasiswa yang boleh daftar :' , (mhs.age > 17));// true jadi string
      //klo mau nambah kata2 pake koma khusus (log)
      
}
//if else blok
    //console.log('Mahasiswa yang boleh daftar :' , mhs.age > 17);
    // if (mhs.major == "TRMG") {
    //     console.log(mhs.name + "Jurusan TRMG");
    // } else if (mhs.major == "TRKJ") {
    //     console.log(mhs.name + "Jurusan TRKJ");
    // } else if(mhs.major == "TRPL") {
    //     console.log(mhs.name + "Jurusan TRKJ");
    // }

    //  TERNARY
//console.log(mhs.major == "TRPL" ? mhs.name + "Jurusan TRPL" :mhs.name + "Bukan TRPL");


//switch case
// switch (mhs.major) {
//     case "TRMG":
//         console.log(mhs.name + " Jurusan TRMG");
//         break;
//     case "TRPL":
//         console.log(mhs.name + " Jurusan TRKJ");
//         break;
//     case "TRpl":
//         console.log(mhs.name + " Jurusan TRPL");
//         break;
//     default:
//         console.log(mhs.name + " Bukan Anak IDN");
        
// }

//CONDITIONAL FUNCTION

//kriteria : umur kurang 21,miskin,skill lebih dari 2

function cekKelulusan(peserta) {
    let age = peserta.age;
    let skill = peserta.skill;
    let poor = peserta.poor;
    console.log(peserta);
    


    if (age < 21 && poor && skill >= 2 ) {
        console.log( "mahasiswa ini lulus");
        
        //peserta lulus

    } else if (age <21 && poor && skill > 2 ) {
        console.log("mahasiswa ini hampir lulus");
    }else{
        //peser tidak lulus
        console.log("mahasiswa ini tidak lulus");
        
    }
}
cekKelulusan(mhs);


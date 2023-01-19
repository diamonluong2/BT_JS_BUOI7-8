let numArr = [];
document.getElementById("bt-tinh").onclick = function ex(){
    let n = parseInt(document.getElementById("inputn").value);
    numArr.push(n);
    document.getElementById("outputn").innerHTML = `Mảng là: ${numArr}`
    return numArr;
}
document.getElementById("tinh-tong").onclick = function (){
    let sum = 0;
    for(let i = 0;i<numArr.length;i++){
        sum +=numArr[i];
    }
    document.getElementById("output1").innerHTML = `Tổng là: ${sum}`

}
document.getElementById("dem-so").onclick = function (){
    let sum = 0;
    for(let i = 0;i<numArr.length;i++){
        if (numArr[i]>0){
            sum = sum + 1;
        }
    }
    document.getElementById("output2").innerHTML = `Tổng: ${sum}`
}

document.getElementById("so-nho").onclick = function (){
    let min = numArr[0];
    for(let i = 0;i<numArr.length;i++){
        if (min>numArr[i]){
            min = numArr[i];
        }
    }
    document.getElementById("output3").innerHTML = `Tổng: ${min}`
}

document.getElementById("soduong-nho").onclick = function (){
    let min = numArr[0];
    for(let i = 0;i<numArr.length;i++){
        if(min>0){
            if (min>numArr[i]&&numArr[i]>0){
            min = numArr[i];
        }
        }
    }
    document.getElementById("output4").innerHTML = `Số dương nhỏ: ${min}`
}

document.getElementById("sochan-cuoi").onclick = function (){
    let min = [];
    for(let i = 0;i<numArr.length;i++){
        if(numArr[i]%2===0){
            min = numArr[i]
        }else if(numArr[i]!==0){
            min = -1
        }

    document.getElementById("output5").innerHTML = `Số chẵn cuối: ${min}`
}
}

document.getElementById("doicho").onclick = function (){
    let num1 = parseInt(document.getElementById("number-1").value)
    let num2 = parseInt(document.getElementById("number-2").value)
    let numb1;
    numb1 = numArr[num1];
    numArr[num1] = numArr[num2];
    numArr[num2]= numb1;
    document.getElementById("output6").innerHTML = `Mãng sau khi đổi: ${numArr}`
}

document.getElementById("thutu-tang").onclick = function (){
    let min = numArr.sort();
    document.getElementById("output7").innerHTML = `Thứ tự tăng dần: ${min}`
}

document.getElementById("so-NT").onclick = function (){
    let min;
    function NT(n){
        if (n<2){
            return false;
        }else{
            for(let i = 2;i<n;i++){
                if(n%i==0){
                    return false;
                }
                return true;
                }
            }

        }
    for(let i = 0;i<numArr.length;i++){
        if(NT(numArr[i])){
            min = numArr[i];
            document.getElementById("output8").innerHTML = `Số NT đầu tiên: ${min}`
            break;
        }else{
            min = -1;
            document.getElementById("output8").innerHTML = `Số NT đầu tiên: ${min}`
        }

}
}

let soThucArr = [];
document.getElementById("them-so").onclick = function sothuc(){
    let n = parseInt(document.getElementById("so-thuc").value);
    soThucArr.push(n);
    document.getElementById("output-n").innerHTML = `Mảng là: ${soThucArr}`
    return soThucArr;
}

document.getElementById("songuyen").onclick = function (){
    let min=0;
    for(let i = 0;i<soThucArr.length;i++){
        if(Number.isInteger(soThucArr[i])==true){
            min = min + 1
        }
    document.getElementById("output9").innerHTML = `Số nguyên: ${min}`
}
}

document.getElementById("so-sanh").onclick = function (){
    let soDuong = 0;
    let soAm = 0;
    for(let i = 0;i<numArr.length;i++){
        if(numArr[i]>0){
            soDuong = soDuong + 1;
        }else if(numArr[i]<0){
            soAm = soAm + 1
        }
        document.getElementById("output11").innerHTML = `<p>Số dương: ${soDuong}</p> 
        <p>Số âm: ${soAm}</p>`
        if(soDuong>soAm){
            document.getElementById("output10").innerHTML = `Số dương nhiều hơn số âm là: ${soDuong - soAm}`
        }else{
            document.getElementById("output10").innerHTML = `Số âm nhiều hơn số dương là: ${soAm - soDuong}`
        }

}
}




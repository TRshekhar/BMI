function fun1(){
    const Weight = document.getElementById("Weight").value;
    const Height = document.getElementById("Height").value;
    // height in meter and weight in kg

    const BMI = (Weight*10000)/(Height*Height);

    if(BMI<18.5){
        document.getElementById("BMI").innerHTML=(Math.floor(BMI)+" UnderWeight");
    }
    else if(18.5<= BMI && BMI<24.9){
        document.getElementById("BMI").innerHTML=(Math.floor(BMI)+" Normal");
    }
    else if(25<=BMI && BMI<29.9){
        document.getElementById("BMI").innerHTML=(Math.floor(BMI)+" Over weight");
    }
    else if(BMI>29.9){
        document.getElementById("BMI").innerHTML=(Math.floor(BMI)+" Obesity");
    }
    else{
        document.getElementById("BMI").innerHTML=("NaN");
    }
    Weight=0;
    Height=0;
}
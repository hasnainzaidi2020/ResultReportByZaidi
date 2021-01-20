let btn = document.getElementById('btn123');

btn.addEventListener('click',()=>{
 let maths = parseInt(document.getElementById('maths').value);
 let Physics = parseInt(document.getElementById('physics').value);
 let english = parseInt(document.getElementById('english').value);
 let urdu = parseInt(document.getElementById('urdu').value);
 let islamiat = parseInt(document.getElementById('islamiat').value);
 let marks = document.getElementById('marks');
 let getp = document.getElementById('percentage')
 let total = maths+ Physics+english+urdu+islamiat;
 let parcentage = (total/500)*100;
 let grade = document.getElementById('Grade');
 marks.innerHTML = total;
 getp.innerHTML = `${parcentage}%`

if(parcentage >= 90)
{
 grade.innerHTML = 'A+'
 document.getElementById('pass').innerHTML = 'Congrats You Are Pass';
}
else if(parcentage < 90 && parcentage >= 80 )
{
    grade.innerHTML = 'A+'
    document.getElementById('pass').innerHTML = 'Congrats You Are Pass';
}
else if(parcentage < 80 && parcentage >= 70 )
{
    grade.innerHTML = 'A'
    document.getElementById('pass').innerHTML = 'Congrats You Are Pass';
}
else if(parcentage < 70 && parcentage >= 60 )
{
    grade.innerHTML = 'B'
    document.getElementById('pass').innerHTML = 'Congrats You Are Pass';
}
else if(parcentage < 60 && parcentage >= 50 )
{
    grade.innerHTML = 'C'
    document.getElementById('pass').innerHTML = 'Congrats You Are Pass';
}
else if(parcentage < 50 && parcentage >= 40 )
{
    grade.innerHTML = 'D'
    document.getElementById('pass').innerHTML = 'Congrats You Are Pass';
}
else if(parcentage < 40 && parcentage >= 33 )
{
    grade.innerHTML = 'Pass';
    document.getElementById('pass').innerHTML = 'Congrats You Are Pass'
}
else
{
    grade.innerHTML = 'Fail'
    document.getElementById('pass').innerHTML = 'Your Grade Is Fail'
}
})
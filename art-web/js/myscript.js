
function mydesign()
      {
        document.getElementById("design").innerHTML = "81%";
        document.getElementById("designbox").innerHTML = "អរគុណសម្រាប់ការគាំទ្រ";
        document.getElementById("designbutton").style = "display: none;";
        document.getElementById("designbutton2").style = "display: none;";
        document.getElementById("disignclass").classList.add("html1");
        document.getElementById("disignclass").classList.remove("html");
      }
      
function myprogram()
      {
        document.getElementById("program").innerHTML = "71%";
        document.getElementById("programbox").innerHTML = "អរគុណសម្រាប់ការគាំទ្រ";
        document.getElementById("programbutton").style = "display: none;";
        document.getElementById("programbutton2").style = "display: none;";
        document.getElementById("programclass").classList.add("css1");
        document.getElementById("programclass").classList.remove("css");
      }

function mybuqs()
      {
        document.getElementById("buqs").innerHTML = "31%";
        document.getElementById("buqsbox").innerHTML = "អរគុណ! ពួកយើងនឹងធ្វើការកែប្រែ";
        document.getElementById("buqsbutton").style = "display: none;";
        document.getElementById("buqsbutton2").style = "display: none;";
        document.getElementById("buqsclass").classList.add("js1");
        document.getElementById("buqsclass").classList.remove("js");
      }
// 2
function mydesign2()
      {
        document.getElementById("design").innerHTML = "79%";
        document.getElementById("designbox").innerHTML = "អរគុណ! សម្រាប់ការរិះគន់ដើម្បីស្ថាបនា";
        document.getElementById("designbutton").style = "display: none;";
        document.getElementById("designbutton2").style = "display: none;";
        document.getElementById("disignclass").classList.add("html2");
        document.getElementById("disignclass").classList.remove("html1");
      }
      
function myprogram2()
      {
        document.getElementById("program").innerHTML = "69%";
        document.getElementById("programbox").innerHTML = "អរគុណ! សម្រាប់ការរិះគន់ដើម្បីស្ថាបនា";
        document.getElementById("programbutton").style = "display: none;";
        document.getElementById("programbutton2").style = "display: none;";
        document.getElementById("programclass").classList.add("css2");
        document.getElementById("programclass").classList.remove("css1");
      }

function mybuqs2()
      {
        document.getElementById("buqs").innerHTML = "29%";
        document.getElementById("buqsbox").innerHTML = "អរគុណ! ពួកយើងនឹងនៅតែធ្វើការអភិវឌ្ឍន៏អោយបានល្អជានិច្ច";
        document.getElementById("buqsbutton").style = "display: none;";
        document.getElementById("buqsbutton2").style = "display: none;";
        document.getElementById("buqsclass").classList.add("js2");
        document.getElementById("buqsclass").classList.remove("js1");
      }
var p = 0;
var i = 0 , k = 0,m = 0,t = 0,f = 0,lo = 1;
function lesson1()
{
  
  if(p == 0){
   document.getElementById("lesson1").style = "background-color: black;";
   document.getElementById("question").style = "display: block;";
//    document.getElementById("question1").style = "display: block;";

  }
}

function lesson2()
{
  k =0;
  m = 0;
  if(p == 1){
    
    document.getElementById("lesson2").style = "background-color: black;";
    document.getElementById("radio1").innerHTML = "";
    document.getElementById("radio2").innerHTML = "";
    document.getElementById("radio3").innerHTML = "";
    document.getElementById("radio4").innerHTML = "";
    document.getElementById("btn").value = "ចុចដើម្បីចាប់ផ្តើម";
    document.getElementById("question1").style = "display: block;";
    document.getElementById("question").style = "display: none;";
    document.getElementById("resul").style = "display: none;";
    document.getElementById("true").style ="display: none;";
    document.getElementById("false").style ="display: none;";
    }
}
function lesson3()
{
  if(p == 2){
    document.getElementById("lesson3").style = "background-color: black;";    
    p+=1;
    }
}
function lesson4()
{
  if(p == 3){
    document.getElementById("lesson4").style = "background-color: black;";
     p+=1;
    }
}
function lesson5()
{
  if(p == 4){
  document.getElementById("lesson5").style = "background-color: black;";
     p+=1;
     p=0;
    }
}
// java script button
function myAnswer()
{
    if(m==1){alert("មិនមានសំនួរទៀតទេសំចុចចូលមេរៀនទី២ ដើម្បីឆ្លើយសំនួរបន្ត !!"); return;}
    var rd1 = ["ធ្វើអោយអក្សរទ្រេត","HTML ជា progamming language","ធ្វើអោយអក្សរទ្រេត","9", "tag table ប្រើសំរាប់បង្កើត table","tag tr ប្រើសំរាប់បង្កើតជួរដេក",
               "tag td ប្រើសំរាប់បង្កើតជួរដេក","tag colspan ប្រើសំរាប់បង្កើត list","tag bgcolor ប្រើសំរាប់ដាក់ពណ៏អោយ tag em","list មាន ១"];
    var rd2 = ["ធ្វើអោយអក្សរធំ","HTML ជា Markup Language","ធ្វើអោយអក្សរតូចជាងមុន៣ដង","5","tag table ប្រើសំរាប់បង្កើត ជួរដេក","tag tr ប្រើសំរាប់បង្កើតជួរឈរ",
               "tag td ប្រើសំរាប់បង្កើត data ចូលក្នុង table","tag colspan ប្រើសំរាប់បង្កើតជួរដេក","tag bgcolor ប្រើសំរាប់ដាក់ពណ៏អោយអក្សរ","list មាន ២"];
    var rd3 = ["ធ្វើអោយអក្សរមានបន្ទាត់","HTML ជា Script","ធ្វើអោយអក្សរមានបន្ទាត់ពីក្រោម","6","tag table ប្រើសំរាប់បង្កើតការ link ទៅ page មួយទៀត","tag tr ប្រើសំរាប់បង្កើត list",
               "tag td ប្រើសំរាប់បង្កើត list","tag colspan ប្រើសំរាប់បញ្ចូលជួរឈរ២ រឺ ៣តាមដែលយើងចង់បានមកធ្វើ១","tag bgcolor ប្រើសំរាប់ដាក់ពណ៏អោយ list","list មាន ៣"];
    var rd4 = ["ធ្វើអោយអក្សរមានពណ៌ក្រហម","HTML ជា Database","ធ្វើអោយអក្សរធំជាងមុន៣ដង","3","tag table ប្រើសំរាប់បង្កើត List","tag tr ប្រើសំរាប់បង្កើត script",
               "tag td ប្រើសំរាប់បង្កើតជួរឈរ","tag colspan ប្រើសំរាប់បញ្ចូលជួរដេក២ រឺ ៣តាមដែលយើងចង់បានមកធ្វើ១","tag bgcolor ប្រើសំរាប់ដាក់ពណ៏អោយ table","list មាន ៤"];
    var question = ["តើ tag i មានន័យដូចម្តេច?","តើ HTML ជាអ្វី?","តើ tag u មានន័យដូចម្តេច?",
                    "តើ tag h1 មានបងប្អូនត្រកូល h ប៉ុន្មាន?","តើ tag  table  ប្រើសំរាប់ធ្វើអ្វី?","តើ tag  tr  ប្រើសំរាប់ធ្វើអ្វី? ",
                    "តើ tag  td  ប្រើសំរាប់ធ្វើអ្វី?","តើ tag  colspan  ប្រើសំរាប់ធ្វើអ្វី?","តើ tag  bgcolor  ប្រើសំរាប់ធ្វើអ្វី?",
                    "តើ List មានប៉ុន្មានប្រភេទ?"];
    var answer1 = [1,2,3,3,1,1,2,3,4,3];
     if(k==0)
     {
            document.getElementById("radio1").innerHTML = rd1[i];
            document.getElementById("radio2").innerHTML = rd2[i];
            document.getElementById("radio3").innerHTML = rd3[i];
            document.getElementById("radio4").innerHTML = rd4[i];
            document.getElementById("que").innerHTML = question[i];
            document.getElementById("btn").value = "ជ្រើសរើស";

         alert("សូមចាប់ផ្តើម");
         k =1;
     }
     else{
    var num = document.getElementsByName("gender");
    var answer = 0;
        if(num[0].checked)
        {
            answer = 1;
        }
        else if(num[1].checked)
        {
            answer = 2;
        }
        else if(num[2].checked)
        {
            answer = 3;
        }
        else if(num[3].checked)
        {
            answer = 4;
        }
        else{
            alert("សូមជ្រើសរើសចំលើយមួយមុននិងចុចជ្រើសរើស !!"); 
            return;
        }
        if(answer == answer1[i])
        {
            alert("ចំលើយត្រឹមត្រូវ");
            
            t = t+1;    
        }
        else
        {
            alert("ចំលើយមិនត្រឹមត្រូវសូមព្យាយាមម្តងទៀត !!");
            f = f+1;
            
        }
        i +=1;  
        if(i > rd1.length - 1)
           { 
            alert("អបអរសាទរអ្នកបានឆ្លើយគ្រប់សំនួររបស់មេរៀនទី១");
            document.getElementById("resul").style = "display: block ;";
            document.getElementById("question").style = "display: none;";
            document.getElementById("true").innerHTML = "អ្នកឆ្លើយត្រូវចំនួន " + t + " ដង";
            document.getElementById("false").innerHTML = "អ្នកឆ្លើយខុសចំនួន " + f + " ដង";
            lo = t * 10;
            document.getElementById("monday").innerHTML = lo + "%";
            document.getElementById("helloworld").style = "width:" +  lo + "%;";
             m = 1;
             p+=1;
             return;
            }
            document.getElementById("radio1").innerHTML = rd1[i];
            document.getElementById("radio2").innerHTML = rd2[i];
            document.getElementById("radio3").innerHTML = rd3[i];
            document.getElementById("radio4").innerHTML = rd4[i];
            document.getElementById("que").innerHTML = question[i];
            document.getElementById("btn").value = "ជ្រើសរើស";
     }
}
//   ជំរាបលោកគ្រូដោយសារពេលវេលាខ្លីដូចនេះមិនបានសរសេរវាជា function ទេ
//   event CSS
  var i1 = 0 , k1 = 0,m1 = 0,t1 = 0,f1 = 0,lo1 = 0;
function myAnswer1()
{
    if(m1==1){alert("មិនមានសំនួរទៀតទេសំចុចចូលមេរៀនទី២ ដើម្បីឆ្លើយសំនួរបន្ត !!"); return;}
    var rd11 = ["CSS ជាភាសាសំរាប់តែងសម្រស់អោយ HTML កាន់តែស្អាត","Margin ជាគម្លាតនៅក្នុង Box","padding ជា ការដាក់ពណ៌អោយ Box","គ្រប់ class football ទាំងអស់ដែលនៅក្រៅ tag h1  ត្រូវអនុវត្តន៍ statement","tag a ទាំងអស់ដែលនៅក្នុង Class football និងមានផ្ទៃខាងក្រោយពណ៌លឿង"];
    var rd21 = ["CSS ជា Script","Margin ជាគម្លាតនៃ Box  ទៅកាន់ Document","padding ជា Form","គ្រប់ tag h1 ទាំងអស់ដែលនៅក្រៅ  class football ត្រូវអនុវត្តន៍ statement","ពេលដែលដាក់ Mourse នៅលើ tag a ទាំងអស់ដែលនៅក្រៅ Class football និងមានផ្ទៃខាងក្រោយពណ៌លឿង(បញ្ជាក់ផ្ទៃខាងក្រោយពណ៌លឿងតែ tag a ណាដែរយើងដាក់ Mourse ពីលើ)"];
    var rd31 = ["CSS ជា tag សំរាប់បង្កើត table","Margin ជា HTML tag","padding ជាគម្លាតនៃ Box  ទៅកាន់ Document","គ្រប់ class football ទាំងអស់ដែលនៅក្នុង tag h1  ត្រូវអនុវត្តន៍ statement","ពេលដែលដាក់ Mourse នៅលើ tag a ទាំងអស់និងមានផ្ទៃខាងក្រោយពណ៌លឿង(បញ្ជាក់ផ្ទៃខាងក្រោយពណ៌លឿងតែ tag a ណាដែរយើងដាក់ Mourse ពីលើ)"];
    var rd41 =["CSS ជា Database","Margin ជា Database","padding ជាគម្លាតនៅក្នុង Box","គ្រប់ tag h1 ទាំងអស់ដែលនៅក្នុង  class football ត្រូវអនុវត្តន៍ statement","ពេលដែលដាក់ Mourse នៅលើ tag a ទាំងអស់ដែលនៅក្នុង Class football និងមានផ្ទៃខាងក្រោយពណ៌លឿង(បញ្ជាក់ផ្ទៃខាងក្រោយពណ៌លឿងតែ tag a ណាដែរយើងដាក់ Mourse ពីលើ)"];
    var question1 = ["តើ CSS ជាអ្វី ?","Margin ជាអ្វី?","padding ជាអ្វី? ",
         ".football h1{ srtatement; } បើសរសេរបែបនេះក្នុង CSS មានន័យដូចម្តេច?",
         ".football a:hover{ background-color: yellow; }  សរសេរបែបនេះក្នុង CSS មានន័យដូចម្តេច?",];
    var answer11 = [1,2,4,4,4];
     if(k1==0)
     {
            document.getElementById("radio11").innerHTML = rd11[i1];
            document.getElementById("radio21").innerHTML = rd21[i1];
            document.getElementById("radio31").innerHTML = rd31[i1];
            document.getElementById("radio41").innerHTML = rd41[i1];
            document.getElementById("que1").innerHTML = question1[i1];
            document.getElementById("btn1").value = "ជ្រើសរើស";

         alert("សូមចាប់ផ្តើម");
         k1 =1;
     }
     else{
    var num1 = document.getElementsByName("gender1");
    var answer1 = 0;
        if(num1[0].checked)
        {
            answer1 = 1;
        }
        else if(num1[1].checked)
        {
            answer1 = 2;
        }
        else if(num1[2].checked)
        {
            answer1 = 3;
        }
        else if(num1[3].checked)
        {
            answer1 = 4;
        }
        else{
            alert("សូមជ្រើសរើសចំលើយមួយមុននិងចុចជ្រើសរើស !!"); 
            return;
        }
        if(answer1 == answer11[i1])
        {
            alert("ចំលើយត្រឹមត្រូវ");
            t1 = t1+1;
        }
        else
        {
            alert("ចំលើយមិនត្រឹមត្រូវសូមព្យាយាមម្តងទៀត !!");
            f1 = f1+1;
        }
        i1 +=1;  
        lo1 = t1 * 20;
        if(i1 > rd11.length - 1)
            { 
                alert("អបអរសាទរអ្នកបានឆ្លើយគ្រប់សំនួររបស់មេរៀនទី២");
                document.getElementById("resul1").style = "display: block ;";
                document.getElementById("question1").style = "display: none;";
                document.getElementById("true1").innerHTML = "អ្នកឆ្លើយត្រូវចំនួន " + t1 + " ដង";
                document.getElementById("false1").innerHTML = "អ្នកឆ្លើយត្រូវចំនួន " + f1 + " ដង";
                document.getElementById("monday1").innerHTML = lo1 + "%";
                document.getElementById("helloworld1").style = "width:" +  lo1 + "%;";
                m1 = 1;
                p1+=1;
                return;
            }          
            document.getElementById("radio11").innerHTML = rd11[i1];
            document.getElementById("radio21").innerHTML = rd21[i1];
            document.getElementById("radio31").innerHTML = rd31[i1];
            document.getElementById("radio41").innerHTML = rd41[i1];
            document.getElementById("que1").innerHTML = question1[i1];
            document.getElementById("btn1").value = "ជ្រើសរើស";
     }
     
   
  }

  function quest1()
  {
   document.getElementById("quesht1").style = "display: block;";
   document.getElementById("quesht2").style = "display: none;";
   document.getElementById("quesht3").style = "display: none;";
   document.getElementById("quesht4").style = "display: none;";
   document.getElementById("quesht5").style = "display: none;";
   document.getElementById("quesht6").style = "display: none;";

   document.getElementById("quesht1").style = "color: black";
   document.getElementById("quesht2").style = "display: none;";
   document.getElementById("quesht3").style = "display: none;";
   document.getElementById("quesht4").style = "display: none;";
   document.getElementById("quesht5").style = "display: none;";
   document.getElementById("quesht6").style = "display: none;";
  }
  function quest2()
  {
    document.getElementById("quesht1").style = "display: none;";
    document.getElementById("quesht2").style = "display: block;";
    document.getElementById("quesht3").style = "display: none;";
    document.getElementById("quesht4").style = "display: none;";
    document.getElementById("quesht5").style = "display: none;";
    document.getElementById("quesht6").style = "display: none;";
  }
  function quest3()
  {
    document.getElementById("quesht1").style = "display: none;";
    document.getElementById("quesht2").style = "display: none;";
    document.getElementById("quesht3").style = "display: block;";
    document.getElementById("quesht4").style = "display: none;";
    document.getElementById("quesht5").style = "display: none;";
    document.getElementById("quesht6").style = "display: none;";
  }
  function quest4()
  {
    document.getElementById("quesht1").style = "display: none;";
    document.getElementById("quesht2").style = "display: none;";
    document.getElementById("quesht3").style = "display: none;";
    document.getElementById("quesht4").style = "display: block;";
    document.getElementById("quesht5").style = "display: none;";
    document.getElementById("quesht6").style = "display: none;";
  }
  function quest5()
  {
    document.getElementById("quesht1").style = "display: none;";
    document.getElementById("quesht2").style = "display: none;";
    document.getElementById("quesht3").style = "display: none;";
    document.getElementById("quesht4").style = "display: none;";
    document.getElementById("quesht5").style = "display: block;";
    document.getElementById("quesht6").style = "display: none;";
  }
  function quest6()
  {
    document.getElementById("quesht1").style = "display: none;";
    document.getElementById("quesht2").style = "display: none;";
    document.getElementById("quesht3").style = "display: none;";
    document.getElementById("quesht4").style = "display: none;";
    document.getElementById("quesht5").style = "display: none;";
    document.getElementById("quesht6").style = "display: block;";
  }
  
  
 


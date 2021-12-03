let question = document.querySelector(".question");
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let progress = document.querySelector(".progress");

let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");

const firstQ = {
  title: "Are You Currently Struggling With Losing Weight?",

  option1: "Yes I Am, But I Haven't Found A Solution...",
  option2: "Nope, I'm Good",
};

const loseQuestions = {
  question1: {
    title: "Do You Ever Tried Keto Diet Before?",

    option1: "No, What's That?",
    option2: "Yes, But I Never See Results",
  },

  javaBurn: {
    title:
      "You Are Interested To Know How A 43 Year Old Mom Lost 54 Pounds Without Dieting, Just With A Simple Breakfest Routine?",

    option1: "Yes, Show Me!",
    option2: "Yes, Please!",
  },

  ketoDiet: {
    title:
      "Are You Interested To Know How A 46 Year Old Mom Lost 56 Pounds While Eating Her Favorite Foods?",

    option1: "Yes, Show Me!",
    option2: "Yes, Please!",
  },

  finalJavaBurn: {
    title:
      "Just Enter Your Name And Email Address Below To Discover How A 43 Year Old Mom Lost 54 Pounds Without Dieting, Just With A Simple Breakfest Routine.",
    form: "https://2e640dc0.sibforms.com/serve/MUIEAF00tXZy6iBJj4QKLlMbXFKaUJ78slQ-oG5SIZy4_YNUUKqgo35mceVVLyANncWzwS8gwhxFnLhbWcY8cxJ20a-nrFGS-2yA-3WGckFub2146uRwOLOIc5zmkK_QsHZNXxynmgIM_QR_18wecUAcPHw0C8DhJeNdH1YdJxNsVkNhfeQVsY5M3bLOJRnY74GbOsmd8feQhUgV",
  },

  finalKetoDiet: {
    title:
      "Just Enter Your Name And Email Address Below To Discover How A 46 Year Old Mom Lost 56 Pounds While Eating Her Favorite Foods.",
    form: "https://2e640dc0.sibforms.com/serve/MUIEAP03TYH8_22LG_SxcC0GpBSLYesgcMbFPguhdM8OQ8f7i2BNof01h4qCNIjDKYFV8HHLoLz78HQI0UaoRHbNex1hPntpeyECY8goUa-JOH7O4l-wtKwikhfibIhlIYgqPfuw8zxWE_qQTgWl2lajhRLoUWsJeTXtFr0HNk-679UMIT6hG-Lwt8QyPv4etIFIx7VBGy2JXyK5",
  },
};

const noLoseQuestions = {
  question1: {
    title:
      "Do You Want To Gain Muscle Mass Or Do You Want To Control Your Diabetes?",

    option1: "Gain Muscle Mass",
    option2: "Regulate My Diabetes",
  },

  muscle: {
    title:
      "Are You Interested In How To Crank Your Muscle Gains To New Heights By Transforming 1 Gram Of Protein Into 3 Grams?",

    option1: "Yes, Show Me!",
    option2: "Yes, Please!",
  },

  diabetes: {
    title:
      "Are You Interested In Watching A Video Of How Diabetes Freedom Saved A 61 Year Old Dad From Amputating His Leg?",

    option1: "Yes, Show Me The Video!",
    option2: "Yes, Please!",
  },

  finalMuscle: {
    title:
      "Just Enter Your Name And Email Address Below To Discover How To Crank Your Muscle Gains To New Heights By Transforming 1 Gram Of Protein Into 3 Grams.",
    form: "https://2e640dc0.sibforms.com/serve/MUIEAAmkh_tszoo91tswmw3PQtiNllJojpFNBs7Tr0h13iVfGXoqYhXtok8dy74_wz-P5IA6pZt4bFzoNl77z3fppO_SWFU2RcEXeHaeXKJgE6LhhEkGBFqcjPBdrcdEL8Zj7vHxqVkltTfPYVV2hA0ZvNFEU_7gDaAAZE5KX1IeqUQ4MGjiGC-ejPfiS__3EHxd5jQuA5Oieo19",
  },

  finalDiabetes: {
    title:
      "Just Enter Your Name & Email Address Below To Watch The Free Video...",
    form: "https://2e640dc0.sibforms.com/serve/MUIEAPRnILd84iiHe-WKXh30htXBdqKFNb9BQ7Xtfm4M3NHnG-fKdkxkXM0kQlIh5aOSiIw3GFJ03YmlkySR624ydVJDtQUM4EsBE0c1LWoEZlxl5W_hXjOry9CNa4_e3CVImo6nM8PKqSmSQiGFZfpzuvCFfPCZKCCenWCYfh5VT3jdUasOFbQTOkdE2H6iCBYxuXWgZjPcX56f",
  },
};

function nextQuestion(prop) {
  switch (prop.target.myParams) {
    case "loseWeight":
      loseWeight("start");
      break;

    case "noLoseWeight":
      noLoseWeight("start");
      break;

    case "ketoDiet":
      loseWeight("ketoDiet");
      break;

    case "javaBurn":
      loseWeight("javaBurn");
      break;

    case "muscle":
      noLoseWeight("muscle");
      break;

    case "diabetes":
      noLoseWeight("diabetes");
      break;

    case "loading":
      loading();
      break;
  }
}

function firstQuestion() {
  question.innerHTML = firstQ.title;
  progress.style.width = "10%";

  option1.innerHTML = firstQ.option1;
  answer1.addEventListener("click", nextQuestion);
  answer1.myParams = "loseWeight";

  option2.innerHTML = firstQ.option2;
  answer2.addEventListener("click", nextQuestion);
  answer2.myParams = "noLoseWeight";
}
firstQuestion();

let final;

function loseWeight(parms) {
  let loseWeightMap = parms;

  switch (loseWeightMap) {
    case "start":
      question.innerHTML = loseQuestions.question1.title;
      progress.style.width = "50%";

      option1.innerHTML = loseQuestions.question1.option1;
      answer1.myParams = "ketoDiet";

      option2.innerHTML = loseQuestions.question1.option2;
      answer2.myParams = "javaBurn";
      break;

    case "ketoDiet":
      question.innerHTML = loseQuestions.ketoDiet.title;
      progress.style.width = "100%";

      option1.innerHTML = loseQuestions.ketoDiet.option1;
      answer1.myParams = "loading";
      answer1.finalParams = "ketoDiet";

      option2.innerHTML = loseQuestions.ketoDiet.option2;
      answer2.myParams = "loading";
      answer2.finalParams = "ketoDiet";
      final = "ketoDiet";
      break;

    case "javaBurn":
      question.innerHTML = loseQuestions.javaBurn.title;
      progress.style.width = "100%";

      option1.innerHTML = loseQuestions.javaBurn.option1;
      answer1.myParams = "loading";
      answer1.finalParams = "javaBurn";

      option2.innerHTML = loseQuestions.javaBurn.option2;
      answer2.myParams = "loading";
      answer2.finalParams = "javaBurn";
      final = "javaBurn";
      break;

    default:
      break;
  }
}

function noLoseWeight(parms) {
  let noLoseWeightNumber = parms;

  switch (noLoseWeightNumber) {
    case "start":
      question.innerHTML = noLoseQuestions.question1.title;
      progress.style.width = "50%";

      option1.innerHTML = noLoseQuestions.question1.option1;
      answer1.myParams = "muscle";

      option2.innerHTML = noLoseQuestions.question1.option2;
      answer2.myParams = "diabetes";
      break;

    case "muscle":
      question.innerHTML = noLoseQuestions.muscle.title;
      progress.style.width = "100%";

      option1.innerHTML = noLoseQuestions.muscle.option1;
      answer1.myParams = "loading";
      answer1.finalParams = "muscle";
      final = "muscle";

      option2.innerHTML = noLoseQuestions.muscle.option2;
      answer2.myParams = "loading";
      answer2.finalParams = "muscle";
      final = "muscle";
      break;

    case "diabetes":
      question.innerHTML = noLoseQuestions.diabetes.title;
      progress.style.width = "100%";

      option1.innerHTML = noLoseQuestions.diabetes.option1;
      answer1.myParams = "loading";
      answer1.finalParams = "diabetes";
      final = "diabetes";

      option2.innerHTML = noLoseQuestions.diabetes.option2;
      answer2.myParams = "loading";
      answer2.finalParams = "diabetes";
      final = "diabetes";
      break;

    default:
      break;
  }
}

function loading() {
  document.querySelector(".quiz").style.paddingBottom = "8rem";
  progress.style.transition = "width 0s";
  progress.style.width = "0%";
  progress.classList.add("loading");

  question.innerHTML =
    "Checking To Make Sure You Are Qualified To Access This Content...";

  let warning = document.createElement("p");
  warning.innerHTML =
    '"Hang Tight. Do Not Leave The Page or Preload The Page..."';
  document.querySelector(".rate").appendChild(warning);

  document.querySelector(".answers").remove();

  setTimeout(() => {
    document.querySelector(".rate").remove();
    document.querySelector(".headline-text").innerHTML =
      "Your're One Step Away...";

    document.querySelector(
      ".quiz"
    ).innerHTML += `<div class="sib-form" style="text-align: center;">
    <div id="sib-form-container" class="sib-form-container">
    <div id="sib-container" class="sib-container--large sib-container--vertical">
     <form id="sib-form" method="POST" action="">
       <div>
         <div class="sib-input sib-form-block">
           <div class="form__entry entry_block">
             <div class="form__label-row ">
    
               <div class="entry__field">
                 <input class="input" maxlength="200" type="text" id="NOME" name="NOME" autocomplete="off" placeholder="Name" />
               </div>
             </div>
    
             <label class="entry__error entry__error--primary">
             </label>
           </div>
         </div>
       </div>
       <div>
         <div class="sib-input sib-form-block">
           <div class="form__entry entry_block">
             <div class="form__label-row ">
    
               <div class="entry__field">
                 <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="Email" data-required="true" required />
               </div>
             </div>
    
             <label class="entry__error entry__error--primary">
             </label>
           </div>
         </div>
       </div>
       <div style="padding: 8px 0;">
         <div class="sib-form-block" style="text-align: center">
           <button class="sib-form-block__button sib-form-block__button-with-loader" form="sib-form" type="submit">
             <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
               <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
             </svg>
             Click Here To Watch The Free Video Now
           </button>
         </div>
       </div>
       <input type="text" name="email_address_check" value="" class="input--hidden">
       <input type="hidden" name="locale" value="pt">
       <input type="hidden" name="html_type" value="simple">
     </form>
    </div>
    </div>`;

    let form = document.querySelector("#sib-form");

    document.querySelector(".quiz").style.padding = "2rem 0 3rem 0";

    let customQuestion = document.querySelector(".content .question");

    switch (final) {
      case "javaBurn":
        customQuestion.innerHTML = loseQuestions.finalJavaBurn.title;
        form.action = loseQuestions.finalJavaBurn.form;
        document.querySelector(".sib-form-block__button").innerHTML =
          "Click To Access The Free Content";
        break;

      case "ketoDiet":
        customQuestion.innerHTML = loseQuestions.finalKetoDiet.title;
        form.action = loseQuestions.finalKetoDiet.form;
        document.querySelector(".sib-form-block__button").innerHTML =
          "Click To Access The Free Content";
        break;

      case "muscle":
        customQuestion.innerHTML = noLoseQuestions.finalMuscle.title;
        form.action = noLoseQuestions.finalMuscle.form;
        document.querySelector(".sib-form-block__button").innerHTML =
          "Click To Access The Free Content";
        break;

      case "diabetes":
        customQuestion.innerHTML = noLoseQuestions.finalDiabetes.title;
        form.action = noLoseQuestions.finalDiabetes.form;
        break;

      default:
        break;
    }
  }, 2500);
}

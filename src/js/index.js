// Hide the elements when the document is ready
$(() => {
  $(".dropdown-elements").hide();
  $(".new-topic__view").hide();
  $(".new-topic__done").hide();
  $(".answers").hide();
});

// Show dropdown elements

$(".btn-idioms").click(() => {
  $(".dropdown-elements").slideToggle("slow");
});

// Change the language

$(".dropdown-item").click((item) => {
  let listLanguage = item.target.innerText;

  $(".selected-language").html(listLanguage);

  dropDownItemsVisibility();
});

// Download the article

$(".btn-down").click(()=>{
  window.open("https://proceedings.science/proceedings/100121/_papers/113386/download/abstract_file1", "_blank");
});

// Favorite change colgroup

$(".btn-star").click(()=> {
  $(".btn-star").toggleClass("bg-color");
})



// Short the resume text

$(".resume-content").shorten({
  moreText: "ver mais",
  lessText: "ver menos",
  showChars: 900,
});

// New Topic

$(".new-topic").click(() => {
  $(".normal-view").hide();
  $(".new-topic__done").hide();
  $(".new-topic__view").slideDown(2000);
});

// New comments attached on the discussion field

$(".submit-button").click((event) => {
  event.preventDefault();

  let subjectTopic = $(".input-assunt").val();
  let subjectContent = $(".subject-text").val();

  discussionTopic(subjectTopic, subjectContent);

  $(".new-topic__view").hide();
  $(".new-topic__done").slideDown(1500);
});

// Answers 

$(".answerd").click((event) => {
  console.log(event)
  $(".answers").slideToggle("slow");
})

// Functions

function dropDownItemsVisibility() {
  $(".dropdown-elements").slideUp("slow");
};

function discussionTopic (title, content) {
  return $(".indiviual-comments").append(`
  <div class="comment">
  <div class="comment-content__container">
  <h5 class="title-comment">${title}</h5>
  <p class="author-comment">
      Carlos Henrique Santos
  </p>

  <p class="content-comment">
      ${content}
  </p>

  <section class="indiviual-comments__footer">

      <button class="more-info" type="button">
          <span class="more-info__icon"></span>
      </button>

      <button class="heart-like" type="button">
          <span class="heart-icon"></span>
      </button>

      <p class="number-likes">likes</p>
      <p class="number-answers">resposta</p>

  </section>
</div>

</div>
`);
};

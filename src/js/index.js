//Variables to not acess DOM every time

let newTopicNormal = $(".ideias-doubts__initial-view");
let newTopicToSend = $(".ideias-doubt__new-topic-view");
let newTopicDone = $(".ideas-doubt__new-topic-done");

// Hide the elements when the document is ready

$(() => {
  $(".dropdown-elements").hide();
  newTopicToSend.hide();
  newTopicDone.hide();
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

$(".btn-down").click(() => {
  window.open(
    "https://proceedings.science/proceedings/100121/_papers/113386/download/abstract_file1",
    "_blank"
  );
});

// Favorite change colgroup

$(".btn-star").click(() => {
  $(".btn-star").toggleClass("bg-color");
});

// Short the resume text

$(".resume-content").shorten({
  moreText: "ver mais",
  lessText: "ver menos",
  showChars: 900,
});

// New Topic

$(".new-topic").click(() => {
  newTopicNormal.hide();
  newTopicToSend.slideDown(2000);
});

// New comments attached on the discussion field

$(".new-topic__submit-button").click((event) => {
  event.preventDefault();

  let subjectTopic = $(".input-assunt").val();
  let subjectContent = $(".subject-text").val();

  discussionTopic(subjectTopic, subjectContent);

  $("form :input").val(""); // clean the inputs

  newTopicToSend.hide();
  newTopicDone.slideDown(2000);
});

//  Interaction to send another topic

$(".after-send").click(() => {
  newTopicDone.hide();
  newTopicToSend.slideDown(2000);
});

// Answers

$(".answerd").click(() => {
  $(".answers").slideToggle("slow");
});

/* Mobile*/

$(".hamburguer-button").click(() => {
  $(".lateral-nav").toggle("slide");
});

// Functions

function dropDownItemsVisibility() {
  $(".dropdown-elements").slideUp("slow");
}

function discussionTopic(title, content) {
  return $(".indiviual-comments").append(`
  <div class="comment">
    <div class="comment-content__container">
      <h5 class="comment-title">${title}</h5>
      <p class="comment-author">
          Carlos Henrique Santos
      </p>

      <p class="comment-content">
          ${content}
      </p>

      <section class="comment-footer">

      <button class="more-info" type="button">
        <span class="more-info__icon"></span>
      </button>

      <button class="heart-like" type="button">
        <span class="heart-icon"></span>
      </button>

      <p class="number-likes">0 likes</p>
      <p class="number-answers">0 resposta</p>

    </section>
    ${waitingFeedback()}
  </div>
</div>
`);
}

function waitingFeedback() {
  return `
  <div class="comment__waiting-feedback">
		<span class="check"></span>
		<p class="feedback-text">Aguardando feedback dos autores</p>
		<p class="edit-topic">Editar tópico</p>
	</div>
  `;
}

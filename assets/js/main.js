const questions = document.querySelectorAll(".que-1");

questions.forEach((question) => {
  question.querySelector(".lucide-plus");

  question.addEventListener("click", () => {
    question.classList.toggle("active");
  });
});

// plus minus
document.querySelectorAll(".que-1 svg").forEach((icon) => {
  icon.addEventListener("click", function () {
    this.classList.toggle("active");
    const answer = this.closest(".que-1").querySelector("span");
    answer.classList.toggle("show");
  });
});

// carousel


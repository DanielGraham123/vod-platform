console.log("faq js imported");

// $(document).on("ready", function () {
// Add minus icon for collapse element which is open by default

$(".collapse.show").each(function () {
  console.log("show is on");

  $(this)
    .prev(".card-header")
    .find(".fa")
    .addClass("fa-minus")
    .removeClass("fa-plus");
});

// Toggle plus minus icon on show hide of collapse element
$(".collapse")
  .on("show.bs.collapse", function () {
    $(this)
      .prev(".card-header")
      .find(".fa")
      .removeClass("fa-plus")
      .addClass("fa-minus");
  })
  .on("hide.bs.collapse", function () {
    $(this)
      .prev(".card-header")
      .find(".fa")
      .removeClass("fa-minus")
      .addClass("fa-plus");
  });
// });

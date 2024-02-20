let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let para1 = document.getElementById("para1");

let contents =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque incidunt aliquam provident sit ducimus pariatur eius, aliquid dolorum! Unde provident nemo officia blanditiis officiis sequi, aliquid error perferendis nihil exercitationem earum voluptates a odio quis, ipsum, dignissimos porro obcaecati at reprehenderit. Fugit inventore rem nihil ducimus amet consequuntur reprehenderit. Cumque neque vitae nulla. Iusto officia vel doloribus exercitationem, quod voluptas id eaque vero veniam eligendi earum saepe possimus recusandae explicabo animi error expedita repudiandae modi consequuntur doloremque alias, eos rerum. Iste pariatur quasi, accusamus architecto iure nam maiores recusandae cumque laboriosam? Id ut, magni fugit vero rerum sed hic voluptates.";

para1.innerText = contents.substring(0, 50).concat("......");

btn1.addEventListener("click", () => {
  btn1.innerText = "read more";
  para1.innerText = contents.substring(0, contents.length);
});

btn2.addEventListener("click", () => {
  btn2.innerText = "read less";
  para1.innerText = contents.substring(0, 50);
});

let zipCode = document.getElementById("zip");
let cityPara = document.getElementById("displayCity");
function cityFinder(_zipCode) {
  switch (_zipCode) {
    case "1":
      city = "peshawar";
      break;
    case "2":
      city = "karachi";
      break;
    case "3":
      city = "Mardan";
      break;
    case "4":
      city = "swat";
      break;
    case "5":
      city = "swabi";
      break;
  }
  return city;
}

btnCity.addEventListener("click", () => {
 cityPara.innerText = cityFinder(zipCode.value)
});

const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const mess = document.getElementById('message');
function sendEmail() {
    const body = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone: ${phone.value} Subject: ${subject.value}<br> Message: ${mess.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "smahaboob823@gmail.com",
        Password : "9C98FF53F54AE88F6E0613FBF46CFBE9F0FA",
        To : 'smahaboob823@gmail.com',
        From : "smahaboob823@gmail.com",
        Subject : subject.value,
        Body : body,
    }).then(
        message => {
            if(message != "Failure sending mail.") {
                Swal.fire({
                    title: "Success!",
                    text: "Message Sent Successfully!",
                    icon: "success"
                });
            }
        }
    );
}
function check(){
    const items = document.querySelectorAll(".item");
    for (const item of items) {
        if(item.value == "") {
            item.classList.add("err");
            item.parentElement.classList.add("err");
        }
        item.addEventListener("keyup", () => {
            if(item.value != ""){
                item.classList.remove("err");
                item.parentElement.classList.remove("err");
            }
            else{
                item.classList.add("err");
                item.parentElement.classList.add("err");
            }
        });
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail();
    form.reset();
});
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Web Designer", "App Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    looped: true
});

// let sections = document.querySelectorAll('section');
// let links = document.querySelectorAll('nav .right p a');
// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
//         if (top >= offset && top < offset + height) {
//             links.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelectorAll('nav .right p a[href*=' + id + ']').classList.add('active');
//             })
//         }
//     })
// }

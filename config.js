var config = {
  student_name: "Sofia Sculley",
  student_year_sem: "Summer 2026",
  student_email: "sofia.sculley@gmail.com",

  background_color: "#f3efef",
  text_color: "#2b2a2a",
  accent_color: "#3598a1",

  // Make sure to add the @import from Google Fonts to style.css, ask if you need help!
  font_family: "Fraunces",
  code_font_family: "Sora", 
};

document.title = `${config.student_name}'s PS70 Website`;

document.documentElement.style.setProperty(
  "--background-color",
  config.background_color
);
document.documentElement.style.setProperty(
  "--text-color",
  config.text_color
);
document.documentElement.style.setProperty(
  "--accent-color",
  config.accent_color
);
document.documentElement.style.setProperty(
  "--font-family",
  config.font_family
);
document.documentElement.style.setProperty(
  "--mono-font-family",
  config.code_font_family
);

document.querySelector("footer").innerHTML = `
  <a href="./index.html#final-project">Work</a>
  <a href="./about.html">About</a>

  <div id="contact-info">
    <a href="mailto:${config.student_email}">${config.student_email}</a>
  </div>
`;

document.querySelectorAll('#student-name').forEach(el => {
  el.innerHTML = `${config.student_name}`;
});

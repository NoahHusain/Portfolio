export function addResume(pdf) {
  if (!pdf) return;

  const resumeButton = document.querySelector(".cta-btn--resume");
  resumeButton.setAttribute("href", pdf);
}

export function getGithub() {
  return fetch("https://api.github.com/users/noahhusain").then((res) =>
    res.json()
  );
}

export function getHireable() {
  const obj = getGithub();
  const hireable = obj.hireable;
  if (hireable === null) {
    return "Hireable!";
  }
  return "Not Hireable";
}

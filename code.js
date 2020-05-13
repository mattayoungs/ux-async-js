window.onload = function () {
  // Run this once the page has loaded.
  // search
  document
    .querySelector("#searchButton")
    .addEventListener("click", searchGithub);
  function searchGithub() {
    const searchUserText = document.querySelector("#searchUser").value;
    fetch("https://api.github.com/search/users?q=" + searchUserText)
      .then((response) => response.json())
      .then((result) => {
        let githubUsers = result.items;
        renderUserList(githubUsers);
      });

    // Obtain a list of users from the Github API that match searchUserText
    //  The final result will contain an array under the key 'items'
    // Pass this array to `renderUserList`
  }

  function renderUserList(githubUsers) {
    let html = "";
    html += "<ul>";
    for (let i = 0; i < githubUsers.length; i++) {
      let githubUser = githubUsers[i];
      html += "<li>";
      html += `<img src="${githubUser.avatar_url}" alt="profile imgage of ${githubUser.login}" class="user_avatar">`;
      html += `<a target="_blank" href="${githubUser.html_url}">`;
      html += `<strong>${githubUser.login}</strong>`;
      html += "</a>";
      html += "</li>";
    }
    html += "</ul>";

    document.querySelector("#resultsContainer").innerHTML = html;
  }
};

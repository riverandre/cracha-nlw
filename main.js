//variavel: let ou const
//let é uma varial que pode ser alterado o valor depois
//const é uma varial q não pode ser alterado o valor

const linksSocialMedia = {
  github: 'riverandre',
  youtube: 'riversantos94',
  facebook: 'river.santos.9',
  instagram: 'riversantos_',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    //a variavel li é referente a cada(of) filho da socialLinks (UL)
    //template string = `` quando for concatenar variavel no texto
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  //fetch é um comando ele busca na url a informação e tras
  //promisse é um recurso que o JS pega respostas de alguma coisa  = .then()
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

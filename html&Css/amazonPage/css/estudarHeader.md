- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

body {
background: #eaeded;
font-family: Arial, Helvetica, sans-serif;
}

/_ ================= HEADER ================= _/

header {
background: #131921;
display: flex;
align-items: center;
padding: 10px 20px;
gap: 20px;
}

.logo {
width: 160px;
cursor: pointer;
}

.nav-wrapper {
display: flex;
align-items: center;
width: 100%;
gap: 20px;
}

.nav-wrapper ul {
display: flex;
align-items: center;
list-style: none;
gap: 20px;
}

.nav-wrapper li {
padding: 8px;
border: 1px solid transparent;
transition: .2s;
}

.nav-wrapper li:hover {
border: 1px solid white;
}

.nav-wrapper a {
color: white;
text-decoration: none;
font-size: 15px;
font-weight: bold;
}

/_ Pesquisa _/

.nav-wrapper input {
width: 100%;
height: 42px;
border: none;
outline: none;
padding: 0 15px;
border-radius: 6px;
font-size: 16px;
}

.nav-wrapper input:focus {
box-shadow: 0 0 0 3px #f3a847;
}

.to-the-left {
display: flex;
justify-content: flex-end;
align-items: center;
gap: 15px;
}

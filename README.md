# gonode-desafio-2

Desafio do Bootcamp GoNode - Rocketseat

#Tela de Login
![Tela de Login](/imagens/login.png)

#Tela de Cadastro
![Tela de Cadastro](/imagens/signup.png)

#Dashboard
![Dashboard](/imagens/dashboard.png)

#Agendamento de Horários
![Agendamento de Horários](/imagens/appointments-new.png)

#Agendamento de Horários - Agendado
![Agendado](/imagens/appointments-new2.png)


# Configurando Sequelize

```sh
$ yarn add sequelize
$ yarn add sequelize-cli -D
```

# Executando Sequelize

```sh
$ npx sequelize init
```

- Após executar o comando npx sequelize init, mover a pasta config para dentro do src
- Em seguida, crie uma pasta database (dentro do src) e mova as pastas migrations e seeders
- Mover a pasta models para dentro src/app
- Criar um arquivo na raiz do projeto, .sequelizerc

`````
> file: .sequelizerc
const path = require('path')

module.exports = {
  config: path.resolve('src', 'config', 'database.js'),
  'models-path': path.resolve('src', 'app', 'models'),
  'seeders-path': path.resolve('src', 'database', 'seeders'),
  'migrations-path': path.resolve('src', 'database', 'migrations'),
}
```

```sh
$ npx sequelize migration:create --name=create-users
```


# Configurando a conexão Sequelize

- Instalando o banco de dados Postgres
```sh
$ yarn add pg
```

Ajustando a classe database.js

```
module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'gonodemodulo2',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
```

- Em seguida, olhar o arquivo src/app/models/index.js (Ele sofreu ajustes)

----

# Banco de Dados - Docker
```sh
$ docker run --name database -p 5432:5432 -d -t kartoza/postgis
```
# Banco de Dados - visualizar os Containers rodando
```sh
$ docker ps
```

# Banco de Dados - para executar o Docker (Database)
```sh
$ docker start database
```

- Após isso, criar uma database no Postgres.

* Sugestão de ferramenta: POSTICO


# Banco de Dados - Executando uma migration
```sh
$ npx sequelize db:migrate
```
-------

-d = detached (rodar em background)
-t = Qual o nome da imagem do Banco de Dados


# Instalando a dependência de criptografia Bcrypt
```sh
$ yarn add bcryptjs
```


# Upload de arquivo
1 - Precisa definir no form, o parâmetro multipart

<form action="/signup" method="post" enctype="multipart/form-data">

2 - Instalar a dependência multer
````sh
$ yarn add multer
`````

#Sessão do Usuário
2 - Instalar dependência da Sessão do Usuário

```sh
$ yarn add express-session
```

# Salvar a sessão do usuário em um arquivo

2 - Instalar dependência da Sessão do Usuário

```sh
$ yarn add session-file-store
```

# Instalando as mensagens (Flash)

```sh
$ yarn add connect-flash
```

# Criando a Migration de Appointments

```sh
$ npx sequelize migration:create --name=create-appointments
```

#Executando a migração de dados

```sh
$ npx sequelize db:migrate
```

# Adicionando a biblioteca para trabahar com Data e Hora - MomentJS

```sh
$ yarn add moment
```

---

…or create a new repository on the command line
echo "# gonode-desafio-1" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/marcuspaulo/gonode-desafio-1.git
git push -u origin master
…or push an existing repository from the command line
git remote add origin https://github.com/marcuspaulo/gonode-desafio-1.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

# Dillinger

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.

- Type some Markdown on the left
- See HTML in the right
- Magic

# New Features!

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)

You can also:

- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email. As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is _actually_ written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Tech

Dillinger uses a number of open source projects to work properly:

- [AngularJS] - HTML enhanced for web apps!
- [Ace Editor] - awesome web-based text editor
- [markdown-it] - Markdown parser done right. Fast and easy to extend.
- [Twitter Bootstrap] - great UI boilerplate for modern web apps
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Gulp] - the streaming build system
- [Breakdance](http://breakdance.io) - HTML to Markdown converter
- [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
on GitHub.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### Plugins

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin           | README                                    |
| ---------------- | ----------------------------------------- |
| Dropbox          | [plugins/dropbox/README.md][pldb]         |
| Github           | [plugins/github/README.md][plgh]          |
| Google Drive     | [plugins/googledrive/README.md][plgd]     |
| OneDrive         | [plugins/onedrive/README.md][plod]        |
| Medium           | [plugins/medium/README.md][plme]          |
| Google Analytics | [plugins/googleanalytics/README.md][plga] |

### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
$ node app
```

Second Tab:

```sh
$ gulp watch
```

(optional) Third:

```sh
$ karma test
```

#### Building for source

For production release:

```sh
$ gulp build --prod
```

Generating pre-built zip archives for distribution:

```sh
$ gulp build dist --prod
```

### Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)

### Todos

- Write MORE Tests
- Add Night Mode

## License

MIT

**Free Software, Hell Yeah!**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[dill]: https://github.com/joemccann/dillinger
[git-repo-url]: https://github.com/joemccann/dillinger.git
[john gruber]: http://daringfireball.net
[df1]: http://daringfireball.net/projects/markdown/
[markdown-it]: https://github.com/markdown-it/markdown-it
[ace editor]: http://ace.ajax.org
[node.js]: http://nodejs.org
[twitter bootstrap]: http://twitter.github.com/bootstrap/
[jquery]: http://jquery.com
[@tjholowaychuk]: http://twitter.com/tjholowaychuk
[express]: http://expressjs.com
[angularjs]: http://angularjs.org
[gulp]: http://gulpjs.com
[pldb]: https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md
[plgh]: https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md
[plgd]: https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md
[plod]: https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md
[plme]: https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md
[plga]: https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md

```

```

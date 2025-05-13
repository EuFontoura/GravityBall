# 🪐 Gravity Ball

Um experimento interativo de física 2D com HTML, CSS e JavaScript, que simula uma "bola" (imagem redonda) sujeita à gravidade, colisões e arraste via mouse. Na parte superior, o usuário pode trocar a textura da bola entre panda, marmota e capivara.

## 📁 Estrutura de Arquivos
```
/imgs
  ├─ panda.webp
  ├─ marmota.webp
  └─ capibara.webp
index.html
style.css
script.js
```

## 🧩 Tecnologias Utilizadas
- HTML5 – estrutura da página
- CSS3 – estilos e animações básicas
- JavaScript Vanilla – simulação de física, eventos de mouse e interação

## 🚀 Funcionalidades

#### ✅ Gravidade e Movimento
- A "bola" é afetada pela gravidade e quica com efeito de rebote nas bordas da tela.
- Simula física simplificada:
  - gravidade: constante que acelera a bola verticalmente
  - coeficienteRebote: define quão "elástica" é a colisão com as bordas
  - atrito: reduz a velocidade horizontal com o tempo
  - fatorEscala: controla a intensidade da velocidade após o arraste

#### ✅ Interação com Mouse
- É possível arrastar a bola com o mouse.
- Ao soltar, a bola continua se movendo com base na direção e intensidade do movimento do mouse (simula lançamento com impulso).
- A velocidade da bola é calculada pela posição inicial e a posição final através do seguinte código:
```
const velocidadeInicialX = (e.clientX - inicioX) * fatorEscala
const velocidadeInicialY = (e.clientY - inicioY) * fatorEscala;
```
```e.clientX``` e ```e.clientY``` → posição final do mouse (no evento mouseup)

```inicioX``` e ```inicioY``` → posição inicial do mouse (no evento mousedown)

```fatorEscala``` → constante que "diminui" a velocidade final pra não ficar insana na tela (tá com valor 0.2)

Ou seja: ```v = (posição_final - posição_inicial) x fator_de_escala```


#### ✅ Troca de Textura
- O usuário pode escolher uma imagem (panda, marmota ou capivara) clicando nos círculos coloridos na caixa de seleção que aparece ao hooverar a seta.
- O clique muda dinamicamente o background-image da bola.
  

## 🕹️ Como rodar esse projeto
1. Clone o repositório (ou baixe o zip)
Se estiver usando Git:

```
git clone https://github.com/EuFontoura/GravityBall.git
cd GravityBall
```
Ou então só baixa o .zip e extrai onde quiser.

#### 1. Organize a estrutura de pastas
Certifique-se de que os arquivos estejam organizados assim:

```
/GravityBall
├── index.html
├── style.css
├── script.js
└── /imgs
    ├── panda.webp
    ├── marmota.webp
    └── capibara.webp
```
#### 2. Abra o arquivo index.html no navegador
Sério, só isso. Clica duas vezes no index.html ou abre ele com o botão direito > "Abrir com" > "Google Chrome" (ou o navegador que tu quiser).

Não precisa instalar nada, só rodar servidor ou usar framework. Só HTML, CSS e JS raiz — _do jeitinho que o Frontend hardcore dos anos 2000 gostava._

#### 3. Interaja com a bolinha
Clique e arraste a bolinha pra aplicar “impulso”.

Ela cai com gravidade e rebate nas bordas.

Troque a imagem da bolinha clicando nas opções coloridas acima dela.

## 💙 Contribuições
Esse projeto foi desenvolvido por Gabriel Fontoura.
import Form from './components/Form';
import validator from './functions/validator';
import checkCard from './functions/checkCard';

export default class App {
  constructor() {
    this.form = new Form();
    this.setListeners();
    this.icons;
  }

  drawContainer() {
    const container = document.createElement("div");
    container.classList.add("container");

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("iconContainer_validate");

    container.appendChild(iconContainer);
    container.appendChild(this.form.element);
    document.children[0].children[1].appendChild(container);
    this._drawIcons(iconContainer);
  }

  _drawIcons(container) {
    const img1 = document.createElement("img");
    img1.setAttribute(
      "src",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSG4HpDNA9-KhhonjmQ0-zqK41eJhFGbeKA&usqp=CAU",
    );
    img1.setAttribute("alt", "visa");
    container.appendChild(img1);

    const img2 = document.createElement("img");
    img2.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png",
    );
    img2.setAttribute("alt", "masterCard");
    container.appendChild(img2);

    const img3 = document.createElement("img");
    img3.setAttribute(
      "src",
      "https://static-00.iconduck.com/assets.00/discover-icon-2048x1313-4euh7fjo.png",
    );
    img3.setAttribute("alt", "discover");
    container.appendChild(img3);


    const img4 = document.createElement("img");
    img4.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/2052px-American_Express_logo_%282018%29.svg.png",
    );
    img4.setAttribute("alt", "amex");
    container.appendChild(img4);

    const img5 = document.createElement("img");
    img5.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mir-logo.SVG.svg/2560px-Mir-logo.SVG.svg.png",
    );
    img5.setAttribute("alt", "mir");
    container.appendChild(img5);

    this.icons = Array.from(document.querySelectorAll("img"));
    this.icons.forEach((el) => {
      el.classList.add("icon_active");
      el.classList.add(`icon_${el.alt}`);
    });
  }

  setListeners() {
    this.form.element.addEventListener("submit", (event) => {
      event.preventDefault();
      const inputValue = this.form.element.querySelector(".input_validate").value;
      if (validator(inputValue)) {
        const paySystem = checkCard(inputValue);
        this.icons.forEach((el) => {
          if (!el.classList.contains(`icon_${paySystem}`)) {
            el.classList.remove('icon_active');
            el.classList.add('icon_inactive');
          } else {
            el.classList.remove('icon_inactive');
            el.classList.add('icon_active');
          }
        });
      } else {
        this.icons.forEach((el) => {
          el.classList.remove('icon_inactive');
          el.classList.add('icon_active');
        });
      }
    });

    const input = this.form.element.querySelector(".input_validate");
    input.addEventListener('input', (event) => {
      if (event.target.value === '') {
        console.log(event.target.value);
        this.icons.forEach((el) => el.classList.remove('icon_inactive'));
      }
    });
  }
}

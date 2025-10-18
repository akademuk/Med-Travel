class Header {
    selectors = {
        root: "[data-js-header]",
        overlay: "[data-js-header-overlay]",
        burgerButton: "[data-js-header-burger-button]",
        subMenu: "[data-js-header-submenu]",
        linkSubMenu: "[data-js-header-submenu-link]"
    };

    stateClasses = {
        isActive: "is-active",
        isLock: "is-lock"
    };

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.overlayElement = document.querySelector(this.selectors.overlay);
        this.burgerButtonElement = document.querySelector(this.selectors.burgerButton);
        this.subMenuElements = document.querySelectorAll(this.selectors.subMenu);
        this.linkSubMenuElements = document.querySelectorAll(this.selectors.linkSubMenu);
        this.bindEvents();
        this.linkEvents();
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
        this.overlayElement.classList.toggle(this.stateClasses.isActive);
        document.body.classList.toggle(this.stateClasses.isLock);
    }

    onLinkButtonClick = (event, index) => {
        if (this.subMenuElements[index]) {
            this.subMenuElements[index].classList.toggle(this.stateClasses.isActive);
        }
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener("click", this.onBurgerButtonClick);
    }

    linkEvents() {
        this.linkSubMenuElements.forEach((link, index) => {
            link.addEventListener("click", (event) => this.onLinkButtonClick(event, index));
        });
    }
}

export default Header;
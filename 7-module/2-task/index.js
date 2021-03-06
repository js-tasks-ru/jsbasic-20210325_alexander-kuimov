import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this._modal = this.render();
    this._body = document.querySelector('body');

    this._modal.querySelector('.modal__close').addEventListener('click', this.close);
    document.addEventListener('keydown', this._onClose);
  }

  render() {
    return createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title">
            </h3>
          </div>
          <div class="modal__body">
          </div>
        </div>
      </div> 
    `);
  }

  _onClose = (event) =>{
    if (event.code === 'Escape') this.close();
  }

  setTitle(title) {
    const modalTitle = this._modal.querySelector('.modal__title');
    modalTitle.innerHTML = title;
  }

  setBody(body) {
    const modalBody = this._modal.querySelector('.modal__body');
    modalBody.append(body);
  }

  open = () => {
    this._body.classList.add('is-modal-open');
    this._body.append(this._modal);
  }

  close = () => {
    this._body.classList.remove('is-modal-open');
    this._modal.remove();
    document.removeEventListener('keydown', this._onClose);
  }


}  
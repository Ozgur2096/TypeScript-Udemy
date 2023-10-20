const template = document.createElement('template');
template.innerHTML = ` 
<style>
  label {
    color: green;
    display: block;
  }

  .description {
    font-size: 0.65rem;
    font-weight: lighter;
    color: #777;
  }
</style>
<label>
  <input type= "checkbox" />
  <slot></slot>
  <span class="description">
    <slot name ="description"></slot>
  </span>
</label>`;

class TodoItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define('todo-item', TodoItem);

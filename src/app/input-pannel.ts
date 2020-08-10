class InputPannel {
  initLayout(labels: string[] = [], panel: HTMLDivElement): void {
    labels.forEach(label => {
      const button: HTMLButtonElement = this.createButton(label);
      panel.appendChild(button);
    });
  }

  createButton(label: string): HTMLButtonElement {
    const button: HTMLButtonElement = document.createElement('button');
    const text: Text = document.createTextNode(label);

    button.style.width = '50px';
    button.appendChild(text);
    return button;
  }
}

export default InputPannel;
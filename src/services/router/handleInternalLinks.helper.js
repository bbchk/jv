
export default function handleInternalLinks(inLinkClass) {
  const internalLinks = $$(`a.${inLinkClass}`);

  internalLinks.forEach((e) => {
    const anchorElement = e;

    anchorElement.on('click', (event) => {
      event.preventDefault();

      //TODO: create custom event for signaling of changing route to do some things asap
      const url = new URL(anchorElement.href).pathname;

      this.go(url);
    });
  });
}
